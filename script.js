let idTarefa = 0
const inputTarefa = document.getElementById("tarefa-nova")

function adicionarTarefa(){
    const item = document.createElement("li")

    item.innerHTML = `<li>
    <span onclick="concluir(${idTarefa})">${inputTarefa.value}</span>
    <button class="excluir" onclick="excluir(event)">x</button>
</li>`

    const lista = document.querySelector("#lista")
    lista.appendChild(item)

    inputTarefa.value = ""

    idTarefa++
    item.id = idTarefa
}

const botaoAdicionar = document.querySelector("#btn-adicionar")
botaoAdicionar.addEventListener("click", adicionarTarefa)


function limparlista(){
    const lista = document.querySelector("#lista")
    lista.innerHTML = ""
}

const botaoLimpar = document.querySelector(".bt-azul")
botaoLimpar.addEventListener("click", limparlista)

function concluir(){
    const tarefaSelecionada = document.querySelector("#lista")
    tarefaSelecionada.className = "concluida"
}