import "./Formulario.css"
import Texto from "../Texto/Texto.js"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton/Boton"

/*const Formulario =()=>{
    return <section className="formulario">
        <form>
            <h2>Rellena en el formulario para crear un nuevo personaje</h2>
            <Texto titulo="Nombre" placeholder="Ingresar nombre"/>
            <Texto titulo="Rango" placeholder="Ingresar el rango"/>
            <Texto titulo="Foto" placeholder="Ingresar enlace de foto"/>
            <ListaOpciones/>
            <Boton>Crear</Boton>
        </form>
    </section>
}*/

const Formulario =()=>{
    const envio=(e)=>{
        e.preventDefault();
        console.log(envio,e)
        
    }
    return <section className="formulario">
        <form onSubmit={envio}>
            <h2>Rellena en el formulario para crear un nuevo personaje</h2>
            <Texto titulo="Nombre" placeholder="Ingresar nombre"/>
            <Texto titulo="Rango" placeholder="Ingresar el rango"/>
            <Texto titulo="Foto" placeholder="Ingresar enlace de foto"/>
            <ListaOpciones/>
            <Boton>Crear</Boton>
            

        </form>
    </section>
}

export default Formulario;