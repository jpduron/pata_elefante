
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
          <form id="frmLoginDos" action="" method="get" class="pt-5" autocomplete="off">			
            <div class="form-floating w-50 m-auto">
              <input type="email" name="correo" id="correo" placeholder="x" required="" class="form-control form-control-lg fs-3 fw-bolder text-center"/>
              <label for="correo">Introduce tu correo</label>
              <div class="invalid-feedback">
                No pudimos encontrar ese correo electr&oacute;nico 
              </div>
            </div>

            <div class="form-floating w-50 m-auto mt-3">
              <input type="password" name="pwd" id="pwd" placeholder="x" required="" class="form-control form-control-lg fs-3 fw-bolder text-center"/>
              <label for="pwd">Introduce tu contraseña</label>
              <div class="invalid-feedback">
                Contrase&tilden;a equivocada 
              </div>
            </div>

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
