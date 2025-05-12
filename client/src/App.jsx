import { useEffect, useState } from "react";
import { Bounce, ToastContainer } from "react-toastify";
import { Navigate, Route, Routes } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

import DefaultLayout from "./layouts/DefaultLayout";
import MinimalLayout from "./layouts/MinimalLayout";

import MainPage from "./pages/mainPage/MainPage";
import ReservationPage from "./pages/reservation/Reservation";
import SecretPanelPage from "./pages/secretPanel/SecretPanel";
import DashboardPage from "./pages/dashboard/Dashboard";

import { useAuthStore } from "./stores/useAuthStore";
import { LoadingSpinner } from "./components/loadingSpinner/LoadingSpinner";

function App() {
   const { isAuth, checkingAuth, checkAuth } = useAuthStore();
   const [showLoader, setShowLoader] = useState(true);

   useEffect(() => {
      const authTimer = setTimeout(() => {
         checkAuth().finally(() => {
            setTimeout(() => setShowLoader(false), 700);
         });
      }, 100);

      return () => clearTimeout(authTimer);
   }, [checkAuth]);

   if (checkingAuth || showLoader) {
      return <LoadingSpinner />;
   }

   return (
      <>
         <Routes>
            <Route element={<DefaultLayout />}>
               <Route path="/" element={<MainPage />} />
            </Route>

            <Route element={<MinimalLayout />}>
               <Route path="/reservation" element={<ReservationPage />} />
               <Route
                  path="/secret-panel"
                  element={isAuth ? <Navigate to={"/dashboard"} /> : <SecretPanelPage />}
               />
               <Route
                  path="/dashboard"
                  element={isAuth ? <DashboardPage /> : <Navigate to={"/"} />}
               />
            </Route>
         </Routes>
         <ToastContainer
            theme="colored"
            autoClose={4000}
            position="bottom-right"
            transition={Bounce}
            pauseOnHover={false}
         />
      </>
   );
}

export default App;
library.add(fas, fab);
