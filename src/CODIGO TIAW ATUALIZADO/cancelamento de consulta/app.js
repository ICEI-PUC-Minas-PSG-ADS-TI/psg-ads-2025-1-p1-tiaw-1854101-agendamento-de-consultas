document.getElementById('cancelamentoForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    const agendamentoId = document.getElementById('agendamentoId').value;
    const motivo = document.getElementById('motivo').value;
    const mensagem = document.getElementById('mensagem');

    // Lógica de cancelamento (simulação)
    if (agendamentoId && motivo) {
        mensagem.textContent = 'Agendamento cancelado com sucesso!';
        // Aqui você pode adicionar a lógica para enviar os dados para o servidor
    } else {
        mensagem.textContent = 'Por favor, preencha todos os campos.';
    }
});