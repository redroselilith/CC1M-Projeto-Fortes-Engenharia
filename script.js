if (window.location.pathname === '/index.html') {
    window.addEventListener('load', function() {
        alert('Digite o nome no campo "nome" e deixe a senha em branco! :)');
    });
    
}



function salvarNomeUsuario(nomeUsuario) {   

    // Get the value entered by the user
    var nomeUsuario = document.getElementById('name').value;
    localStorage.setItem('nomeUsuario', nomeUsuario);
}

function obterNomeUsuario() {
    var nomeUsuario = localStorage.getItem('nomeUsuario') ?? '';

    var displayNameElement = document.getElementById('displayName');
    displayNameElement.innerHTML = 'Olá, <span style="color:red">' + nomeUsuario + '</span>! <br/> O que você está buscando?';
}

