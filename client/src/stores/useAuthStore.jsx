import { create } from "zustand";
import { toast } from "react-toastify";
import api from "../api/axios";

export const useAuthStore = create((set) => ({
   isAuth: false,
   isLoading: true,
   loginAttempts: {},

   authenticate: async (password) => {
      try {
         const body = {
            password: password,
         };

         const res = await api.post("/auth/access", body);

         if (res.data.success) {
            localStorage.setItem("token", res.data.token);
            set({ isAuth: true, loginAttempts: {} });
            toast.success(res.data.message);
         }
      } catch (e) {
         toast.error(e.response.data.message);

         const headers = e.response.headers;
         set({
            loginAttempts: {
               total: headers["ratelimit-limit"], // String (should be saved as a number)
               remaining: headers["ratelimit-remaining"], // String (should be saved as a number)
            },
         });
      }
   },

   logout: () => {
      localStorage.removeItem("token");
      set({ isAuth: false });
      toast.success("Sesión cerrada");
   },

   checkAuth: async () => {
      const token = localStorage.getItem("token");

      if (!token) {
         set({ isAuth: false, isLoading: false });
         return;
      }

      try {
         const config = {
            headers: {
               token: localStorage.token,
            },
         };

         const res = await api.get("/auth/verify", config);

         if (res.data.success) {
            set({ isAuth: true, isLoading: false });
         }
      } catch (e) {
         localStorage.removeItem("token");
         set({ isAuth: false, isLoading: false });
         toast.error(e.response.data.message);
      }
   },
}));
