// --- DATABASE DELLE DOLCEZZE ---
const complimenti = [
    "Sei la persona più speciale che io conosca.",
    "Il tuo sorriso illumina anche le giornate più grigie.",
    "Amo il modo in cui vedi il mondo.",
    "Sei il mio posto preferito nel mondo.",
    "Oggi sei ancora più bella di ieri, se possibile.",
    "La tua forza mi ispira ogni singolo giorno.",
    "Grazie per essere esattamente come sei.",
    "Se un giorno dimentico quanto sei bella, aiutami a ricordarlo con la luce del tuo sorriso e il sapore delle tue labbra.",
    "Con quegli occhi che mi guardano, non ho più bisogno della luce del sole.",
    "Sei la canzone che fa suonare le corde della mia anima.",
    "Così tante stelle nello spazio e nessuna brilla come te.",
    "Sono orgoglioso di te",
    "Sono fortunato a stare con te.",
    "Hai degli occhi bellissimi.",
    "Sei bellissima.",
    "Adoro tutto di te.",
    "Sei la migliore.",
    "Non posso pensare di stare senza di te.",
    "Sei la mia piccola principessa.",
    "Ti amo con tutto il mio cuore.",
    "Ti amo all'infinito.",
    "Ti amo da morire.",
    "Farei di tutto per il tuo sorriso.",
    "Sei la mia bambina.",
    "Sei perfetta così come sei amore.",
];

const citazioni = [
    "\"Amare non è guardarsi l'un l'altro, ma guardare insieme nella stessa direzione.\" - Antoine de Saint-Exupéry",
    "\"Ti amo per tutto ciò che sei, tutto ciò che sei stata, tutto ciò che devi ancora essere.\" - Ernest Hemingway",
    "\"Eravamo insieme, tutto il resto del tempo l'ho dimenticato.\" - Walt Whitman",
    "\"Di qualunque cosa siano fatte le nostre anime, la mia e la tua sono fatte della stessa cosa.\" - Emily Brontë",
    "\"Non conosco altra ragione di amarti che amarti.\" - Fernando Pessoa",
    "\"Ovunque tu sia, è la mia casa, la mia unica casa.\" - Charlotte Brontë",
    "\"Come ti vidi mi innamorai. E tu sorridi perché lo sai.\" - Arrigo Boito",
    "\"Sei insieme la quiete e la confusione del mio cuore.\" - Franz Kafka",
    "\"L’amore è quando non riesci a dormire perchè finalmente la realtà è migliore dei tuoi sogni.\" - Dr. Seuss",
    

];

// --- LOGICA DI BENVENUTO ---
const greeting = document.getElementById('greeting');
const complimentElement = document.getElementById('compliment');
const quoteElement = document.getElementById('quote');
const ora = new Date().getHours();

// 1. Saluto basato sull'orario
if (ora >= 5 && ora < 12) {
    greeting.innerText = "Buongiorno, raggio di sole ☀️";
} else if (ora >= 12 && ora < 18) {
    greeting.innerText = "Buon pomeriggio, amore mio 🌸";
} else {
    greeting.innerText = "Buona serata, piccola mia 🌙";
}

// 2. Scelta casuale del complimento e della citazione
const randomCompliment = complimenti[Math.floor(Math.random() * complimenti.length)];
const randomQuote = citazioni[Math.floor(Math.random() * citazioni.length)];

complimentElement.innerText = randomCompliment;
quoteElement.innerText = randomQuote;

// --- FUNZIONE SALVATAGGIO ---
function saveNote() {
    const input = document.getElementById('diary-input');
    const display = document.getElementById('saved-messages');
    
    if (input.value.trim() !== "") {
        const note = document.createElement('div');
        note.className = 'note';
        const data = new Date().toLocaleString('it-IT', { day: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit' });
        note.innerHTML = `<strong>${data}:</strong><br>${input.value}`;
        
        display.prepend(note);
        input.value = "";
    }
}
