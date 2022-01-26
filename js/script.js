console.log('Vueok!', Vue);

Vue.config.devtools = true;

/*Descrizione:
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data. */

const app = new Vue({
    el: '#root',
    data: {
        message: "Hello Vue!",
        image: 'https://picsum.photos/200/300',
        alt: "generic img",
        color: "text-white",
        bgColor: "bg-dark",
        btnColor: "btn-light"
    },
    methods: {
        changeButtonLight() {
            if (this.bgColor === "bg-dark") {
                this.bgColor = "bg-light";
                this.color = "text-dark";
                this.btnColor = "btn-dark";
            } else {
                this.bgColor = "bg-dark";
                this.color = "text-white";
                this.btnColor = "btn-light";
            }
        }
    }
});