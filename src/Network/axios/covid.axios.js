import { baseUrl } from "../apis/baseUrl";
import axios from 'axios'

//initialize axios instance for baseUrl
var covidAxiosInstance = axios.create({
  baseURL: `${baseUrl}`,
  /* other custom settings */
});

// Request and Response interceptors goes here

export default covidAxiosInstance;
