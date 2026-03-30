// script.js - Funcionalidade de Dark/Light Mode

// Seleciona o botão de alternância
const themeToggle = document.getElementById('theme-toggle');

// Verifica se há um tema salvo no localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light-mode') {
    document.body.classList.add('light-mode');
    updateButtonText();
}

// Função para alternar o tema
function toggleTheme() {
    document.body.classList.toggle('light-mode');
    const isLight = document.body.classList.contains('light-mode');
    localStorage.setItem('theme', isLight ? 'light-mode' : 'dark-mode');
    updateButtonText();
}

// Função para atualizar o texto do botão
function updateButtonText() {
    const isLight = document.body.classList.contains('light-mode');
    themeToggle.textContent = isLight ? '🌙' : '☀️';
}

// Adiciona evento de clique ao botão
themeToggle.addEventListener('click', toggleTheme);