//import constants here
import {
  SET_DUMMY
} from '../constants';


//initial state
const initialState = {
  fetching: false
};

export default (state=initialState, action) => {
  switch(action.type) {
    case SET_DUMMY:
      return {
        ...state,
        fetching: action.payload
      }
    default:
      return state;
  }
}