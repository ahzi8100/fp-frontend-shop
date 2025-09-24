import axios from "axios";

const Api = axios.create({
  baseURL: 'https://ahzi.learndev.my.id/api',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  }
})

export default Api
