import react, { useState } from "react";
import './index.css'

export default function PaginaInicial(){
    const [numeroAleatorio, setNumeroAleatorio] = useState(0)

    function gerarNumero(){
        const novoNumero = Math.floor(Math.random() * (100-1) + 1);
        console.log(novoNumero)
        setNumeroAleatorio(novoNumero);
    }

    return(
        <div className='container'>
            <h1>Número Aleatório</h1>
            <h3>{ numeroAleatorio }</h3>
            <div>
                <label>Click no botão abaixo para gerar um novo número</label>
                <button onClick={ gerarNumero }>
                    Gerar novo número
                </button> 
            </div>
        </div>
    )
}