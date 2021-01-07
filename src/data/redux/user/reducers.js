import Immutable from 'immutable';

const userDefaultState = Immutable.OrderedMap({
  isLoggedIn: localStorage.getItem('isLoggedIn') === 'true'
});

export const userReducer = (state = userDefaultState, action) => {
  switch (action.type) {
    case ActionTypes.SIGN_IN: {
      return state.set('isLoggedIn', true);
    }
    default:
      return state;
  }
};

export const ActionTypes = {
  SIGN_IN: 'SIGN_IN',
  SIGN_OUT: 'SIGN_OUT'
};
