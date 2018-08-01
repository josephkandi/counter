import * as actions from '../Actions/CounterActionTypes';

export default (state = 0, action) => {
  switch (action.type) {
    case actions.INCREMENT:
      return state + 1;
    case actions.DECREMENT:
      if (state === 0) {
        return 0;
      }
      return state - 1;
    default:
      return state;
  }
};
