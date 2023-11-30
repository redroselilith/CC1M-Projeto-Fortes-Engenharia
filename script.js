if (window.location.pathname === '/index.html') {
    alert('Digite o nome no campo "nome" e deixe a senha em branco! :)')
}

function salvarNomeUsuario(nomeUsuario) {
    var inputElement = document.getElementById('name');

    // Get the value entered by the user
    var inputValue = inputElement.value;
    localStorage.setItem('nomeUsuario', inputValue);
}

function obterNomeUsuario() {
    var nomeUsuario = localStorage.getItem('nomeUsuario') ?? '';

    var displayNameElement = document.getElementById('displayName');
    displayNameElement.innerHTML = 'Olá, ' + nomeUsuario + '! <br/> O que você está buscando?';
}

