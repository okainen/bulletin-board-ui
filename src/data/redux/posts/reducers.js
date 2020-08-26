import Immutable from 'immutable';
import {v1 as uuidv1} from 'uuid';


const postsDefaultState = Immutable.OrderedMap({
    posts: new Immutable.List()
});

export const boardReducer = (state = postsDefaultState, action) => {
    switch (action.type) {
        case ActionTypes.ADD_POST: {
            return state.update('posts', posts => posts.unshift(
                action.payload.set('id', uuidv1()).set('modified', new Date())
            ));
        }
        case ActionTypes.EDIT_POST: {
            const i = state.get('posts').findIndex(post => post.id === action.payload.id);
            return state.setIn(['posts', i], action.payload.set('modified', new Date()));
        }
        case ActionTypes.DELETE_POST:
            return state.update('posts', posts => posts.filter(post => post.id !== action.payload));
        default:
            return state;
    }
};

export const ActionTypes = {
    ADD_POST: 'ADD_POST',
    EDIT_POST: 'EDIT_POST',
    DELETE_POST: 'DELETE_POST'
};
