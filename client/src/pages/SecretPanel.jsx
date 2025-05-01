const SecretPanel = () => {
   return (
      <div className="secret-panel-container">
         <form /* onSubmit={handleSubmit} */ className="secret-panel-form">
            <h1>Acceso de Administrador</h1>
            <p>Ingresa la frase secreta</p>

            <div className="input-wrapper">
               <input
                  type="password"
                  name="password"
                  // value={password}
                  // onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  autoComplete="off"
                  autoFocus
               />
               {/* {error && <div className="error-message">{error}</div>} */}
            </div>

            <button type="submit" className="unlock-button">
               Desbloquear
            </button>
         </form>
      </div>
   );
};

export default SecretPanel;
