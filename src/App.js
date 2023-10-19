import Header from './componentes/Header/Header.js';
import './App.css';
import Formulario from './componentes/Formulario/Formulario.js';
import Ghost from './componentes/Ghost/index.js';

function App() {
  return (
    <div>
      <Header/>
      <Formulario/>
    </div>
    <Ghost></Ghost>
  );
}

export default App;
