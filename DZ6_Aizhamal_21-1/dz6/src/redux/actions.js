import axios from "axios";
import { types } from "./types";

export const changeStatusActionTrue = (state) => {
  return {
    type: types.CHANGE_STATUS_TRUE,
    payload: state,
  };
};

export const changeStatusActionFalse = (state) => {
  return {
    type: types.CHANGE_STATUS_FALSE,
    payload: state,
  };
};

export const requestAction = (name, surName, email, website) => {
  return async function (dispatch) {
    try {
      await axios.post("https://jsonplaceholder.typicode.com/users", {
        name: name,
        surname: surName,
        email: email,
        website: website,
      });
      dispatch(changeStatusActionTrue(true));
    } catch {
      dispatch(changeStatusActionFalse(false));
      console.log("error");
    }
  };
};

export const newStatusAction = () => {
  return {
    type: types.NEW_STATUS,
  };
};

export const reverseAction = () => {
  return function (dispatch) {
    setTimeout(() => {
      dispatch(newStatusAction());
    }, 3000);
  };
};
