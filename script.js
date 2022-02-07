const criarItem = (tarefa, status) => {
    const item = document.createElement('teste1');
    item.classList.add('teste1');
    item.innerHTML = `
        <input type="checkbox" class="check1" ${status}> 
        <h2>${tarefa}</h2> 
        <input type="button" value="X" class="x1">
    `;  
    document.getElementById('tarefa').appendChild(item);
}

//Ele acaba recriando o elemento, e esses ${} são status ou tarefa que seria os parametros
//Não é preciso crair um ${status}

