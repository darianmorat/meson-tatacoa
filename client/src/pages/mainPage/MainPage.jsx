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
                     <h2>Meson De La Tatacoa</h2>
                     <p>Turismo rural de aventura, explora y disfruta sus alrededores</p>
                  </header>
                  <BackgroundSlider />
               </section>
            </div>

            <div className={styles.map} id="map">
               <section className={styles.mapSection}>
                  <header className={styles.titleHeader}>
                     <h2>Alojamiento Rural</h2>
                     <p>Cabañas ecológicas y zona de camping</p>
                  </header>
                  <MapRender />
               </section>
            </div>

            <div className={styles.restaurant} id="restaurant">
               <section className={styles.restaurantSection}>
                  <header className={styles.titleHeader}>
                     <h2>Restaurante</h2>
                     <p>Ofreciendo platos tipicos Huilenses</p>
                  </header>
                  <MenuDisplay />
               </section>
            </div>

            <div className={styles.route} id="mega-fauna">
               <section className={styles.routeSection}>
                  <header className={styles.titleHeader}>
                     <h2>Mega Fauna</h2>
                     <p>Ruta 360, explora en realidad aumentada!</p>
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
