import React from 'react';
import PropTypes from 'prop-types';

const TextFieldGroup = ({ name, value, label, error, type, checkUserExists }) => {
	return (
		<div className={classnames("form-group", { 'has-error': error })}>
			<label>{label}</label>
			<input type={type} name={name} className="form-control"
			onBlur={checkUserExists}/>
			{error && <span className="help-block">{error}</span>}
			</div>
		)
}

