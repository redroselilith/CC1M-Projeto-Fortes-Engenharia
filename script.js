if (window.location.pathname === '/index.html') {
alert('Digite seu nome no campo "nome" e deixe a senha em branco! :)');
}

function getName() {
    let name = document.getElementById('name').value;
    localStorage.setItem('name', name);    
}



if (window.location.pathname === '/index.html') {
    let retrievedData = localStorage.getItem('name');
    document.getElementById('displayName').innerHTML = "Olá, " + retrievedData;
}