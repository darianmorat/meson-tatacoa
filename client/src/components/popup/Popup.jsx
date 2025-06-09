import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Popup.module.css";

export const Popup = ({ onClose, children }) => {
   return (
      <div className={styles.popup}>
         <div className={styles.popupContent}>
            {children}
            <button className={styles.closePopup} onClick={onClose}>
               <FontAwesomeIcon icon="fa-solid fa-xmark" />
            </button>
         </div>
      </div>
   );
};
