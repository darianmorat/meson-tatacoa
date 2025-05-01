import { useEffect, useState } from "react";
import "./menu.css";
import { useMenuStore } from "../../stores/useMenuStore";

const MenuDisplay = () => {
   const { menuItems, fetchMenu } = useMenuStore();
   const [activeCategory, setActiveCategory] = useState("Principales");

   useEffect(() => {
      fetchMenu(activeCategory);
   }, [activeCategory, fetchMenu]);

   const handleCategoryClick = (category) => {
      setActiveCategory(category);
   };

   return (
      <div className="menu-display">
         <div className="category-tabs">
            <button
               className={`tab-btn ${activeCategory === "Principales" ? "active" : ""}`}
               onClick={() => handleCategoryClick("Principales")}
            >
               Principales
            </button>
            <button
               className={`tab-btn ${activeCategory === "Postres" ? "active" : ""}`}
               onClick={() => handleCategoryClick("Postres")}
            >
               Postres
            </button>
         </div>

         <div className="menu-items">
            {menuItems.length > 0 ? (
               <>
                  {menuItems.map((item) => (
                     <div key={item.id} className="menu-item">
                        <div className="item-image">
                           <img src={item.image_url} alt={item.name} />
                        </div>
                        <div className="item-info">
                           <h3>{item.name}</h3>
                           <p className="item-price">${item.price}</p>
                           <p className="item-desc">{item.description}</p>
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
