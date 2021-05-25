//Importem tot el que estem exportant del fitxer interfaz
import * as interfaz from './interfaz.js';
import {API} from './api.js';

interfaz.formularioBuscar.addEventListener('submit',buscarCancion);

function buscarCancion(e){
    e.preventDefault();
    console.log("buscar");
    
    //Obtenir dades formulari
    const artista =  document.querySelector('#artista').value;
    const cancion = document.querySelector('#cancion').value;

    if(artista == '' || cancion == ''){
        //L'usuari ha deixat algun camp buit, mostrar error
        interfaz.divMensaje.textContent = 'Error... tots els camps son obligatoris';
        interfaz.divMensaje.classList.add('error');

        setTimeout(()=>{
            interfaz.divMensaje.textContent='';
            interfaz.divMensaje.classList.remove('error');
        },3000);

        return;
    }

    //Consultar API
    //reem un objecte API
    const busqueda = new API(artista,cancion);
    //Cridem el mètode consultarAPI de la classe API
    busqueda.consultarAPI();
}