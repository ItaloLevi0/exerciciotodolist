function atualizarQuantidade() {
    document.getElementById('numeros').innerHTML = `(${buscar().length})`
}

function listarTarefas() {
    let conteudo = buscar().map(function (tarefa){
        return `
            <div>
                <input type="checkbox"> ${tarefa.titulo} 
                <span class="badge bg-primary ${tarefa.prioridade === 'Baixa' && 'bg-primary'} ${tarefa.prioridade === 'Media' && 'bg-warning'} ${tarefa.prioridade === 'Alta' && 'bg-danger'}">
                     ${tarefa.prioridade}
                 </span>
            </div>`;
    })

    document.getElementById('tarefas').innerHTML = conteudo.sort().join('');
}


function addTarefa () {
    event.preventDefault();

    let titulo = document.getElementById('input_nova_tarefa').value;

    if (titulo.trim() === '') {
        alert('Tarefa inválida')
        return;
    }

    if (buscar().some(tarefa => titulo === tarefa.titulo)) {
        alert('Tarefa já existe')
        return;
    }


    salvar(titulo, input_prioridade.value);
   
    atualizarQuantidade()
    listarTarefas()

    

    
}

listarTarefas()