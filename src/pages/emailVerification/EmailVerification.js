import React from 'react';
import {NavLink} from 'react-router-dom';
import {Grid, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: 'center',
    '& h1': {
      fontSize: theme.text.fontSize.primary
    },
    '& a': {
      fontSize: theme.text.fontSize.secondary,
      padding: 25,
      textDecoration: 'none',
      color: 'black',
      padding: 10,
      borderRadius: 10,
      backgroundColor: 'yellow',
      boxShadow: '2px 2px 2px rgba(0, 0, 0, 0.5)',
      fontFamily: 'Roboto',
      '&:hover': {
        backgroundColor: 'green',
        color: 'white'
      }
    }
  }
}));

const EmailVerification = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      justify='center'
      alignItems='center'
      direction='column'
      wrap='nowrap'
      className={classes.root}
    >
      <Typography component='h1'>
        A verification link has been sent to your email.
      </Typography>
      <NavLink to='/'>Go to main page</NavLink>
    </Grid>
  );
};

export default EmailVerification;
