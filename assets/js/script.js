const { createApp } = Vue

createApp({
    data() {
        return {
            eliminaMex: `display: none;`,
            utente: 0,
            messaggioNuovo: "",
            rispostaNuova: "Perfetto!",
            cercaContato: "",
            contacts: [

                {
                    name: 'Michele',
                    avatar: './assets/img/img:01.png',
                    visible: true,
                    messages: [
                        {
                            id: 1,
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            id: 2,
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            id: 3,
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },

                {
                    name: 'Martina',
                    avatar: './assets/img/img:02.png',
                    visible: true,
                    messages: [
                        {
                            id: 1,
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            id: 2,
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            id: 3,
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },

                {
                    name: 'Samuele',
                    avatar: './assets/img/img:03.png',
                    visible: true,
                    messages: [
                        {
                            id: 1,
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            id: 2,
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            id: 3,
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },

                {
                    name: 'Francesca',
                    avatar: './assets/img/img:04.png',
                    visible: true,
                    messages: [
                        {
                            id: 1,
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            id: 2,
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },

                {
                    name: 'Alessandro L.',
                    avatar: './assets/img/img:05.png',
                    visible: true,
                    messages: [
                        {
                            id: 1,
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            id: 2,
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },

                {
                    name: 'Claudia',
                    avatar: './assets/img/img:06.png',
                    visible: true,
                    messages: [
                        {
                            id: 1,
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            id: 2,
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            id: 3,
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },

                {
                    name: 'Sushi',
                    avatar: './assets/img/img:07.png',
                    visible: true,
                    messages: [
                        {
                            id: 1,
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            id: 2,
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },

                {
                    name: 'Davide',
                    avatar: './assets/img/img:08.png',
                    visible: true,
                    messages: [
                        {
                            id: 1,
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            id: 2,
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            id: 3,
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ]
        }
    },
    mounted() {
        // Aggiungi ID univoci a ciascun contatto
        this.contacts.forEach((contact, index) => {
            contact.id = index ;
            console.log(this.contacts)
        });
    },

    methods: {

        cambioUtente(index) {
            this.utente = index

        },
        aggiungiMessaggio() {
            if (this.messaggioNuovo !== '') {

                const oraCorrente = new Date()
                const nuovoMessaggio = {

                    date: `${oraCorrente.getHours()}:${oraCorrente.getMinutes()}`,
                    message: this.messaggioNuovo,
                    status: 'sent',
                }

                this.contacts[this.utente].messages.push(nuovoMessaggio)

                setTimeout(() => {
                    this.rispostaMessaggio();
                }, 1000);
            }
            this.messaggioNuovo = ""
        },

        rispostaMessaggio() {
            if (this.rispostaNuova === "Perfetto!") {

                const oraCorrente = new Date()
                const nuovoMessaggio2 = {

                    date: `${oraCorrente.getHours()}:${oraCorrente.getMinutes()}`,
                    message: this.rispostaNuova,
                    status: 'received'
                }

                this.contacts[this.utente].messages.push(nuovoMessaggio2)

            }

        },
        ricercaContato() {
            const termineRicerca = this.cercaContato.toLowerCase();

            this.contacts.forEach((element) => {
               element.visible = element.name.toLowerCase().includes(termineRicerca);
              
            });
        },
        eliminaMessaggio(messageId) {
            // Cerca il messaggio con l'id specificato nel contatto corrente
            let contatto = this.contacts[this.utente];
            let messageIndex = contatto.messages.findIndex(messaggio => messaggio.id === messageId);
        
            if (messageIndex !== -1) {
                // Rimuovi il messaggio dall'array 'messages' del contatto corrente
                contatto.messages.splice(messageIndex, 1);
                console.log(`Messaggio con id ${messageId} eliminato.`);
                console.log('Nuovi messaggi:', contatto.messages);
            } else {
                console.error('Messaggio non trovato');
            }
        }
       

    }

}).mount('#app')