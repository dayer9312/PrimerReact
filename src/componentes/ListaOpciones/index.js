import './ListaOpciones.css' 

const ListaOpciones = ()=>{
    const lpersonajes=[
        "Anime",
        "Series",
        "Peliculas",
        "Memes",
        "Fantasia",
        "RedesSociales",
        "Historias",
    ];

    return <div className='lista-opciones'>
        <label>Equipo</label>
        <select>
            {lpersonajes.map((lpersonajes,index)=> <option key={index}>{lpersonajes}</option>)}
        </select>
    </div>
}

export default ListaOpciones
