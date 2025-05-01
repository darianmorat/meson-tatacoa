import { useState } from "react";

const ReservationPage = () => {
   // if (submitted) {
   //    return (
   //       <div className="confirmation-message">
   //          <h2>Thank you for your reservation!</h2>
   //          <p>We've sent a confirmation to your email.</p>
   //          <div className="close-instruction">
   //             <p>YOU CAN CLOSE THIS PAGE NOW</p>
   //          </div>
   //       </div>
   //    );
   // }

   return (
      <div className="reservation-page">
         <div className="reservation-container">
            <h1>Formulario de Reserva</h1>
            <form className="reservation-form">
               <div className="form-group">
                  <label>Nombre Completo *</label>
                  <input type="text" name="name" placeholder="John Martinez" />
               </div>

               <div className="form-group">
                  <label>Correo Electronico *</label>
                  <input type="email" name="email" placeholder="correo@gmail.com" />
               </div>

               <div className="form-group">
                  <label>Numero de Celular *</label>
                  <input type="tel" name="phone" placeholder="1234567890" />
               </div>

               <div className="date-group">
                  <div className="form-group">
                     <label>Fecha de entrada *</label>
                     <input type="date" name="checkIn" />
                  </div>

                  <div className="form-group">
                     <label>Fecha de salida *</label>
                     <input type="date" name="checkOut" />
                  </div>
               </div>

               <div className="form-group">
                  <label>Número de Invitados</label>
                  <select name="guests">
                     {[
                        "1 persona",
                        "2 personas",
                        "3 personas",
                        "4 personas",
                        "5 personas",
                        "6 personas",
                     ].map((num) => (
                        <option key={num} value={num}>
                           {num}
                        </option>
                     ))}
                  </select>
               </div>

               <div className="form-group">
                  <label>Solicitudes Especiales</label>
                  <textarea
                     name="specialRequests"
                     placeholder="¿Algún requisito especial?"
                     rows="3"
                  />
               </div>

               <button type="submit" className="submit-btn">
                  Completar Reserva
               </button>
            </form>
         </div>
      </div>
   );
};

export default ReservationPage;
