import { create } from "zustand";
import api from "../api/axios";
import { toast } from "react-toastify";

export const usePublicStore = create((set, get) => ({
   menuItems: [],
   sliderImgs: [],
   loading: false, // loading state can me managed later as features

   fetchSlider: async () => {
      try {
         set({ loading: true });

         const res = await api.get("/public/sliders");

         if (res.data.success) {
            set({ sliderImgs: res.data.data, loading: false });
         }
      } catch (e) {
         set({ loading: false });
         toast.error(e.response.data.message);
      }
   },

   createSlider: async (imageUrl) => {
      try {
         const config = {
            headers: {
               token: localStorage.token,
            },
         };

         const body = {
            imageUrl: imageUrl,
         };

         const res = await api.post("/private/slider/create", body, config);

         if (res.data.success) {
            toast.success(res.data.message);
            await get().fetchSlider();
         }
      } catch (e) {
         toast.error(e.response.data.message);
      }
   },

   deleteSlider: async (id) => {
      try {
         const config = {
            headers: {
               token: localStorage.token,
            },
         };

         const res = await api.delete(`/private/slider/delete/${id}`, config);

         if (res.data.success) {
            toast.success(res.data.message);
            await get().fetchSlider();
         }
      } catch (e) {
         toast.error(e.response.data.message);
      }
   },

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

   editMenu: async (categoryName, data, item) => {
      try {
         const config = {
            headers: {
               token: localStorage.token,
            },
         };

         const body = {
            name: data.name,
            price: data.price,
            description: data.description,
            imageUrl: data.imageUrl,
         };

         const res = await api.put(`/private/menu/edit/${item.id}`, body, config);

         if (res.data.success) {
            toast.success(res.data.message);
            await get().fetchMenu(categoryName);
         }
      } catch (e) {
         toast.error(e.response.data.message);
      }
   },

   createMenu: async (categoryName, data) => {
      try {
         const config = {
            headers: {
               token: localStorage.token,
            },
            params: { categoryName },
         };

         const body = {
            name: data.name,
            price: data.price,
            description: data.description,
            imageUrl: data.imageUrl,
         };

         const res = await api.post("/private/menu/create", body, config);

         if (res.data.success) {
            toast.success(res.data.message);
            await get().fetchMenu(categoryName);
         }
      } catch (e) {
         toast.error(e.response.data.message);
      }
   },

   deleteMenu: async (categoryName, id) => {
      try {
         const config = {
            headers: {
               token: localStorage.token,
            },
         };

         const res = await api.delete(`/private/menu/delete/${id}`, config);

         if (res.data.success) {
            toast.success(res.data.message);
            await get().fetchMenu(categoryName);
         }
      } catch (e) {
         toast.error(e.response.data.message);
      }
   },
}));
