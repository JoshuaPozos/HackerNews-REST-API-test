import axios from 'axios'

const axiosClient = axios.create({
  baseURL: 'https://hacker-news.firebaseio.com/v0/',
})

export default axiosClient
