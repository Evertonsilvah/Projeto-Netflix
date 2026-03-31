// index.js - Funcionalidade de seleção de perfil

// Seleciona todos os elementos com a classe 'profile' e itera sobre cada um
document.querySelectorAll('.profile').forEach(link => {
    // Adiciona um evento de clique a cada perfil
    link.addEventListener('click', function(e) {
        // Extrai o atributo 'src' da imagem dentro do perfil clicado
        const imgSrc = this.querySelector('img').getAttribute('src');
        // Extrai o texto (nome) da tag 'figcaption' dentro do perfil clicado
        const nome = this.querySelector('figcaption').textContent;
        
        // Salva os dados do perfil no localStorage como objeto JSON
        localStorage.setItem('perfilSelecionado', JSON.stringify({
            nome: nome,
            imagem: imgSrc
        }));
    });
});
