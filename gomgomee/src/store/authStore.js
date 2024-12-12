import { create } from "zustand";
import apiClient from "../apis/apiClient";

const useAuthStore = create((set) => ({
  email: localStorage.getItem("email") || "",
  isVerified: JSON.parse(localStorage.getItem("isVerified")),

  login: async (email, password) => {
    try {
      const response = await apiClient.post("/auth/login", {
        email,
        password,
      });
      localStorage.setItem("refreshToken", response.data.refreshToken);
      localStorage.setItem("accessToken", response.data.accessToken);

      set(() => ({ email, isVerified: true }));
      localStorage.setItem("email", email);
      localStorage.setItem("isVerified", true);
    } catch (error) {
      console.log("Error:", error);
      alert("로그인 실패");
    }
  },

  logout: () => {
    set(() => ({ email: "", isVerified: false }));
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("email");
    localStorage.setItem("isVerified", false);
  },
}));

export default useAuthStore;
