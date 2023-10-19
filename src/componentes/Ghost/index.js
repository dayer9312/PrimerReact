import './Ghost.css'
import { useState } from 'react'

const Ghost=(props)=>{
    console.log(props)
    return <section className='ghostSection'>
        <h3 className='title'>Mis Personajes</h3>
        <img src='/img/boton.png' alt='add' onClick={}></img>
    </section>

}

export default Ghost;