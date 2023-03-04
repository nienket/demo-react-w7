import axios from "axios";
import { NotificationManager } from "react-notifications";
import {
  LOGIN_FAILED,
  LOGIN_SUCCESS,
} from "../constants/user.const";

// const API_URL = process.env.REACT_APP_API_URL;
const API_URL = "https://63662c6d79b0914b75cafbff.mockapi.io/";

export const postLogin = () => {
  return (dispatch) => {
    axios({
      method: "GET",
      url: `${API_URL}/login`,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log("thanh cong");
        dispatch(postLoginSuccess(res.data));
        // localStorage.setItem("userLogin", JSON.stringify(res.data));
      })
      .catch((err) => {
        console.log("that bai");
        dispatch(postLoginFailed(err));
        // NotificationManager.error(err.response.data.message);
      });
  };
};

export const postLoginSuccess = (user) => {
  return {
    type: LOGIN_SUCCESS,
    payload: user,
  };
};

const postLoginFailed = (err) => {
  return {
    type: LOGIN_FAILED,
    payload: err,
  };
};