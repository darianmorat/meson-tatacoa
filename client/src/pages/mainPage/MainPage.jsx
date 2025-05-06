import MapRender from "../../components/map/Map";
import MenuDisplay from "../../components/menu/Menu";
import My360Route from "../../components/route/route360";
import BackgroundSlider from "../../components/slider/Slider";
import styles from "./MainPage.module.css";

const MainPage = () => {
   return (
      <div className={styles.mainPage}>
         <div className={styles.container}>
            <div className={styles.slider}>
               <section className={styles.sliderSection}>
                  <header className={styles.titleHeader}>
                     <h2>El Meson De La Tatacoa</h2>
                     <p>
                        Explora la belleza de nuestra tierra Huila-Neiva y sus alrededores
                     </p>
                  </header>
                  <BackgroundSlider />
               </section>
            </div>

            <div className={styles.map} id="map">
               <section className={styles.mapSection}>
                  <header className={styles.titleHeader}>
                     <h2>Hospedaje</h2>
                     <p>Mapa 360 - Novedad y usabilidad</p>
                  </header>
                  <MapRender />
               </section>
            </div>

            <div className={styles.restaurant} id="restaurant">
               <section className={styles.restaurantSection}>
                  <header className={styles.titleHeader}>
                     <h2>Restaurante Gourmet</h2>
                     <p>Ofreciendo platos Huilenses!</p>
                  </header>
                  <MenuDisplay />
               </section>
            </div>

            <div className={styles.route} id="mega-fauna">
               <section className={styles.routeSection}>
                  <header className={styles.titleHeader}>
                     <h2>Mega Fauna</h2>
                     <p>Ruta 360 - Descubrelo de una nueva manera</p>
                  </header>
                  <My360Route />
               </section>
            </div>

            <div className={styles.museum}>
               <section className={styles.museumSection}>
                  <header className={styles.titleHeader}>
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
