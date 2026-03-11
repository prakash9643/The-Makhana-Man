import axios from "axios"

export const woo = axios.create({
baseURL: "http://localhost/the-makhana-man/wp-json/wc/v3",
auth: {
username: process.env.WC_KEY,
password: process.env.WC_SECRET
}
})