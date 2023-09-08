import axios from "axios";

export const axiosWithAccessToken = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL
});

axiosWithAccessToken.interceptors.request.use(
  (config) => {
    const accessToken = window.localStorage.getItem('accessToken');

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
)

axiosWithAccessToken.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response.status === 401) {
      if (error.response.data.message === "expired") {
        const refreshToken = localStorage.getItem("refreshToken");

        if (refreshToken) {
          axios.post(`${import.meta.env.VITE_SERVER_URL}/auth/refresh-token`, {}, {
            headers: {
              Authorization: `Bearer ${refreshToken}`
            }
          }).then(res => {
            localStorage.setItem("accessToken", res.data.accessToken);
            localStorage.setItem("refreshToken", res.data.refreshToken);
          });
          return axiosWithAccessToken(error.config);
        }
      }
      return Promise.reject(error);
    }
  }
)