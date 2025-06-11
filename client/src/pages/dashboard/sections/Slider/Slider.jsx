import { useEffect, useState } from "react";
import { usePublicStore } from "../../../../stores/usePublicStore";
import styles from "./Slider.module.css";
import { RemoveScroll } from "react-remove-scroll";
import { Popup } from "../../../../components/popup/Popup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import MyDropzone from "../../../../components/dropzone/Dropzone";

export const SliderSection = () => {
   const { fetchSlider, createSlider, deleteSlider, sliderImgs } = usePublicStore();
   const [isPopup, setIsPopup] = useState(false);
   // const [isPopupCreate, setIsPopupCreate] = useState(false);
   const [selectedImg, setSelectedImg] = useState(null);

   useEffect(() => {
      fetchSlider();
   }, [fetchSlider]);

   const [imageUrl, setImageUrl] = useState("");

   return (
      <>
         <div className={styles.btnActions}>
            <input
               type="url"
               name="imageUrl"
               placeholder="URL de imagen"
               value={imageUrl}
               onChange={(e) => setImageUrl(e.target.value)}
            />

            <button
               className={styles.addImgBtn}
               type="submit"
               // onClick={() => setIsPopupCreate(true)}

               onClick={() => {
                  createSlider(imageUrl), setImageUrl("");
               }}
               disabled={!imageUrl}
            >
               + Añadir nueva imagen
            </button>
         </div>
         <div className={styles.sliderImgsContainer}>
            {sliderImgs.map((img, index) => (
               <div key={img.id} className={styles.sliderImg}>
                  <img src={img.image_url} alt={`slider ${index + 1}`} />
                  <button
                     className={styles.deleteBtn}
                     onClick={() => {
                        setIsPopup(true), setSelectedImg(img);
                     }}
                  >
                     <FontAwesomeIcon icon="fa-solid fa-xmark" />
                  </button>
               </div>
            ))}
         </div>

         {/* {isPopupCreate && ( */}
         {/*    <Popup onClose={() => setIsPopupCreate(false)}> */}
         {/*       <div> */}
         {/*          <h2>Sube tus imagenes</h2> */}
         {/*          <p>Formatos permitidos: PNG, JPG</p> */}
         {/*       </div> */}
         {/*       <MyDropzone /> */}
         {/**/}
         {/*       <div className={styles.controllers}> */}
         {/*          <button */}
         {/*             className={styles.cancelBtn} */}
         {/*             onClick={() => setIsPopupCreate(false)} */}
         {/*          > */}
         {/*             Cancelar */}
         {/*          </button> */}
         {/*          <button className={styles.confirmBtn}>Añadir</button> */}
         {/*       </div> */}
         {/*    </Popup> */}
         {/* )} */}

         {isPopup && (
            <RemoveScroll>
               <Popup onClose={() => setIsPopup(false)}>
                  <div>
                     <h2>Remover Slider</h2>
                     <p>Esta seguro de que desea eliminar esta imagen?</p>
                  </div>

                  <div className={styles.popupActions}>
                     <button
                        onClick={() => setIsPopup(false)}
                        className={styles.cancelBtn}
                     >
                        Cancelar
                     </button>
                     <button
                        onClick={() => {
                           deleteSlider(selectedImg.id), setIsPopup(false);
                        }}
                        className={styles.confirmBtn}
                     >
                        Confirmar
                     </button>
                  </div>
               </Popup>
            </RemoveScroll>
         )}
      </>
   );
};
