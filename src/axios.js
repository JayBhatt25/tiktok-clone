import axios from 'axios'

const instance = axios.create({
    baseURL: "https://tiktok-backend-25.herokuapp.com/",
});

export default instance;