import axios from "axios";

export const api = 'http://localhost:1000'

export const axiosApi = axios.create({
    'baseURL': api,
    headers: {
        'Content-Type': 'application/json'
    }
})


