import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Root from './pages/root/RootContainer';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import theme from './theme';
import { store } from './data/redux/store';


const isProd = process.env.NODE_ENV === 'production';

ReactDOM.render(
    <Router basename={isProd ? '/notes-ui' : ''}>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <Root/>
            </ThemeProvider>
        </Provider>
    </Router>,
    document.getElementById('root'));
