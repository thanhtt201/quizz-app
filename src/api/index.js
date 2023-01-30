import axios from "axios";

export const axiosClient = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 1000,
});

export const userApi = {};

export const categoryApi = {
  getCategories() {
    axiosClient.get("/");
  },
};

export const questionApi = {
  getQuestions() {
    axiosClient.get("/questions");
  },
};
