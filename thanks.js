function sendMessage(event) {
    event.preventDefault();
    const messageInput = document.getElementById("message");
    const messageText = messageInput.value;
    const messageThankYou = document.getElementById("message-thank-you");
    console.log(`Message: ${messageText}`);
    messageThankYou.style.display = "block";
    messageInput.style.display = "none";
    return false;
}