// JavaScript para mudar o conteúdo das abas
document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('nav a');
    const tabContents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', function(event) {
            event.preventDefault();
            const target = this.getAttribute('href').substring(1);

            tabContents.forEach(content => {
                content.classList.remove('active');
            });

            document.getElementById(target).classList.add('active');
        });
    });

    // Formulário de inscrição
    const form = document.getElementById('inscricao-form');
    const confirmacao = document.getElementById('confirmacao');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        form.style.display = 'none';
        confirmacao.style.display = 'block';
    });
});