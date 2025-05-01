import { Route, Routes } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

import DefaultLayout from "./layouts/DefaultLayout";
import MinimalLayout from "./layouts/MinimalLayout";

import ReservationPage from "./pages/ReservationPage";
import SecretPanel from "./pages/SecretPanel";
import MainPage from "./pages/MainPage";

function App() {
   return (
      <Routes>
         <Route element={<DefaultLayout />}>
            <Route path="/" element={<MainPage />} />
         </Route>

         <Route element={<MinimalLayout />}>
            <Route path="/reservation" element={<ReservationPage />} />
            <Route path="/secret-panel" element={<SecretPanel />} />
         </Route>
      </Routes>
   );
}

export default App;
library.add(fas, fab);
