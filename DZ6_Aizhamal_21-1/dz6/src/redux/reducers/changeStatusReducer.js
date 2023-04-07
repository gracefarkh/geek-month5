import { types } from "../types";

const initialState = {
  status: false,
};

export function changeStatusReducer(state = initialState, action) {
  switch (action.type) {
    case types.CHANGE_STATUS_TRUE:
      return { ...state, status: action.payload };
    case types.NEW_STATUS:
      return { ...state, status: false };
    default:
      return state;
  }
}
