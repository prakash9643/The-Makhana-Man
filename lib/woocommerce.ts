import axios from "axios"

export const woo = axios.create({
  baseURL: process.env.WC_API_URL,
  params: {
    username: process.env.WC_KEY,
    password: process.env.WC_SECRET 
  }
})