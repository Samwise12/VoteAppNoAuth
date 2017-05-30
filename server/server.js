import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
//webpack imports
import webpack from 'webpack'
import webpackMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import config from './../webpack.config.js'

import mongodb from 'mongodb';
import mongoose from 'mongoose';

 import data from './routes/data';
//webpack app
const compiler = webpack(config)
const middleware = webpackMiddleware(compiler, {
  publicPath: config.output.publicPath,
  stats: {//Powershell leaves out info
    colors: true,
    hash: false,
    timings: true,
    chunks: false,
    chunkModules: false,
    modules: false
  }
})
/////
  const app = express();
  app.use(bodyParser.json());
  app.use('/api/data', data);
/////
   app.use(middleware)
   app.use(webpackHotMiddleware(compiler))
   app.get('*', function response (req, res) {
      res.write(middleware.fileSystem.readFileSync(path.join(__dirname, '../dist/index.html')))
      res.end()
    })

const dbUrl = "mongodb://localhost:27017/vote1";
mongoose.connect(dbUrl);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected to mongodb');
});
//////new
// app.get('/api/data',(req,res) => {
//   db.collection('polls').find({}).toArray((err, polls) => {
//     res.json({ polls });
//   });
// });
/////
app.listen(3000, function(error){
	if(error) throw error;
	console.log('express server: ', 3000);
});



