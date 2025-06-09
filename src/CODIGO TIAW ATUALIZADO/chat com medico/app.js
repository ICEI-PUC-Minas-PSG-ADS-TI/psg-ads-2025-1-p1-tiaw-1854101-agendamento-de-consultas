function sendMessage() {
    const input = document.getElementById("messageInput");
    const text = input.value.trim();
  
    if (text !== "") {
      const chat = document.getElementById("chatMessages");
  
      const message = document.createElement("div");
      message.classList.add("message", "patient");
      message.innerText = text;
  
      chat.appendChild(message);
      chat.scrollTop = chat.scrollHeight;
      input.value = "";
    }
  }
  