import { create } from "zustand";
import api from "../api/axios";

export const useMenuStore = create((set) => ({
   menuItems: [],
   loading: false,

   fetchMenu: async (categoryName) => {
      try {
         set({ loading: true });

         const res = await api.get("/admin", {
            params: { categoryName },
         });

         if (res.data.success) {
            set({ menuItems: res.data.data, loading: false });
         }
      } catch (e) {
         console.log(e);
      }
   },
}));
