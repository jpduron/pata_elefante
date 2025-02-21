
import './App.css';

function App() {
  return (
    <div className="App">

      <main>
        <section class="container-fluid py-2">
          <div class="p-3 mb-2 bg-light border rounded-3">
            <div class="container-fluid py-4 text-center">
              <h1>Pata de Elefante</h1>
              <h2>Boutique de Suculentas</h2>
            </div>
          </div>
        </section>

  		  <section class="container">
          <h1>Ingresa tus datos para crear una cuenta de cliente</h1>
          <form id="frmLoginDos" action="void" class="pt-5" autocomplete="off">
            <fieldset>
              <legend>
                Datos personales
              </legend>
              <div class="form-floating w-75 mb-3 m-auto">
                <input type="text" name="nombre" id="nombre" placeholder="x" required="true" 
                  class="form-control form-control-lg fs-3 fw-bolder text-center"/>
                <label for="nombre">Introduce tu nombre completo</label>
              </div>

              <div class="form-floating w-75 mb-3 m-auto">
                <input type="email" name="correo" id="correo" placeholder="x" required="true" 
                  class="form-control form-control-lg fs-3 fw-bolder text-center"/>
                <label for="correo">Introduce tu correo</label>
              </div>

              <div class="form-floating w-75 mt-3 m-auto">
                <input type="password" name="pwd" id="pwd" placeholder="x" required="true"
                  class="form-control form-control-lg fs-3 fw-bolder text-center"/>
                <label for="pwd">Introduce tu contraseña</label>
              </div>

            </fieldset>

            <div class="text-center mt-5">
              <button type="submit" class="btn btn-primary btn-lg w-50 m-auto">
                continuar
              </button>	
            </div>
          </form>
			    <br/>&nbsp;
		    </section>
    	</main>

    </div>
  );
}

export default App;
