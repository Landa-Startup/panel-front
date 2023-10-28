import axios from "axios";

// Create an Axios instance with a base URL
const apiClient = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_DJANGO_HOST_URL}`,
});

export default apiClient;