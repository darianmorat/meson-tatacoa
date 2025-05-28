import { usePublicStore } from "../../stores/usePublicStore";
import styles from "./MenuActions.module.css";

export const DeleteConfirm = ({ setMenuContent, category, item }) => {
   const { deleteMenu } = usePublicStore();

   return (
      <div>
         <h1>Remover producto</h1>
         <p>
            Esta seguro de que desea eliminar <strong>{item.name}</strong>?
         </p>
         <div className={styles.deleteActions}>
            <button
               onClick={() => {
                  deleteMenu(category, item.id);
                  setMenuContent(null);
               }}
               className={styles.submitBtn}
            >
               Confirmar
            </button>
            <button onClick={() => setMenuContent(null)} className={styles.cancel}>
               Cancelar
            </button>
         </div>
      </div>
   );
};
