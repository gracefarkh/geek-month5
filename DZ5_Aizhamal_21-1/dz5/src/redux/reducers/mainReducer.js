import { types } from "../types";

const initialState = {
    result: [],
    value: 0,
};

export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD:
      return {
        ...state,
        value: +state.value + +action.payload,
        result: [...state.result, { everyNum: +state.value }],
      };
    case types.CLEAR:
      return {
        value: "",
        result: [],
      };

    default:
      return state;
  }
};
