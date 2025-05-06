import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import styles from "./Reservation.module.css";

const ReservationPage = () => {
   const [reservationInfo, setReservationInfo] = useState(null);
   const location = useLocation();

   useEffect(() => {
      const queryParams = new URLSearchParams(location.search);
      const dataParam = queryParams.get("data");

      if (dataParam) {
         try {
            const decodedData = JSON.parse(decodeURIComponent(dataParam));
            setReservationInfo(decodedData);
         } catch (e) {
            console.error("Error parsing reservation data", e);
         }
      }
   }, [location]);

   const [isSubmitted, setIsSubmitted] = useState(false);
   const {
      handleSubmit,
      register,
      getValues,
      reset,
      formState: { errors },
   } = useForm();

   const sendTelegramAlert = async (data) => {
      const botToken = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
      const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID;

      const message =
         `📌 *NUEVA RESERVA* 📌\n\n` +
         `*Propiedad:* ${reservationInfo?.title || "No especificada"}\n` +
         `*Nombre:* [${data.name}]\n` +
         `*Email:* ${data.email}\n` +
         `*Celular:* ${data.phone}\n` +
         `*Fechas:*\n` +
         `  ➔ *Entrada:* ${data.checkIn}\n` +
         `  ➔ *Salida:* ${data.checkOut}\n` +
         `*Invitados:* ${data.guests}\n` +
         `*Solicitudes:* ${data.specialRequests || "Ninguna"}`;

      const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}&parse_mode=Markdown`;
      await fetch(url);
   };

   const onSubmit = async (data) => {
      await sendTelegramAlert(data);
      setIsSubmitted(true);
      reset();
   };

   if (isSubmitted) {
      return (
         <div className={styles.successContainer}>
            <div className={styles.successMessage}>
               <h2>Reserva Recibida</h2>
               <p>Gracias por tu reserva. Puedes cerrar esta ventana.</p>
               <p>Nos pondremos en contacto contigo pronto.</p>
            </div>
         </div>
      );
   }

   return (
      <div className={styles.reservation}>
         <div className={styles.container}>
            <h1>Formulario de Reserva</h1>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
               {reservationInfo && (
                  <div className={styles.reservationInfo}>
                     <h3>{reservationInfo.title}</h3>
                     <p>{reservationInfo.description}</p>
                  </div>
               )}
               <div className={styles.formGroup}>
                  <label htmlFor="name">Nombre Completo</label>
                  <input
                     type="text"
                     name="name"
                     id="name"
                     placeholder="John Martinez"
                     autoFocus
                     {...register("name", {
                        required: "Nombre es obligatorio",
                        minLength: {
                           value: 4,
                           message: "Minimo 4 characteres",
                        },
                        maxLength: {
                           value: 40,
                           message: "Maximo 40 characteres",
                        },
                     })}
                  />
                  {errors.name && <p className="error-message">{errors.name.message}</p>}
               </div>

               <div className={styles.formGroup}>
                  <label htmlFor="email">Correo Electronico</label>
                  <input
                     type="email"
                     name="email"
                     id="email"
                     placeholder="correo@gmail.com"
                     {...register("email", {
                        required: "Correo es obligatorio",
                        pattern: {
                           value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                           message: "Email invalido",
                        },
                     })}
                  />
                  {errors.email && (
                     <p className="error-message">{errors.email.message}</p>
                  )}
               </div>

               <div className={styles.formGroup}>
                  <label htmlFor="phone">Número de Celular</label>
                  <input
                     type="tel"
                     name="phone"
                     id="phone"
                     placeholder="1234567890"
                     {...register("phone", {
                        required: "Teléfono obligatorio",
                        pattern: {
                           value: /^[0-9]{10}$/,
                           message: "Debe tener 10 dígitos",
                        },
                     })}
                  />
                  {errors.phone && (
                     <p className="error-message">{errors.phone.message}</p>
                  )}
               </div>

               <div className={styles.dateGroup}>
                  <div className={styles.formGroup}>
                     <label htmlFor="checkIn">Fecha de entrada</label>
                     <input
                        type="date"
                        id="checkIn"
                        {...register("checkIn", {
                           required: "Seleccione fecha de entrada",
                           validate: (value) => {
                              const today = new Date();
                              today.setHours(0, 0, 0, 0);
                              const selectedDate = new Date(value);
                              return selectedDate >= today || "Fecha debe ser futura";
                           },
                        })}
                     />
                     {errors.checkIn && (
                        <p className="error-message">{errors.checkIn.message}</p>
                     )}
                  </div>

                  <div className={styles.formGroup}>
                     <label htmlFor="checkOut">Fecha de salida</label>
                     <input
                        type="date"
                        id="checkOut"
                        {...register("checkOut", {
                           required: "Seleccione fecha de salida",
                           validate: (value) => {
                              const checkIn = new Date(getValues("checkIn"));
                              const checkOut = new Date(value);
                              return (
                                 checkOut > checkIn ||
                                 "Salida debe ser después de entrada"
                              );
                           },
                        })}
                     />
                     {errors.checkOut && (
                        <p className="error-message">{errors.checkOut.message}</p>
                     )}
                  </div>
               </div>

               <div className={styles.formGroup}>
                  <label htmlFor="guests">Número de Invitados</label>
                  <select
                     id="guests"
                     {...register("guests", {
                        required: "Seleccione número de invitados",
                     })}
                  >
                     {[
                        "1 Uno",
                        "2 Dos",
                        "3 Tres",
                        "4 Cuatro",
                        "5 Cinco",
                        "6 Seis",
                        "# Muchos (Solicitud especial)",
                     ].map((num) => (
                        <option key={num} value={num}>
                           {num}
                        </option>
                     ))}
                  </select>
                  {errors.guests && (
                     <p className="error-message">{errors.guests.message}</p>
                  )}
               </div>

               <div className={styles.formGroup}>
                  <label htmlFor="specialRequests">Solicitudes Especiales</label>
                  <textarea
                     id="specialRequests"
                     placeholder="¿Algún requisito especial?"
                     rows="3"
                     {...register("specialRequests", {
                        maxLength: {
                           value: 500,
                           message: "Máximo 500 caracteres",
                        },
                     })}
                  />
                  {errors.specialRequests && (
                     <p className="error-message">{errors.specialRequests.message}</p>
                  )}
               </div>

               <button type="submit" className={styles.submitBtn}>
                  Completar Reserva
               </button>
            </form>
         </div>
      </div>
   );
};

export default ReservationPage;
