import { useState } from "react";
import "./menu.css";

const MenuDisplay = () => {
   const menuData = {
      categories: [
         {
            id: 1,
            name: "Principales",
            items: [
               {
                  id: 101,
                  name: "Truffle Pasta",
                  price: 24.99,
                  description: "Handmade pasta with black truffle sauce",
                  image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=500&auto=format",
               },
               {
                  id: 102,
                  name: "Grilled Salmon",
                  price: 22.5,
                  description: "Fresh Atlantic salmon with lemon butter",
                  image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=500&auto=format",
               },
               {
                  id: 103,
                  name: "Grilled Salmon",
                  price: 22.5,
                  description: "Fresh Atlantic salmon with lemon butter",
                  image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=500&auto=format",
               },
               {
                  id: 104,
                  name: "Grilled Salmon",
                  price: 22.5,
                  description: "Fresh Atlantic salmon with lemon butter",
                  image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=500&auto=format",
               },
               {
                  id: 105,
                  name: "Grilled Salmon",
                  price: 22.5,
                  description: "Fresh Atlantic salmon with lemon butter",
                  image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=500&auto=format",
               },
            ],
         },
         {
            id: 2,
            name: "Postres",
            items: [
               {
                  id: 201,
                  name: "Chocolate Soufflé",
                  price: 12.5,
                  description: "Warm chocolate dessert with vanilla ice cream",
                  image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=500&auto=format",
               },
            ],
         },
      ],
   };

   const [activeCategory, setActiveCategory] = useState(menuData.categories[0].id);

   return (
      <div className="menu-display">
         <div className="category-tabs">
            {menuData.categories.map((category) => (
               <button
                  key={category.id}
                  className={`tab-btn ${activeCategory === category.id ? "active" : ""}`}
                  onClick={() => setActiveCategory(category.id)}
               >
                  {category.name}
               </button>
            ))}
         </div>

         <div className="menu-items">
            {menuData.categories
               .find((cat) => cat.id === activeCategory)
               .items.map((item) => (
                  <div key={item.id} className="menu-item">
                     <div className="item-image">
                        <img src={item.image} alt={item.name} />
                     </div>
                     <div className="item-info">
                        <h3>{item.name}</h3>
                        <p className="item-price">${item.price.toFixed(2)}</p>
                        <p className="item-desc">{item.description}</p>
                     </div>
                  </div>
               ))}
         </div>
      </div>
   );
};

export default MenuDisplay;
