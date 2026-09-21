// Lógica interativa do site Ritmos da Terra

document.addEventListener('DOMContentLoaded', function () {
    const formAgendamento = document.getElementById('form-agendamento');
    const mensagemSucesso = document.getElementById('mensagem-sucesso');

    // Manipulação do envio do formulário
    formAgendamento.addEventListener('submit', function (event) {
        event.preventDefault();

        // Obtendo os valores informados pelo usuário
        const nome = document.getElementById('nome').value;
        const estilo = document.getElementById('estilo').value;

        // Exibe a mensagem de confirmação
        mensagemSucesso.classList.remove('hidden');

        // Limpa o formulário
        formAgendamento.reset();

        // Oculta a mensagem automaticamente após 6 segundos
        setTimeout(() => {
            mensagemSucesso.classList.add('hidden');
        }, 6000);
    });
});
