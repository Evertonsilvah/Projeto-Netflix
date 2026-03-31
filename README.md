# 🎬 Projeto Netflix - Seleção de Perfis

Uma página web inspirada na interface da Netflix para seleção de perfis de usuário, desenvolvida durante a Imersão Alura com IA.

## 📋 Descrição

Este projeto simula a tela inicial da Netflix onde os usuários podem escolher entre diferentes perfis disponíveis. Ao selecionar um perfil, as informações são salvas no localStorage do navegador e o usuário é redirecionado para o catálogo de filmes/séries.

## ✨ Funcionalidades

- **Seleção de Perfis**: Interface intuitiva com 4 perfis pré-configurados
- **Armazenamento Local**: Dados do perfil selecionado salvos no localStorage
- **Redirecionamento Automático**: Navegação para o catálogo após seleção
- **Design Responsivo**: Layout adaptável para diferentes dispositivos
- **Acessibilidade**: Uso de elementos semânticos HTML5 e atributos ARIA

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica da página
- **CSS3**: Estilização e layout responsivo
- **JavaScript (ES6+)**: Funcionalidade de seleção de perfis e manipulação do DOM
- **localStorage**: Persistência de dados do perfil selecionado

## 📁 Estrutura do Projeto

```
Projeto-Netflix/
├── index.html          # Página principal de seleção de perfis
├── styles.css          # Estilos CSS da aplicação
├── index.js            # JavaScript para funcionalidade de perfis
├── script.js           # (Arquivo legado - funcionalidade de tema removida)
├── assets/             # Imagens e recursos estáticos
│   ├── perfil1.jpg
│   ├── perfil2.jpg
│   ├── perfil3.jpg
│   └── perfil4.jpg
├── catalogo/           # Página do catálogo
│   ├── catalogo.html
│   ├── catalogo.css
│   └── js/
│       ├── data.js
│       ├── main.js
│       ├── utils.js
│       └── components/
│           ├── Card.js
│           └── Carousel.js
├── README.md           # Este arquivo
└── LICENSE             # Licença do projeto
```

## 🚀 Como Executar

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/Projeto-Netflix.git
   cd Projeto-Netflix
   ```

2. **Abra o arquivo principal**:
   - Abra o `index.html` em seu navegador web
   - Ou use um servidor local (recomendado para melhor compatibilidade)

## 🎯 Como Usar

1. Na página inicial, você verá 4 perfis disponíveis
2. Clique em qualquer perfil para selecioná-lo
3. O sistema salvará automaticamente suas informações
4. Você será redirecionado para o catálogo personalizado


## 🤝 Como Contribuir

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🙏 Agradecimento

- **[Alura](https://www.alura.com.br/)**: Pela imersão com IA que inspirou este projeto


