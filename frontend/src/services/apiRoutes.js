const BASE_URL = "";
const API_VERSION = "/api/v1"
export const userEndpoints = {
    LOGIN_URL : BASE_URL + API_VERSION + "/users/login", 
    SIGNUP_URL:BASE_URL + API_VERSION + "/users/signup/" , 
    LOGOUT_URL : BASE_URL + API_VERSION + "/users/logout", 
    SENDOTP_URL  : BASE_URL + API_VERSION + "/users/send-otp", 
    DELETE_ACCOUNT_URL : BASE_URL + API_VERSION + "/users/delete-my-account", 
}

export const todoEndpoints = { 
    CREATE_TODO : BASE_URL + API_VERSION + "/todos/create-todo", 
    DELETE_TODO : BASE_URL + API_VERSION + "/todos/delete-todo", 
    UPDATE_TODO :BASE_URL + API_VERSION + "/todos/update-todo", 
}