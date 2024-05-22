function cadastrar() {
    rm = document.getElementById('txt_rm').value
    nome = document.getElementById('txt_nome').value
    alert(rm + " " + nome)
 
    armazenamento = localStorage

    localStorage.setItem(rm, nome)

}

function pesquisar() {
    rm = document.getElementById('pesquisar_RM').value
    var valorPesquisado

    valorPesquisado = localStorage.getItem(rm)

    document.getElementById('visor').innerHTML = valorPesquisado
}