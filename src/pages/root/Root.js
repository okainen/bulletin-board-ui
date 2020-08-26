import React from 'react';
import { Route, Switch } from 'react-router-dom';
import BoardContainer from '../board/BoardContainer';
import Landing from '../landing/Landing';
import SignUp from '../signUp/SignUp';
import SignIn from '../signIn/SignInContainer';
import EmailVerification from '../emailVerification/EmailVerification';
import FrontendRoutes from '../../data/constants/FrontendRoutes';
import NotFound from '../notFound/NotFound';
import { Grid } from '@material-ui/core';
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

const Root = ({isLoggedIn}) => {
    const classes = useStyles();

    return (
        <Grid container className={classes.root}>
            <Switch>
                <Route exact path='/' component={_ => <Landing isLoggedIn={isLoggedIn}/>}/>
                {isLoggedIn && [
                    <Route exact path={FrontendRoutes.BOARD} component={BoardContainer} key={FrontendRoutes.BOARD}/>
                ]}
                {!isLoggedIn && [
                    <Route exact path={FrontendRoutes.SIGN_UP} component={SignUp} key={FrontendRoutes.SIGN_UP}/>,
                    <Route exact path={FrontendRoutes.SIGN_IN} component={SignIn} key={FrontendRoutes.SIGN_IN}/>
                ]}
                <Route exact path={FrontendRoutes.VERIFY_EMAIL} component={EmailVerification}/>
                <Route component={NotFound}/>
            </Switch>
        </Grid>
    );
};

export default Root;
