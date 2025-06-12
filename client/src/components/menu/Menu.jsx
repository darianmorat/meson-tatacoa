import { useEffect, useState } from "react";
import { usePublicStore } from "../../stores/usePublicStore";
import styles from "./Menu.module.css";

const MenuDisplay = () => {
   const { menuItems, fetchMenu } = usePublicStore();
   const [activeCategory, setActiveCategory] = useState("Principales");

   useEffect(() => {
      fetchMenu(activeCategory);
   }, [activeCategory, fetchMenu]);

   const handleCategoryClick = (category) => {
      setActiveCategory(category);
   };

   return (
      <div className={styles.menu}>
         <div className={styles.categoryTabs}>
            <button
               className={`${styles.tabBtn} ${activeCategory === "Principales" ? styles.active : ""}`}
               onClick={() => handleCategoryClick("Principales")}
            >
               Típicos
            </button>
            <button
               className={`${styles.tabBtn} ${activeCategory === "Postres" ? styles.active : ""}`}
               onClick={() => handleCategoryClick("Postres")}
            >
               Especiales
            </button>
         </div>

         <div className={styles.menuItems}>
            {menuItems.length > 0 ? (
               <>
                  {menuItems.map((item) => (
                     <div key={item.id} className={styles.menuItem}>
                        <div className={styles.itemImage}>
                           <img src={item.image_url} alt={item.name} />
                        </div>
                        <div className={styles.itemInfo}>
                           <h3>{item.name}</h3>
                           <p className={styles.itemPrice}>${item.price}</p>
                           <p className={styles.itemDesc}>{item.description}</p>
                        </div>
                     </div>
                  ))}
               </>
            ) : (
               <>
                  <p className="no-data-menu">Parece que no hay ningun articulo!</p>
               </>
            )}
         </div>
      </div>
   );
};

export default MenuDisplay;
