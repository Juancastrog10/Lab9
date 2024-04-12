document.addEventListener("DOMContentLoaded", () => {
    const messagesContainer = document.getElementById("messages-general");
    const sendBtnUserRed = document.getElementById("send-btn-user-red");
    const sendBtnUserGreen = document.getElementById("send-btn-user-green");

    sendBtnUserRed.addEventListener("click", sendMessage);
    sendBtnUserGreen.addEventListener("click", sendMessage);

    function sendMessage(event) {
        event.preventDefault();
        const input = event.target.parentElement.querySelector(".message-input");
        const message = input.value.trim();
        const user = input.dataset.user;

        if (message !== "") {
            const messageElement = document.createElement("div");
            messageElement.classList.add("message");
            messageElement.classList.add(user);
            messageElement.textContent = message;
            messagesContainer.appendChild(messageElement);
            input.value = "";
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }
    }
});

