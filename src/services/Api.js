import axios from "axios";

const Api = axios.create({
  baseURL: 'http://backend-shop.test/api'
})

export default Api
