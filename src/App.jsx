import { useState } from "react";

import Perfil from "./components/perfil";
import ReposList from "./components/ReposList";
import Formulario from "./components/formulario";





function App() {
  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true);
  const [nomeUsuario, setNomeUsuario] = useState('')
  
  return(
  <>
    <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)}/>

    {nomeUsuario.length > 4 &&(
      <>
        <Perfil nomeUsuario={nomeUsuario}/>
        <ReposList nomeUsuario={nomeUsuario}/>
      </>
    )}

  </>
  )
}

export default App
