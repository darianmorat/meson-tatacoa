import { create } from "zustand";
import api from "../api/axios";
import { toast } from "react-toastify";

export const usePublicStore = create((set) => ({
   menuItems: [],
   sliderImgs: [],
   loading: false, // loading state can me managed later as features

   fetchSlider: async () => {
      try {
         set({ loading: true });

         const res = await api.get("/public/get-slider-imgs");

         if (res.data.success) {
            set({ sliderImgs: res.data.data, loading: false });
         }
      } catch (e) {
         set({ loading: false });
         toast.error(e.response.data.message);
      }
   },

   fetchMenu: async (categoryName) => {
      try {
         set({ loading: true });

         const res = await api.get("/public/get-menu", {
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
