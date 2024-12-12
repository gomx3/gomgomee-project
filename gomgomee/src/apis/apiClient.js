import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
});

// 요청 인터셉터
apiClient.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// 응답 인터셉터
apiClient.interceptors.request.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      try {
        const refreshToken = localStorage.getItem("refreshToken");
        const { data } = await axios.get("http://localhost:3000/auth/refresh", {
          refreshToken,
        });

        const newAccessToken = data.accessToken;
        localStorage.setItem("accessToken", newAccessToken);

        // 기존 요청에 새 accessToken 추가 후 다시 시도
        originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
        return apiClient(originalRequest);
      } catch (err) {
        console.error("Refresh Token 만료");
        localStorage.clear();
        window.location.href = "/login"; // 로그아웃 처리
      }
    }
    return Promise.reject(error);
  }
);

export default apiClient;
