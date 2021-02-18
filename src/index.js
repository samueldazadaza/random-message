const messages = [
    "Oscar",
    "Ana",
    "Nicolas",
    "Yesica",
    "Diego",
    "Laura",
    "Carolina",
    "Paulina"
];

//funcion para imprimir nombres aleatorios
const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
};

module.exports = { randomMsg };