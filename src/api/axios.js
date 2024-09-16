import axios from "axios";

const axiosInstance = axios.create({
    timeout: 1000,
    params:{}
});

export {axiosInstance as axios}