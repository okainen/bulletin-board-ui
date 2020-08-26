import React from 'react';
import {Route, Switch} from 'react-router-dom';
import BoardContainer from '../board/boardContainer';
import Landing from '../landing/Landing';
import FrontendRoutes from '../../data/constants/FrontendRoutes';
import {Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles(theme => ({
    root: {
        width: '100vw',
        height: '100vh',
        backgroundColor: theme.palette.primary.main,
        fontFamily: 'Roboto',
        overflowY: 'auto'
    }
}));

const Root = () => {
    const classes = useStyles();

    return (
        <Grid container className={classes.root}>
            <Switch>
                <Route exact path='/' component={Landing}/>
                <Route exact path={FrontendRoutes.BOARD} component={BoardContainer}/>
            </Switch>
        </Grid>
    );
};

export default Root;
