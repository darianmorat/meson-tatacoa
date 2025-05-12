import { usePublicStore } from "../../stores/usePublicStore";

export const DeleteConfirm = ({ setMenuContent, category, item }) => {
   const { deleteMenu } = usePublicStore();

   return (
      <div>
         <h1>Remover producto</h1>
         <p>
            Desea eliminar el producto <strong>{item.name}</strong>?
         </p>
         <div>
            <button
               onClick={() => {
                  deleteMenu(category, item.id);
                  setMenuContent(null);
               }}
            >
               Confirmar
            </button>
            <button onClick={() => setMenuContent(null)}>Cancelar</button>
         </div>
      </div>
   );
};
