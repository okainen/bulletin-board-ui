import { ActionTypes } from './reducers';


export const loadPosts = _ => ({
    type: ActionTypes.LOAD_POSTS
});

export const addPost = post => ({
    type: ActionTypes.ADD_POST,
    payload: post
});

export const editPost = post => ({
    type: ActionTypes.EDIT_POST,
    payload: post
});

export const deletePost = id => ({
    type: ActionTypes.DELETE_POST,
    payload: id
});
