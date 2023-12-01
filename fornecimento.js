function setar(id, obra, dropdown) {
    document.getElementById(id).innerHTML = obra
}

function enviar() {
    if (prompt("Confirma o pedido? (S)im / (N)ão").toLowerCase() === 's') {
        var obra = document.getElementById("obra-selecionada").innerHTML;
        var forn = document.getElementById("fornecedor-selecionado").innerHTML;
        var data = document.getElementById("data-forn").value;
        var tipo = document.querySelector('label[for=' + document.querySelector('input[name="refeicao"]:checked').id + ']').innerHTML;

        alert(`Pedido enviado para o fornecedor!
        Obra: ${obra}
        Fornecedor: ${forn}
        Data: ${data}
        Tipo: ${tipo}`);
    }
}