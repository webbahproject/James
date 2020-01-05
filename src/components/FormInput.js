import React, { useState, useEffect, useMemo } from 'react';
import _ from 'lodash';
import { withStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';

const styles = theme => ({
	textField: {
		background: '#FFF'
	}
});

const FormInput = props => {
	const { classes, config } = props;
	const { key = '', placeholder = '', value = '', valueSetter = () => {} } = config;

	return (
		<TextField
			fullWidth
			type="text"
			margin="dense"
			variant="outlined"
			placeholder={placeholder}
			value={value}
			onChange={evt => valueSetter(key, evt.target.value)}
			className={classes.textField}
		>
		</TextField>
	);
}

export default withStyles(styles)(FormInput);