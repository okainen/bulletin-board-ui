import { combineReducers, createStore } from 'redux';
import { boardReducer } from './posts/reducers';
import { ActionTypes, userReducer } from './user/reducers';


const rootReducer = (state, action) => {
    if (action.type == ActionTypes.SIGN_OUT) {
        state = undefined;
    }


    return combineReducers({
        board: boardReducer,
        user: userReducer
    })(state, action);
};

export const store = createStore(rootReducer);
