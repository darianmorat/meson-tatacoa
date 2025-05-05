import MapRender from "../components/map/Map";
import MenuDisplay from "../components/menu/Menu";
import My360Route from "../components/route/route360";
import BackgroundSlider from "../components/slider/Slider";

const MainPage = () => {
   return (
      <div className="main-page-container">
         <div className="main-page">
            <div className="section-container slider">
               <section className="slider-section">
                  <header className="title-header">
                     <h2>El Meson De La Tatacoa</h2>
                     <p>
                        Explora la belleza de nuestra tierra Huila-Neiva y sus alrededores
                     </p>
                  </header>
                  <BackgroundSlider />
               </section>
            </div>
            <div className="section-container map">
               <section id="map" className="map-section">
                  <header className="title-header">
                     <h2>Hospedaje</h2>
                     <p>Mapa 360 - Novedad y usabilidad</p>
                  </header>
                  <MapRender />
               </section>
            </div>
            <div id="restaurant" className="section-container restaurant">
               <section className="restaurant-section">
                  <header className="title-header">
                     <h2>Restaurante Gourmet</h2>
                     <p>Ofreciendo platos Huilenses!</p>
                  </header>
                  <MenuDisplay />
               </section>
            </div>
            <div id="mega-fauna" className="section-container route">
               <section className="route-section">
                  <header className="title-header">
                     <h2>Mega Fauna</h2>
                     <p>Ruta 360 - Descubrelo de una nueva manera</p>
                  </header>
                  <My360Route />
               </section>
            </div>
            <div className="section-container museum">
               <section className="museum-section">
                  <header className="title-header">
                     <h2>Museo</h2>
                     <p>Descubre nuestro catalogo de fosiles!</p>
                     <p>(PROXIMAMENTE)</p>
                  </header>
               </section>
            </div>
         </div>
      </div>
   );
};

export default MainPage;
