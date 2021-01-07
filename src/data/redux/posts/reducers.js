import Immutable from 'immutable';

const postsDefaultState = Immutable.OrderedMap({
  posts: new Immutable.List(),
  postsWereLoaded: false
});

export const boardReducer = (state = postsDefaultState, action) => {
  switch (action.type) {
    case ActionTypes.LOAD_POSTS: {
      return state.set('postsWereLoaded', true);
    }
    case ActionTypes.ADD_POST: {
      return state.update('posts', posts => posts.unshift(action.payload));
    }
    case ActionTypes.EDIT_POST: {
      const i = state
        .get('posts')
        .findIndex(post => post.id === action.payload.id);
      return state.setIn(['posts', i], action.payload);
    }
    case ActionTypes.DELETE_POST: {
      return state.update('posts', posts =>
        posts.filter(post => post.id !== action.payload)
      );
    }
    default:
      return state;
  }
};

export const ActionTypes = {
  LOAD_POSTS: 'LOAD_POSTS',
  ADD_POST: 'ADD_POST',
  EDIT_POST: 'EDIT_POST',
  DELETE_POST: 'DELETE_POST'
};
