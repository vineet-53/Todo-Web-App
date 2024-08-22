import dotenv from "dotenv";
const BASE_URL = `${process.env.REACT_APP_SECRET_NAME}/api/v1`;
export const userEndpoints = {
  LOGIN_URL: BASE_URL + "/users/login",
  SIGNUP_URL: BASE_URL + "/users/signup/",
  LOGOUT_URL: BASE_URL + "/users/logout",
  SENDOTP_URL: BASE_URL + "/users/send-otp",
  DELETE_ACCOUNT_URL: BASE_URL + "/users/delete-my-account",
};

export const todoEndpoints = {
  CREATE_TODO_URL: BASE_URL + "/todos/create-todo",
  DELETE_TODO_URL: BASE_URL + "/todos/delete-todo",
  UPDATE_TODO_URL: BASE_URL + "/todos/update-todo",
  GET_ALL_TODOS_URL: BASE_URL + "/todos/get-all-todos",
};
