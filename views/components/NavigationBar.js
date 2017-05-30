import { Route, NavLink } from 'react-router-dom';
import React from 'react';

import PollPage from './PollPage';
import ListPolls from './ListPolls';
import VotePoll from './VotePoll';
import ResultPoll from './ResultPoll';

// const Home = (props) => {
// 	return (<h1>Home {props.match.params.name}</h1>)
// }
// const Null = () => {
// 	return (<h1>Page doesn't exist...</h1>)
// }
export default () => {
	return(
		<div className="ui container">
			<div className="ui two item menu">
			<NavLink className="item" exact to='/'>Home</NavLink>
			<NavLink className="item" to="/ListPolls">View Current Polls</NavLink>
			</div>
			<Route exact path='/' component={PollPage} />
			<Route path='/ListPolls' component={ListPolls} />
			<Route path="/v/:name" component={VotePoll} />
			<Route path="/r/:name" component={ResultPoll} />
			{/*<Route path="*" component={Null} />*/}
		</div>
		)
}

//to App.js
