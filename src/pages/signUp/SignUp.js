import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import FrontendRoutes from '../../data/constants/FrontendRoutes';
import AuthApi from '../../data/api/AuthApi';
import { Button, Grid, IconButton, InputAdornment, Paper, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { validateEmail, validatePassword } from '../../utils/validators';


const useStyles = makeStyles(theme => ({
    root: {
        ['@media (max-width:650px)']: {
            backgroundColor: theme.palette.secondary.main,
        },
    },
    paper: {
        backgroundColor: theme.palette.secondary.main,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        flexDirection: 'column',
        width: '600px',
        minWidth: '450px',
        minHeight: '400px',
        ['@media (max-width:650px)']: {
            boxShadow: 'none',
            width: 'auto',
            height: 'auto'
        },
        ['@media (max-width:460px)']: {
            '& input': {
                height: '45px',
                fontSize: '25px'
            },
            '& button': {
                height: '45px',
                fontSize: '20px'
            }
        },
        '& a': {
            marginTop: '10px',
            textDecoration: 'none',
            fontFamily: 'Roboto'
        }
    },
    label: {
        marginTop: '10px'
    },
    button: {
        marginTop: '10px',
        '&:enabled': {
            backgroundColor: 'green',
            color: 'yellow',
            '&:hover': {
                backgroundColor: 'transparent',
                color: 'black',
                borderStyle: 'solid',
                borderColor: 'black',
                borderWidth: '3px'
            }
        },
        '&:disabled': {
            backgroundColor: '#bebebe'
        }
    }
}));

const SignUp = () => {
    const classes = useStyles();

    const [username, setUsername] = useState('');

    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);

    const [clicked, setClicked] = useState(false);

    const [usernameConflict, setUsernameConflict] = useState(false);
    const [emailConflict, setEmailConflict] = useState(false);

    const history = useHistory();
    const onClick = () => {
        setClicked(true);
        setUsernameConflict(false);
        setEmailConflict(false);
        AuthApi.signUp({ username, email, password })
            .then(res => {
                history.push(FrontendRoutes.VERIFY_EMAIL);
            })
            .catch(err => {
                setClicked(false);
                const status = err.response.status;
                if (status === 409) {
                    const msg = err.response.data.message;
                    if (msg === 'User with given email already exists') {
                        setEmailConflict(true);
                    } else setUsernameConflict(true);
                } else console.error(err);
            });
    };

    const onUsernameChange = e => {
        setUsername(e.target.value);
        setUsernameConflict(false);
    };

    const onEmailChange = e => {
        setEmail(e.target.value);
        setEmailConflict(false);
    };

    return (
        <Grid container
            direction='column'
            justify='center'
            alignItems='center'
            className={classes.root}
        >
            <Paper className={classes.paper}
                style={clicked
                    ? { pointerEvents: 'none' }
                    : {}
                }
            >
                <form style={{ width: '400px' }}>
                    <Typography className={classes.label}>Username</Typography>
                    <TextField fullWidth
                        value={username}
                        onChange={e => onUsernameChange(e)}
                        {...usernameConflict && {
                            error: true,
                            helperText: 'User with given username already exists'
                        }}
                    />
                    <Typography className={classes.label}>Email</Typography>
                    <TextField fullWidth
                        value={email}
                        type='email'
                        autoComplete='email'
                        onChange={e => onEmailChange(e)}
                        {...(email && !validateEmail(email)) && {
                            error: true,
                            helperText: 'Wrong email format'

                        }}
                        {...emailConflict && {
                            error: true,
                            helperText: 'User with given email already exists'
                        }}
                    />
                    <Typography className={classes.label}>Password</Typography>
                    <TextField fullWidth
                        value={password}
                        {...showPassword ? { type: 'text' } : { type: 'password' }}
                        autoComplete='current-password'
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position='end'>
                                    <IconButton
                                        aria-label='toggle password visibility'
                                        onClick={handleClickShowPassword}
                                    >
                                        {showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}
                        onChange={e => setPassword(e.target.value)}
                        {...(password && !validatePassword(password)) && {
                            error: true,
                            helperText: 'Password must contain 8 to 128 alphanumeric characters, at least one lowercase letter, one uppercase and one digit'

                        }}
                    />
                    <Button fullWidth
                        className={classes.button}
                        {...(!(!!username && validateEmail(email) && validatePassword(password)) || clicked) && { disabled: true }}
                        onClick={onClick}
                    >Sign Up</Button>
                </form>
                <NavLink to={FrontendRoutes.SIGN_IN}>I already have an account</NavLink>
            </Paper>
        </Grid>
    );
};

export default SignUp;
