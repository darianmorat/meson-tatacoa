import { useForm } from "react-hook-form";
import { usePrivateStore } from "../stores/usePrivateStore";
import { useNavigate } from "react-router-dom";

const SecretPanelPage = () => {
   const { authenticate } = usePrivateStore();
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

   return (
      <div className="secret-panel-container">
         <form onSubmit={handleSubmit(onSubmit)} className="secret-panel-form">
            <h1>Acceso de Administrador</h1>
            <p>Ingresa la frase secreta</p>

            <div className="input-wrapper">
               <input
                  className="secret-password"
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
            </div>

            <button type="submit" className="unlock-button" disabled={!isValid}>
               Desbloquear
            </button>
         </form>
      </div>
   );
};

export default SecretPanelPage;
