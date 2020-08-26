import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles(theme => ({
    root: {
        textAlign: 'center',
        '& h1': {
            fontSize: theme.text.fontSize.primary
        }
    }
}));

const NotFound = () => {
    const classes = useStyles();

    return (
        <Grid container
              justify='center'
              alignItems='center'
              direction='column'
              className={classes.root}
        >
            <Typography component='h1'>404</Typography>
            <Typography component='h1'>Not Found.</Typography>
        </Grid>
    );
};

export default NotFound;
