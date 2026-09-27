const chat = document.getElementById("chat");
const userInput = document.getElementById("userInput");
const sendButton = document.getElementById("sendButton");

function addMessage(name, text, type) {
    const message = document.createElement("div");
    message.className = `message ${type}`;

    message.innerHTML = `
        <div class="name">${name}</div>
        <div class="text">${text}</div>
    `;

    chat.appendChild(message);
    chat.scrollTop = chat.scrollHeight;
}

function respond(message) {
    const text = message.toLowerCase();

    if (text.includes("hola")) {
        return "¡Hola! 👋 Soy Verongg. ¿En qué puedo ayudarte?";
    }

    if (text.includes("cómo estás")) {
        return "Estoy funcionando correctamente. 🧠";
    }

    if (text.includes("quién eres")) {
        return "Soy Verongg, una IA que estamos construyendo juntos.";
    }

    return "Recibí tu mensaje. Mi cerebro de IA todavía está en construcción 🧠. Pronto podremos conectarme a un modelo de IA real.";
}

function sendMessage() {
    const message = userInput.value.trim();

    if (message === "") {
        return;
    }

    addMessage("Tú", message, "user");

    userInput.value = "";

    setTimeout(() => {
        const response = respond(message);
        addMessage("Verongg", response, "ai");
    }, 500);
}

sendButton.addEventListener("click", sendMessage);

userInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        sendMessage();
    }
});
