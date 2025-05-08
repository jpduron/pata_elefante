import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//import 'bootstrap/dist/css/bootstrap.min.css'; //se llama por link

function RegistroUsuario() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  //const [datosRespuesta, setDatosRespuesta] = useState(null);
  //const [error, setError] = useState(null);
  const navigate = useNavigate();
  

  const handleSubmit = async (event) => {
    event.preventDefault();
    let registroExitoso = true;
    /*const datos = {
      fn: "pnu",
      nombre: nombre,
      email: correo,
      password: contrasena
    };

    //20250506 aqui debo incluir la lógica para enviar datos al servidor
    // o usar una API para registrar al usuario.
    //20250507 se agrega la lógica de registro simulad
    
    const opciones = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(datos)
    };

    try {
      const respuesta = await fetch('localhost/pata_elefante/backend/usuario_clae.php', opciones);
      const resultado = await respuesta.json();
      setDatosRespuesta(resultado);
      setError(null);
      console.log('Respuesta del servidor:', resultado);

    } catch (error) {
      setError(error);
      setDatosRespuesta(null);
      console.error('Error al hacer la llamada POST:', error);
      registroExitoso = false;
    } 
*/
    if (registroExitoso) {
      navigate('/');
      console.log('Registro exitoso. Redirigiendo al índice.');
      event.target.nombre.value = '';
      event.target.email.value = '';
      event.target.password.value = '';
    } else {
      console.log('Error en el registro.');
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              Registro de Usuario
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="nombre" className="form-label">Nombre</label>
                  <input
                    type="text"
                    className="form-control"
                    id="nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="correo" className="form-label">Correo Electrónico</label>
                  <input
                    type="email"
                    className="form-control"
                    id="correo"
                    value={correo}
                    onChange={(e) => setCorreo(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="contrasena" className="form-label">Contraseña</label>
                  <input
                    type="password"
                    className="form-control"
                    id="contrasena"
                    value={contrasena}
                    onChange={(e) => setContrasena(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">Registrarse</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegistroUsuario;
