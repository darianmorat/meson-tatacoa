import { useEffect, useState } from "react";
import { usePublicStore } from "../../../../stores/usePublicStore";
import { CreateMenuForm } from "../../../../components/MenuActions/CreateMenuForm";
import { EditMenuForm } from "../../../../components/MenuActions/EditMenuForm";
import { DeleteConfirm } from "../../../../components/MenuActions/DeleteConfirm";
import { Popup } from "../../../../components/popup/Popup";
import styles from "./Menu.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { RemoveScroll } from "react-remove-scroll";

export const MenuSection = () => {
   const [activeCategory, setActiveCategory] = useState("Principales");
   const [menuContent, setMenuContent] = useState(null);
   const [selectedItem, setSelectedItem] = useState(null);

   const handleCategoryClick = (category) => {
      setActiveCategory(category);
   };

   const { fetchMenu, menuItems } = usePublicStore();

   useEffect(() => {
      fetchMenu(activeCategory);
   }, [activeCategory, fetchMenu]);

   const menuPopupContent = (type, item) => {
      switch (type) {
         case "create":
            return (
               <CreateMenuForm
                  setMenuContent={setMenuContent}
                  category={activeCategory}
               />
            );
         case "edit":
            return (
               <EditMenuForm
                  item={item}
                  setMenuContent={setMenuContent}
                  category={activeCategory}
               />
            );
         case "delete":
            return (
               <DeleteConfirm
                  item={item}
                  setMenuContent={setMenuContent}
                  category={activeCategory}
               />
            );
         default:
            return null;
      }
   };

   return (
      <>
         <div className={styles.categoryTabs}>
            <div>
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
            <button className={styles.createBtn} onClick={() => setMenuContent("create")}>
               + Añadir producto
            </button>
         </div>

         <div className={styles.menuItems}>
            {menuItems.length > 0 ? (
               <>
                  {menuItems.map((item) => (
                     <div key={item.id} className={styles.menuItem}>
                        <div>
                           <div className={styles.itemImage}>
                              <img src={item.image_url} alt={item.name} />
                           </div>
                           <div className={styles.itemInfo}>
                              <h3>{item.name}</h3>
                              <p className={styles.itemPrice}>${item.price}</p>
                              <p className={styles.itemDesc}>{item.description}</p>
                           </div>
                        </div>
                        <div className={styles.actionBtns}>
                           <button
                              className={styles.editBtn}
                              onClick={() => {
                                 setSelectedItem(item);
                                 setMenuContent("edit");
                              }}
                           >
                              Editar
                           </button>
                           <button
                              className={styles.deleteBtn}
                              onClick={() => {
                                 setSelectedItem(item);
                                 setMenuContent("delete");
                              }}
                           >
                              <FontAwesomeIcon icon="fa-solid fa-xmark" />
                           </button>
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

         {menuContent && (
            <RemoveScroll>
               <Popup onClose={() => setMenuContent(null)}>
                  {menuPopupContent(menuContent, selectedItem)}
               </Popup>
            </RemoveScroll>
         )}
      </>
   );
};
