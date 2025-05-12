import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePublicStore } from "../../stores/usePublicStore";
import styles from "./Slider.module.css";

const BackgroundSlider = () => {
   const { fetchSlider, sliderImgs } = usePublicStore();
   const [currentIndex, setCurrentIndex] = useState(0);

   useEffect(() => {
      const interval = setInterval(() => {
         setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderImgs.length);
      }, 4000);
      return () => clearInterval(interval);
   }, [sliderImgs.length]);

   useEffect(() => {
      fetchSlider();
   }, [fetchSlider]);

   const goToSlide = (index) => setCurrentIndex(index);
   const goToPrevious = () =>
      setCurrentIndex((prev) => (prev - 1 + sliderImgs.length) % sliderImgs.length);
   const goToNext = () => setCurrentIndex((prev) => (prev + 1) % sliderImgs.length);

   return (
      <div className={styles.container}>
         <div className={styles.slider}>
            {sliderImgs.map((image, index) => {
               let position = index - currentIndex;
               let cardClass = styles.card;

               if (position < -2) position += sliderImgs.length;
               if (position > 2) position -= sliderImgs.length;
               if (Math.abs(position) > 2) return null;

               if (position === -2) cardClass += ` ${styles.farLeft}`;
               else if (position === -1) cardClass += ` ${styles.left}`;
               else if (position === 0) cardClass += ` ${styles.active}`;
               else if (position === 1) cardClass += ` ${styles.right}`;
               else if (position === 2) cardClass += ` ${styles.farRight}`;

               if (Math.abs(position) > 2) return null;

               return (
                  <div key={index} className={cardClass} onClick={() => goToSlide(index)}>
                     <img
                        src={image.image_url}
                        alt={`Slide ${index + 1}`}
                        className={styles.image}
                     />
                  </div>
               );
            })}
         </div>

         <div className={styles.controls}>
            <button className={styles.controlButton} onClick={goToPrevious}>
               <FontAwesomeIcon icon="fa-solid fa-angles-left" className={styles.icon} />
            </button>

            <div className={styles.dots}>
               {sliderImgs.map((_, index) => (
                  <button
                     key={index}
                     className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ""}`}
                     onClick={() => goToSlide(index)}
                  />
               ))}
            </div>

            <button className={styles.controlButton} onClick={goToNext}>
               <FontAwesomeIcon icon="fa-solid fa-angles-right" className={styles.icon} />
            </button>
         </div>
      </div>
   );
};

export default BackgroundSlider;
