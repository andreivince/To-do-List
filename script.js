'use strict';

//Preciso estudar esse use strict

const criarItem = (tarefa, status, indice) => {
    const item = document.createElement('label');
    item.classList.add('todoitem')
    item.innerHTML = `
    <input type="checkbox" ${status} data-indice=${indice}> 
    <div>${tarefa}</div data-indice="2">
    <input type="button" value="X" data-indice=${indice}>
    `;
    
    
    document.getElementById('todo_list').appendChild(item);
}

//Ele faz um arrow function para criar um elemento igual ao do HTML
//Utilizando ${} ele consegue colocar uma espécie de variável
//Status e nem tarefa precisa ser declarada apenas coloque
//Indice serve para ver qual das tarefas ele está apontando

let banco = [ 
    {"tarefa": "Estudar JS", "status": ""}
]

//Aqui estamos simulando um banco de dados

const getBanco = () => JSON.parse(localStorage.getItem('todo')) ?? [];
const setBanco = (banco) => localStorage.setItem('todo', JSON.stringify(banco))
//Colocando dados no local storage

const atualizarTela = () => {
    limparTarefas();
    const banco = getBanco();
    banco.forEach( (item, indice) => criarItem(item.tarefa, item.status, indice));
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
        const banco = getBanco()
        banco.push({"tarefa": texto, "status": ""})
        setBanco(banco)
        atualizarTela()
        evento.target.value = ''; //Para limpar a tarefa
    }
}

document.getElementById("novo_item").addEventListener('keypress',inserirItem);

//Aqui estamos fazendo a barra para inserir nova tarefa

const removerItem = (indice) => {
    const banco = getBanco()
    banco.splice (indice, 1) //Recortar um array
    setBanco(banco)
    atualizarTela()
}

const atualizarItem = (indice) => {
    const banco = getBanco()
    banco[indice].status = banco[indice].status === '' ? 'checked' : ''; //Para atualizar o checked
    setBanco(banco)
    atualizarTela()
}

const clickItem = (evento) => {
    const elemento = evento.target //Qual elemento foi clicado
    if (elemento.type === 'button') {
        const indice = elemento.dataset.indice //Propriedade para pegar o indice
        removerItem(indice)
    } else if (elemento.type === 'checkbox') {
        const indice = elemento.dataset.indice;
        atualizarItem (indice)
    }
}
document.getElementById("todo_list").addEventListener('click', clickItem)

//Serve para descobrir qual tarefa está clicando e tem ligação com o "indice"
//Serve para apagar o item que foi selecionado

atualizarTela();

//Chamando a função