import {combineReducers, createStore} from 'redux';
import {boardReducer} from './posts/reducers';


const rootReducer = combineReducers({
    board: boardReducer
});

export const store = createStore(rootReducer);
