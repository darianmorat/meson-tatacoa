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
         <h1>Create menu form</h1>

         <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            {/* Product Name */}
            <div className={styles.formGroup}>
               <label htmlFor="name">Product name:</label>
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

            {/* Product Price */}
            <div className={styles.formGroup}>
               <label htmlFor="price">Product price:</label>
               <input
                  type="number"
                  id="price"
                  step="0.01"
                  min="0"
                  {...register("price", {
                     required: "Precio es obligatorio",
                     min: {
                        value: 0.01,
                        message: "El precio debe ser mayor que 0",
                     },
                     valueAsNumber: true,
                  })}
                  className={errors.price ? styles.errorInput : ""}
               />
               {errors.price && <p className="error-message">{errors.price.message}</p>}
            </div>

            {/* Product Description */}
            <div className={styles.formGroup}>
               <label htmlFor="description">Product description:</label>
               <textarea
                  id="description"
                  rows={3}
                  {...register("description", {
                     required: "Descripción es obligatoria",
                     minLength: {
                        value: 10,
                        message: "Mínimo 10 caracteres",
                     },
                     maxLength: {
                        value: 200,
                        message: "Máximo 200 caracteres",
                     },
                  })}
                  className={errors.description ? styles.errorInput : ""}
               />
               {errors.description && (
                  <p className="error-message">{errors.description.message}</p>
               )}
            </div>

            {/* Image URL */}
            <div className={styles.formGroup}>
               <label htmlFor="imageUrl">Image URL:</label>
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
