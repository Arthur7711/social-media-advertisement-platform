import axios from "axios";

export const API = axios.create({
    baseURL:'http://192.168.77.222:8000/'
})