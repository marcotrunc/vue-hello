console.log('Vueok!', Vue);

Vue.config.devtools = true;

/*Descrizione:
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data. */

const app = new Vue({
    el: '#root',
    data: {
        message: 'Hello Vue!',
        image: 'https://picsum.photos/200/300',
    }
});