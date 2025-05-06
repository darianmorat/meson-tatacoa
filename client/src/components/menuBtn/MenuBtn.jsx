import styles from "./Menubtn.module.css";

export const MenuBtn = ({ menuOpen, onClick, color }) => {
   return (
      <button
         className={`${styles.menuBtn} ${menuOpen ? styles.open : ""}`}
         onClick={onClick}
         aria-label="Toggle mobile menu"
      >
         <span className={styles.menuHamburger} style={{ background: color }}></span>
         <span className={styles.menuHamburger} style={{ background: color }}></span>
         <span className={styles.menuHamburger} style={{ background: color }}></span>
      </button>
   );
};
