import axios from 'axios';

const api = axios.create({
    baseURL: "https://workiapp.herokuapp.com/"
});


export default api;