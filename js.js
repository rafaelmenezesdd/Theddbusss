// Adiciona um ouvinte de evento para exibir o formulário quando o botão for clicado
document.getElementById("botao-whatsapp").addEventListener("click", function() {
    document.getElementById("formulario-container").style.display = "block";
});

// Adiciona um ouvinte de evento para enviar uma mensagem via WhatsApp quando o formulário é enviado
document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que o formulário seja enviado normalmente

    var nome = document.getElementById("nome").value;
    var numero = "94996621746"; // Número de telefone fixo ou móvel com o código do país (neste caso, Brasil)
    var mensagem = "Olá meu nome é " + nome + ", gostaria de saber mais sobre seus serviços.";
    var url = "https://api.whatsapp.com/send?phone=" + numero + "&text=" + encodeURIComponent(mensagem);
    window.open(url, "_blank");
});

// Adiciona um ouvinte de evento para exibir os elementos quando o botão "mostrarElemento" é clicado
document.querySelectorAll('.mostrarElemento').forEach(function(button) {
    button.addEventListener('click', function() {
        var targetId = this.getAttribute('data-target');
        var targetElement = document.getElementById(targetId);

        // Alterna entre exibir e ocultar o elemento
        targetElement.style.display = (targetElement.style.display === 'none') ? 'block' : 'none';
    });
});
// Selecione o botão
var botao = document.querySelector('.mostrarElemento');

// Adicione um ouvinte de evento para o clique no botão
botao.addEventListener('click', function() {
    // Obtenha o valor do atributo 'data-target'
    var targetId = this.getAttribute('data-target');
    // Selecione o elemento alvo pelo id
    var elemento = document.getElementById(targetId);
    // Mude o estilo do elemento para 'block', tornando-o visível
    elemento.style.display = 'block';

    // Abre o link quando o botão é clicado
    var link = document.getElementById('linkContato').getAttribute('href');
    window.location.href = link;
});