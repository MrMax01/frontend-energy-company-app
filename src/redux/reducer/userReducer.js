import { GET_AUTHORIZATION } from "../actions";

const initialState = {
  content: null,
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_AUTHORIZATION:
      return {
        content: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
