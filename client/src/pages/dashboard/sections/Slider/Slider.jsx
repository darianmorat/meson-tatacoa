import { useEffect, useState } from "react";
import { usePublicStore } from "../../../../stores/usePublicStore";
import styles from "./Slider.module.css";
import { RemoveScroll } from "react-remove-scroll";
import { Popup } from "../../../../components/popup/Popup";

export const SliderSection = () => {
   const { fetchSlider, createSlider, deleteSlider, sliderImgs } = usePublicStore();
   const [isPopup, setIsPopup] = useState(false);
   const [selectedImg, setSelectedImg] = useState(null);

   useEffect(() => {
      fetchSlider();
   }, [fetchSlider]);

   const [imageUrl, setImageUrl] = useState("");

   return (
      <>
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
                        onClick={() => {
                           setIsPopup(true), setSelectedImg(img);
                        }}
                     >
                        Remover
                     </button>
                  </div>
               </div>
            ))}
         </div>

         {isPopup && (
            <RemoveScroll>
               <Popup onClose={() => setIsPopup(false)}>
                  <h2>Remover Slider</h2>
                  <p>Esta seguro de que desea eliminar esta imagen?</p>

                  <div className={styles.popupActions}>
                     <button
                        onClick={() => {
                           deleteSlider(selectedImg.id), setIsPopup(false);
                        }}
                        className={styles.confirm}
                     >
                        Confirmar
                     </button>
                     <button onClick={() => setIsPopup(false)} className={styles.cancel}>
                        Cancelar
                     </button>
                  </div>
               </Popup>
            </RemoveScroll>
         )}
      </>
   );
};
