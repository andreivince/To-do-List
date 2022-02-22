'use strict';

//Preciso estudar esse use strict

const criarItem = (tarefa, status) => {
    const item = document.createElement('label');
    item.classList.add('todoitem')
    item.innerHTML = `
    <input type="checkbox" ${status}>
    <div>${tarefa}</div>
    <input type="button" value="X">
    `
    
    
    document.getElementById('todo_list').appendChild(item);
}

//Ele faz um arrow function para criar um elemento igual ao do HTML
//Utilizando ${} ele consegue colocar uma espécie de variável
//Status e nem tarefa precisa ser declarada apenas coloque

let banco = [ 
    {"tarefa": "Estudar JS", "status": ""}
]

//Aqui estamos simulando um banco de dados

const atualizarTela = () => {
    limparTarefas();
    banco.forEach(item => criarItem(item.tarefa, item.status));
}

//Aqui estamos fazendo uma função para que toda vez que se cria algo vai para o banco de dados

const limparTarefas = () => {
    const todo_list = document.getElementById("todo_list");
    while (todo_list.firstChild) {
        todo_list.removeChild(todo_list.lastChild)
    }
}

//Aqui estamos fazendo uma função para limpar a tela e não adicionar mais de 1 elemento igual quando entra um novo dado

const inserirItem = (evento) => {
    const tecla = evento.key //Uma variável para descobrir qual tecla foi pressionada
    const texto = evento.target.value
    if (tecla === 'Enter') {
        banco.push({"tarefa": texto, "status": ""})
        atualizarTela()
        evento.target.value = ''; //Para limpar a tarefa
    }
}

document.getElementById("novo_item").addEventListener('keypress',inserirItem);

//Aqui estamos fazendo a barra para inserir nova tarefa

const clickItem = (evento) => {
    const elemento = evento.target //Qual elemento foi clicado
    
}
document.getElementById("todo_list").addEventListener('click', clickItem)






atualizarTela();

//Chamando a função