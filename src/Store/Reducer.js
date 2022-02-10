import {
    HAMBURGER,
    PROFILE
} from "./Action";

const initialState = {
    hamburger:false,
    profile:null
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case HAMBURGER:
      return {...state, hamburger: action.payload};
    case PROFILE:
      return {...state, profile: action.payload};
    default:
      return state;
  }
};
export default Reducer;