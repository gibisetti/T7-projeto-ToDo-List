let btn = document.getElementById("add")

// Botão envia a tarefa para a lista
btn.addEventListener("click", function () {
    add();
});

// Enter envia a tarefa para a lista
document.addEventListener("keypress", function (event) {
    if (event.key == "Enter") {
        add();
    }
});

// Incluir tarefa na lista

function add() {
    let input = document.getElementById("input").value;
    let ul = document.getElementById("lista");
    let li = document.createElement("li");

    if (input.length === 0 || input.replace(/\s+/g, '').length === 0) {
        alert("Você deve escrever algo!");
        return;
    };

    let lista = document.createTextNode(input);
    li.appendChild(lista);
    ul.appendChild(li);

    document.getElementById("input").value = "";

}

// Excluir todas as tarefas
function excluirTudo() {
    let excluir = document.getElementById("lista");
    excluir.parentNode.removeChild(excluir);
}



// check symbol when clicking on a list item
let list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'li') {
        ev.target.classList.toggle('checked');
    }
}, false);


// Marcar todas as tarefas
function marcarTudo() {
    document.getElementById("lista").className = "check";
}

// // 
// function abertura(){
//     document.getElementById("inicio").className = "corrente";
// }

// function trocaMenu(id){
//    document.getElementById("inicio").className = "normal";
//    document.getElementById("contato").className = "normal";
//    document.getElementById("sair").className = "normal";

//    if(id=="I"){
//        document.getElementById("inicio").className = "corrente";
//    } else if(id=="C"){
//        document.getElementById("contato").className = "corrente";
//    } else if(id=="S"){
//        document.getElementById("sair").className = "corrente";
//    }
// }
// // 



