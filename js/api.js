import * as interfaz from './interfaz.js';

export class API {
     constructor(artista, cancion) {
          this.artista = artista;
          this.cancion = cancion;

          this.consultarAPI();
     }

     consultarAPI() {
          fetch(`https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`)
               .then( respuesta => respuesta.json())
               .then(resultado => {
                   console.log("RESULTADO");
                    if(resultado.lyrics) {
                         // La canción Existe
                         const { lyrics } = resultado;
                         interfaz.divResultado.textContent = lyrics;
                         interfaz.headingResultado.textContent = 'Resultat';
                    } else {
                         // La canción no existe
                         console.log("no existe la cancion o el artista");
                         interfaz.divMensaje.innerHTML = 'La canço no existeix, prova amb una altre.';
                         interfaz.divMensaje.classList.add('error');
                         setTimeout(() => {
                              interfaz.divMensaje.innerHTML = '';
                              interfaz.divMensaje.classList.remove('error');
                              interfaz.formularioBuscar.reset();
                         }, 3000);
                    }
               })
               .catch(error => {
                console.log(error);
               })

     }
}