import React from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              Iniciar Sesión
            </div>
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="correo" className="form-label">Correo Electrónico</label>
                  <input type="email" className="form-control" id="correo" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="contrasena" className="form-label">Contraseña</label>
                  <input type="password" className="form-control" id="contrasena" required />
                </div>
                <button type="submit" className="btn btn-primary">Iniciar Sesión</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
