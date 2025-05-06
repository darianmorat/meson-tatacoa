import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import image1 from "../../assets/slide-section/1.jpg";
import image2 from "../../assets/slide-section/2.jpg";
import image3 from "../../assets/slide-section/3.jpg";
import image4 from "../../assets/slide-section/1.jpg";
import image5 from "../../assets/slide-section/1.jpg";
import image6 from "../../assets/slide-section/1.jpg";
import styles from "./Slider.module.css";

const BackgroundSlider = () => {
   const [currentIndex, setCurrentIndex] = useState(0);
   const images = [image1, image2, image3, image4, image5, image6];

   useEffect(() => {
      const interval = setInterval(() => {
         setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 4000);
      return () => clearInterval(interval);
   }, [images.length]);

   const goToSlide = (index) => setCurrentIndex(index);
   const goToPrevious = () =>
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
   const goToNext = () => setCurrentIndex((prev) => (prev + 1) % images.length);

   return (
      <div className={styles.container}>
         <div className={styles.slider}>
            {images.map((image, index) => {
               let position = index - currentIndex;
               let cardClass = styles.card;

               if (position < -2) position += images.length;
               if (position > 2) position -= images.length;
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
                        src={image}
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
               {images.map((_, index) => (
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
