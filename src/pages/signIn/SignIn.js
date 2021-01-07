import React, {useState} from 'react';
import {NavLink, useHistory} from 'react-router-dom';
import FrontendRoutes from '../../data/constants/FrontendRoutes';
import AuthApi from '../../data/api/AuthApi';
import {
  Button,
  Grid,
  IconButton,
  InputAdornment,
  Paper,
  TextField,
  Typography
} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
import {Visibility, VisibilityOff} from '@material-ui/icons';
import {validateEmail} from '../../utils/validators';

const useStyles = makeStyles(theme => ({
  root: {
    ['@media (max-width:650px)']: {
      backgroundColor: theme.palette.secondary.main
    }
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
    minHeight: '300px',
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

const SignIn = ({signIn}) => {
  const classes = useStyles();

  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const [clicked, setClicked] = useState(false);

  const [failed, setFailed] = useState(false);

  const history = useHistory();
  const onClick = () => {
    setClicked(true);
    setFailed(false);
    AuthApi.signIn({email, password})
      .then(res => {
        localStorage.setItem('isLoggedIn', 'true');
        signIn();
        history.push(FrontendRoutes.BOARD);
      })
      .catch(err => {
        setClicked(false);
        const status = err.response.status;
        if (status === 401) {
          setFailed(true);
        } else if (status === 403) {
          history.push(FrontendRoutes.VERIFY_EMAIL);
        } else console.error(err);
      });
  };

  return (
    <Grid
      container
      direction='column'
      justify='center'
      alignItems='center'
      className={classes.root}
    >
      <Paper
        className={classes.paper}
        style={clicked ? {pointerEvents: 'none'} : {}}
      >
        <form style={{width: '400px'}}>
          <Typography className={classes.label}>Email</Typography>
          <TextField
            fullWidth
            value={email}
            type='email'
            autoComplete='email'
            onChange={e => setEmail(e.target.value)}
            {...(email &&
              !validateEmail(email) && {
                error: true,
                helperText: 'Wrong email format'
              })}
          />
          <Typography className={classes.label}>Password</Typography>
          <TextField
            fullWidth
            value={password}
            {...(showPassword ? {type: 'text'} : {type: 'password'})}
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
            {...(failed && {
              error: true,
              helperText: 'Wrong password'
            })}
          />
          <Button
            fullWidth
            className={classes.button}
            {...((!(validateEmail(email) && !!password) || clicked) && {
              disabled: true
            })}
            onClick={onClick}
          >
            Sign In
          </Button>
        </form>
        <NavLink to={FrontendRoutes.SIGN_UP}>I have no account</NavLink>
      </Paper>
    </Grid>
  );
};

export default SignIn;
