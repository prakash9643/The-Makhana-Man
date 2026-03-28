// lib/products.ts
import axios, { AxiosError } from "axios"

const API_URL = "https://aaronature.com/wp-json/wc/v3"

// Create axios instance with default config
const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Origin': 'http://localhost:3000' // Your Next.js URL
  },
  withCredentials: true
})

export async function getAllProducts() {
  try {
    console.log("Fetching products from headless WooCommerce...")
    
    const response = await apiClient.get('/products', {
      params: {
        consumer_key: process.env.WC_KEY,
        consumer_secret: process.env.WC_SECRET,
        per_page: 50,
        status: 'publish'
      }
    })
    
    console.log(`✅ ${response.data.length} products fetched`)
    return response.data
    
  } catch (error: any) {
    console.error("Error fetching products:", {
      message: error.message,
      status: error.response?.status,
      data: error.response?.data,
      headers: error.response?.headers
    })
    
    // Try alternative method with different headers
    try {
      console.log("Trying alternative method...")
      const altResponse = await axios({
        method: 'get',
        url: `${API_URL}/products`,
        params: {
          consumer_key: process.env.WC_KEY,
          consumer_secret: process.env.WC_SECRET,
          per_page: 50
        },
        headers: {
          'User-Agent': 'Mozilla/5.0 (compatible; Next.js/Headless)',
          'Accept': 'application/json'
        }
      })
      return altResponse.data
    } catch (altError: any) {
      console.error("Alternative also failed:", altError.message)
      throw error
    }
  }
}

export async function getProducts(slug: string) {
  try {
    const response = await apiClient.get('/products', {
      params: {
        slug,
        consumer_key: process.env.WC_KEY,
        consumer_secret: process.env.WC_SECRET
      }
    })
    
    return response.data[0] || null
  } catch (error) {
    console.error("Error fetching product:", error)
    throw error
  }
}