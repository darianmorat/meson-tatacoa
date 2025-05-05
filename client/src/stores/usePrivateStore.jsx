import { create } from "zustand";
import { toast } from "react-toastify";
import api from "../api/axios";

export const usePrivateStore = create((set) => ({
   isAuth: false,
   checkingAuth: true,

   authenticate: async (password) => {
      try {
         const body = {
            password: password,
         };

         const res = await api.post("/auth/access", body);

         if (res.data.success) {
            localStorage.setItem("token", res.data.token);
            set({ isAuth: true });
            toast.success(res.data.message);
         }
      } catch (e) {
         toast.error(e.response.data.message);
      }
   },

   logout: () => {
      localStorage.removeItem("token");
      set({ isAuth: false, checkingAuth: false });
      toast.success("Sesion cerrada");
   },

   checkAuth: async () => {
      const token = localStorage.getItem("token");

      if (!token) {
         set({ checkingAuth: false });
         return;
      }

      set({ checkingAuth: true });
      try {
         const config = {
            headers: {
               token: localStorage.token,
            },
         };

         const res = await api.get("/auth/verify", config);

         if (res.data.success) {
            set({ isAuth: true, checkingAuth: false });
         }
      } catch (e) {
         localStorage.removeItem("token");
         set({ isAuth: false, checkingAuth: false });
         toast.error(e.response.data.message);
      }
   },
}));
