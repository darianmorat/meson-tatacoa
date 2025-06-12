import { useForm } from "react-hook-form";
import { usePublicStore } from "../../stores/usePublicStore";
import styles from "./MenuActions.module.css";

export const CreateMenuForm = ({ setMenuContent, category }) => {
   const {
      handleSubmit,
      register,
      reset,
      formState: { errors },
   } = useForm();
   const { createMenu } = usePublicStore();

   const onSubmit = (data) => {
      createMenu(category, data);
      setMenuContent(null);
      reset();
   };

   return (
      <div>
         <h1>Crear Producto</h1>

         <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <div className={styles.formGroup}>
               <label htmlFor="name">Nombre:</label>
               <input
                  type="text"
                  id="name"
                  {...register("name", {
                     required: "Nombre es obligatorio",
                     minLength: {
                        value: 4,
                        message: "Mínimo 4 caracteres",
                     },
                     maxLength: {
                        value: 40,
                        message: "Máximo 40 caracteres",
                     },
                     pattern: {
                        value: /^[a-zA-Z0-9\sáéíóúÁÉÍÓÚñÑ]+$/,
                        message: "Solo letras, números y espacios",
                     },
                  })}
                  className={errors.name ? styles.errorInput : ""}
               />
               {errors.name && <p className="error-message">{errors.name.message}</p>}
            </div>

            <div className={styles.formGroup}>
               <label htmlFor="price">Precio:</label>
               <input
                  type="number"
                  id="price"
                  step="1"
                  min="0"
                  {...register("price", {
                     required: "Precio es obligatorio",
                     min: {
                        value: 1,
                        message: "El precio debe ser mayor que 0",
                     },
                     valueAsNumber: true,
                  })}
                  className={errors.price ? styles.errorInput : ""}
               />
               {errors.price && <p className="error-message">{errors.price.message}</p>}
            </div>

            <div className={styles.formGroup}>
               <label htmlFor="description">Descripcion:</label>
               <textarea
                  id="description"
                  rows={3}
                  {...register("description", {
                     required: "Descripción es obligatoria",
                     minLength: {
                        value: 35,
                        message: "Mínimo 35 caracteres",
                     },
                     maxLength: {
                        value: 130,
                        message: "Máximo 130 caracteres",
                     },
                  })}
                  className={errors.description ? styles.errorInput : ""}
               />
               {errors.description && (
                  <p className="error-message">{errors.description.message}</p>
               )}
            </div>

            <div className={styles.formGroup}>
               <label htmlFor="imageUrl">Imagen:</label>
               <input
                  type="url"
                  id="imageUrl"
                  {...register("imageUrl", {
                     required: "URL de imagen es obligatoria",
                     pattern: {
                        value: /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp))$/i,
                        message: "Debe ser una URL válida de imagen (jpg, png, etc.)",
                     },
                  })}
                  className={errors.imageUrl ? styles.errorInput : ""}
               />
               {errors.imageUrl && (
                  <p className="error-message">{errors.imageUrl.message}</p>
               )}
            </div>

            <button type="submit" className={styles.submitBtn}>
               Añadir producto
            </button>
         </form>
      </div>
   );
};
