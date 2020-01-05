import React, { Fragment } from 'react';
import _ from 'lodash';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { SimpleInput } from '.';
import { VerticalSpacer } from './../components';

const windowWidth = window.innerWidth;

const styles = theme => ({
	formContainer: {
		paddingLeft: '7%'
	},
	titlecontainer: {
		marginLeft: 10
	},
	inputcontainer: {
		paddingTop: 5,
		paddingBottom: 5,
		marginLeft: 10
	}
});

const FormGenerator = props => {
	const { classes, config } = props;
	const { formTitle = '', form = {}, formSetter = () => {} } = config;

	return (
		<Grid item xs={12} container direction="row" justify="flex-start" className={classes.formContainer}>
			<Grid key={formTitle + '_block'} item xs={12} className={classes.titlecontainer}>{ _.upperCase(formTitle) }</Grid>
			<VerticalSpacer height="15" />
			<Fragment>
				{
					Object.keys(form).map(key => (
						<Grid key={key} item xs={windowWidth > 700 ? 5 : 12} className={classes.inputcontainer}>
							<SimpleInput config={{ key: key, placeholder: _.capitalize(_.lowerCase(key)), value: form[key], valueSetter: formSetter }} />
						</Grid>
					))
				}
			</Fragment>
		</Grid>
	);
}

export default withStyles(styles)(FormGenerator);