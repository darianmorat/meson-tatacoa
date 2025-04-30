import { Route, Routes } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

import ReservationPage from "./pages/ReservationPage";
import Navbar from "./components/navbar/Navbar";
import MainPage from "./pages/MainPage";
import Footer from "./components/footer/Footer";

function App() {
   return (
      <>
         <Navbar />
         <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/reservation" element={<ReservationPage />} />
         </Routes>
         <Footer />
      </>
   );
}

export default App;
library.add(fas, fab);
