import { create } from "zustand";
import api from "../api/axios";
import { toast } from "react-toastify";

export const usePublicStore = create((set) => ({
   menuItems: [],
   // sliderImgs: [], // first finish the menu items one and then add the others
   loading: false, // loading state can me managed later as features

   fetchMenu: async (categoryName) => {
      try {
         set({ loading: true });

         const res = await api.get("/public/menu", {
            params: { categoryName },
         });

         if (res.data.success) {
            set({ menuItems: res.data.data, loading: false });
         }
      } catch (e) {
         set({ loading: false });
         toast.error(e.response.data.message);
      }
   },
}));
