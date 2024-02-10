import axios from "axios";

export const apiSurvey = axios.create({
    baseURL: import.meta.env.VITE_API_SURVEY,
});