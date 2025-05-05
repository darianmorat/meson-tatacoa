import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import image1 from "../../assets/slide-section/1.jpg";
import image4 from "../../assets/slide-section/1.jpg";
import image5 from "../../assets/slide-section/1.jpg";
import image6 from "../../assets/slide-section/1.jpg";
import image2 from "../../assets/slide-section/2.jpg";
import image3 from "../../assets/slide-section/3.jpg";
import "./slider.css";

const BackgroundSlider = () => {
   const [currentIndex, setCurrentIndex] = useState(0);
   const images = [image1, image2, image3, image4, image5, image6];

   useEffect(() => {
      const interval = setInterval(() => {
         setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 4000);
      return () => clearInterval(interval);
   }, [images.length]);

   const goToSlide = (index) => {
      setCurrentIndex(index);
   };

   const goToPrevious = () => {
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
   };

   const goToNext = () => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
   };

   return (
      <div className="card-slider-container">
         <div className="card-slider">
            {images.map((image, index) => {
               // Calculate position relative to current index
               let position = index - currentIndex;

               // Handle wrap-around for smooth infinite scrolling
               if (position < -2) position += images.length;
               if (position > 2) position -= images.length;

               // Skip rendering cards that would be too far off-screen
               if (Math.abs(position) > 2) return null;

               // Define class based on position
               let cardClass = "card";
               if (position === -2) cardClass += " far-left";
               else if (position === -1) cardClass += " left";
               else if (position === 0) cardClass += " active";
               else if (position === 1) cardClass += " right";
               else if (position === 2) cardClass += " far-right";

               return (
                  <div key={index} className={cardClass} onClick={() => goToSlide(index)}>
                     <img src={image} alt={`Slide ${index + 1}`} className="card-image" />
                  </div>
               );
            })}
         </div>

         <div className="slider-controls">
            <button className="control-button prev-button" onClick={goToPrevious}>
               <FontAwesomeIcon icon="fa-solid fa-angles-left" className="icon-left" />
            </button>

            <div className="indicator-dots">
               {images.map((_, index) => (
                  <button
                     key={index}
                     className={`indicator-dot ${index === currentIndex ? "active" : ""}`}
                     onClick={() => goToSlide(index)}
                  />
               ))}
            </div>

            <button className="control-button next-button" onClick={goToNext}>
               <FontAwesomeIcon icon="fa-solid fa-angles-right" className="icon-left" />
            </button>
         </div>
      </div>
   );
};

export default BackgroundSlider;
