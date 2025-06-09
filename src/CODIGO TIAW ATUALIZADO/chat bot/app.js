const respostas = {
    "olá": "Olá! Como posso te ajudar hoje?",
    "oi": "Oi! Como posso ajudar?",
    "consulta": "Você quer agendar uma consulta? Por favor, informe a especialidade.",
    "horário": "Temos horários disponíveis de segunda a sexta, das 08h às 18h.",
    "cardiologista": "Temos consultas com cardiologistas disponíveis nas terças e quintas.",
    "dermatologista": "As consultas com dermatologistas estão disponíveis às quartas e sextas.",
    "obrigado": "De nada! Se precisar de mais alguma coisa, estou por aqui.",
    "tchau": "Até logo! Volte sempre.",
    
    
  };

  const form = document.getElementById("formChat");
  const input = document.getElementById("inputMessage");
  const chatMessages = document.getElementById("chatMessages");

  form.addEventListener("submit", function(event) {
    event.preventDefault();
    const userMessage = input.value.trim();
    if (userMessage === "") return;

    adicionarMensagem("user", userMessage);
    input.value = "";
    responder(userMessage.toLowerCase());
  });

  function adicionarMensagem(tipo, texto) {
    const msg = document.createElement("div");
    msg.classList.add("message", tipo);
    msg.textContent = texto;
    chatMessages.appendChild(msg);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function responder(pergunta) {
    let resposta = "Desculpe, não entendi sua pergunta. Pode reformular?";
    for (const chave in respostas) {
      if (pergunta.includes(chave)) {
        resposta = respostas[chave];
        break;
      }
    }
    setTimeout(() => adicionarMensagem("bot", resposta), 500);
  }
