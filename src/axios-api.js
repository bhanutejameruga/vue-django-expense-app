import axios from 'axios'


var token = localStorage.getItem('token') || false;

if(token)
{
    axios.defaults.headers.common['Authorization'] = 'Token '+token;
}

const getAPI = axios.create({
    baseURL: 'http://127.0.0.1:8000',
    timeout: 1000,
})


export { getAPI }