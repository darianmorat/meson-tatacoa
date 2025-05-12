import { useEffect, useState } from "react";
import { useAuthStore } from "../../stores/useAuthStore";
import styles from "./Dashboard.module.css";
import { MenuBtn } from "../../components/menuBtn/MenuBtn";
import { usePublicStore } from "../../stores/usePublicStore";
import { CreateMenuForm } from "../../components/MenuActions/CreateMenuForm";
import { EditMenuForm } from "../../components/MenuActions/EditMenuForm";
import { DeleteConfirm } from "../../components/MenuActions/DeleteConfirm";
import { Popup } from "../../components/popup/Popup";

const DashboardPage = () => {
   const { fetchSlider, createSlider, deleteSlider, sliderImgs, fetchMenu, menuItems } =
      usePublicStore();

   const [activeSection, setActiveSection] = useState("dashboard");
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const { logout } = useAuthStore();

   const sections = [
      { id: "dashboard", name: "DASHBOARD" },
      { id: "slider", name: "SLIDER" },
      { id: "alojamiento", name: "ALOJAMIENTO" },
      { id: "restaurante", name: "RESTAURANTE" },
      { id: "megafauna", name: "MEGA FAUNA" },
   ];

   const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
   };

   const handleSectionChange = (sectionId) => {
      setActiveSection(sectionId);
      if (window.innerWidth < 768) {
         setIsMenuOpen(false);
      }
   };

   // POPUP
   const [isPopup, setIsPopup] = useState(false);

   // SLIDER SECTION
   useEffect(() => {
      fetchSlider();
   }, [fetchSlider]);

   const [imageUrl, setImageUrl] = useState("");

   // RESTAURANT SECTION
   const [activeCategory, setActiveCategory] = useState("Principales");

   useEffect(() => {
      fetchMenu(activeCategory);
   }, [activeCategory, fetchMenu]);

   const handleCategoryClick = (category) => {
      setActiveCategory(category);
   };

   const [menuContent, setMenuContent] = useState(null);
   const [selectedItem, setSelectedItem] = useState(null);

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

   const renderContent = () => {
      switch (activeSection) {
         case "dashboard":
            return (
               <div className={styles.content}>
                  <h2>Resumen del Panel</h2>
                  <p>
                     Bienvenido al panel de administración. Seleccione una sección del
                     menú para gestionar.
                  </p>
                  <div className={styles.stats}>
                     <div className={styles.statCard}>Visitantes Totales: --</div>
                     <div className={styles.statCard}>Reservas Activas: --</div>
                     <div className={styles.statCard}>Mensajes: --</div>
                  </div>
               </div>
            );
         case "slider":
            return (
               <div className={styles.content}>
                  <h2>Gestion del Slider</h2>
                  <p>Aquí puedes administrar las imágenes del slider principal.</p>
                  {/* We can upload files using MULTER but for that we need CLOUD STORAGE like SUPABASE */}

                  <div className={styles.placeholder}>
                     <div className={styles.createContainer}>
                        <input
                           type="url"
                           name="imageUrl"
                           placeholder="URL de imagen"
                           value={imageUrl}
                           onChange={(e) => setImageUrl(e.target.value)}
                        />
                        <button
                           className={styles.sliderAddImage}
                           type="submit"
                           onClick={() => {
                              createSlider(imageUrl), setImageUrl("");
                           }}
                           disabled={!imageUrl}
                        >
                           Añadir imagen
                        </button>
                     </div>
                     <div className={styles.sliderImgsContainer}>
                        {sliderImgs.map((img, index) => (
                           <div key={img.id} className={styles.sliderImg}>
                              <img src={img.image_url} alt={`slider ${index + 1}`} />
                              <div className={styles.actionBtns}>
                                 <button
                                    className={styles.deleteBtn}
                                    onClick={() => deleteSlider(img.id)}
                                 >
                                    Remover
                                 </button>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            );
         case "alojamiento":
            return (
               <div className={styles.content}>
                  <h2>Gestion de Alojamiento</h2>
                  <p>Administra las opciones y disponibilidad de alojamiento.</p>
                  <div className={styles.placeholder}>
                     No hay contenido por editar de momento
                  </div>
               </div>
            );
         case "restaurante":
            return (
               <div className={styles.content}>
                  <h2>Gestion del Restaurante</h2>
                  <p>Actualiza el menú y reservas del restaurante.</p>
                  <div className={styles.placeholder}>
                     <div className={styles.categoryTabs}>
                        <button
                           className={`${styles.tabBtn} ${activeCategory === "Principales" ? styles.active : ""}`}
                           onClick={() => handleCategoryClick("Principales")}
                        >
                           Principales
                        </button>
                        <button
                           className={`${styles.tabBtn} ${activeCategory === "Postres" ? styles.active : ""}`}
                           onClick={() => handleCategoryClick("Postres")}
                        >
                           Postres
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
                                       <p className={styles.itemDesc}>
                                          {item.description}
                                       </p>
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
                                          Remover
                                       </button>
                                    </div>
                                 </div>
                              ))}
                              <div className={styles.createBtnContainer}>
                                 <button
                                    className={styles.createBtn}
                                    onClick={() => setMenuContent("create")}
                                 >
                                    <p>+</p>
                                    Añadir item
                                 </button>
                              </div>
                           </>
                        ) : (
                           <>
                              <p className="no-data-menu">
                                 Parece que no hay ningun articulo!
                              </p>
                           </>
                        )}
                     </div>
                  </div>
               </div>
            );
         case "megafauna":
            return (
               <div className={styles.content}>
                  <h2>Gestion de Megafauna</h2>
                  <p>Edita información sobre la fauna local.</p>
                  <div className={styles.placeholder}>
                     No hay contenido por editar de momento
                  </div>
               </div>
            );
         default:
            return <div className={styles.content}>Seleccione una sección</div>;
      }
   };

   return (
      <div className={styles.dashboard}>
         <div className={`${styles.sidebar} ${isMenuOpen ? styles.active : ""}`}>
            <div className={styles.sidebarContainer}>
               <h1 className={styles.sidebarTitle}>Admin Panel</h1>
               <MenuBtn menuOpen={isMenuOpen} onClick={toggleMenu} color={"white"} />
            </div>
            <div className={styles.sectionBtns}>
               {sections.map((section) => (
                  <button
                     key={section.id}
                     className={`${styles.sectionBtn} ${activeSection === section.id ? styles.active : ""}`}
                     onClick={() => {
                        handleSectionChange(section.id);
                     }}
                  >
                     {section.name}
                  </button>
               ))}
               <button className={styles.logoutBtn} onClick={() => logout()}>
                  CERRAR SESION
               </button>
            </div>
         </div>
         <div className={styles.mainContent}>{renderContent()}</div>

         {menuContent && (
            <Popup onClose={() => setMenuContent(null)}>
               {menuPopupContent(menuContent, selectedItem)}
            </Popup>
         )}
      </div>
   );
};

export default DashboardPage;
