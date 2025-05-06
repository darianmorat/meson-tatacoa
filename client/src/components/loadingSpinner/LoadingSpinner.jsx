import React from "react";
import styles from "./LoadingSpinner.module.css";

export const LoadingSpinner = () => {
   return (
      <>
         <div className={styles.app}>
            <div className={styles.loader} />
            <div className={styles.loader2} />
         </div>
      </>
   );
};
