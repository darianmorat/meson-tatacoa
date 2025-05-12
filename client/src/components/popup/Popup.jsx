import styles from "./Popup.module.css";

export const Popup = ({ onClose, children }) => {
   return (
      <div className={styles.popup}>
         <div className={styles.popupContent}>
            {children}
            <button className={styles.closePopup} onClick={onClose}>
               x
            </button>
         </div>
      </div>
   );
};
