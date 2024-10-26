import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/v1/";

const register = (email, password, name, phone, companySize,confirmpassword) => {
  return axios.post(API_URL + "users/signup", {
    email, password, name, phone, companySize,confirmpassword
  });
};

const login = (email, password) => {
  return axios
    .post(API_URL + "users/login", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
  return axios.post(API_URL + "signout").then((response) => {
    return response.data;
  });
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const getInterviews = () => {
  return axios.get(API_URL + "interviews/").then((response) => {
    return response.data;
  });
};

const getUserbyId = (user_id) => {
  return axios.get(API_URL + "user/"+user_id).then((response) => {
    return response.data;
  });
};


const createInterview = (
  title,
  description,
  experience,
  candidates,
  endDate,
  user
) => {
  return axios
    .post(API_URL + "interviews/", {
      title,
      description,
      experience,
      candidates,
      endDate,
      user,
    })
    .then((response) => {
      if (response.data) {
        localStorage.setItem("interview", JSON.stringify(response.data));
        console.log(response.data);
      }

      return response.data;
    });
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
  createInterview,
  getInterviews,
  getUserbyId
};

export default AuthService;
