import { useForm } from "react-hook-form";
import { useAuthStore } from "../../stores/useAuthStore";
import { useNavigate } from "react-router-dom";
import styles from "./SecretPanel.module.css";

const SecretPanelPage = () => {
   const { authenticate, loginAttempts } = useAuthStore();

   const {
      handleSubmit,
      register,
      formState: { isValid },
   } = useForm();
   const navigate = useNavigate();

   const onSubmit = async (data) => {
      const res = await authenticate(data.password);
      if (res) {
         navigate("/dashboard");
      }
   };

   const hasFailedAttempts = loginAttempts.remaining < loginAttempts.total;
   const noAttemptsLeft = Number(loginAttempts.remaining) === 0;

   return (
      <div className={styles.secretPanel}>
         <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <h1>Acceso de Administrador</h1>
            <p>Ingresa la frase secreta</p>
            <div className={styles.inputWrapper}>
               <input
                  className={styles.password}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="•••••••••••••"
                  autoComplete="off"
                  autoFocus
                  {...register("password", {
                     required: true,
                  })}
               />
               {hasFailedAttempts && (
                  <p className={styles.attemps}>
                     {noAttemptsLeft
                        ? "Has excedido el numero de intentos"
                        : Number(loginAttempts.remaining) === 1
                          ? "Tienes un ultimo intento"
                          : `Te quedan ${loginAttempts.remaining} intentos`}
                  </p>
               )}
            </div>

            <button
               type="submit"
               className={styles.submitBtn}
               disabled={!isValid || noAttemptsLeft}
            >
               Desbloquear
            </button>
         </form>
      </div>
   );
};

export default SecretPanelPage;
