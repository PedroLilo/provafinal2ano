import axios from "axios";
export const api = axios.create({
    baseURL: "https://apiflask-8cgv.onrender.com",
    headers: {
        'Content-Type': 'application/json'
    }
})