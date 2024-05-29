document.getElementById('meuFormulario').addEventListener('submit', function(event){
    event.preventDefault();
    var nome = document.getElementById('nome').value;
    var data = document.getElementById('data').value;
    var destino = document.getElementById('destino').value;
    var estado = document.getElementById('estado').value;
    var tripulacao = document.getElementById('tripulacao').value;
    var carga = document.getElementById('carga').value;
    var duracao = document.getElementById('duracao').value;
    var custo = document.getElementById('custo').value;
    var status = document.getElementById('status').value;

    var dados = {
        nome: nome,
        data: data,
        destino: destino,
        estado: estado,
        tripulacao: tripulacao,
        carga: carga,
        duracao: duracao,
        custo: custo,
        status: status
    };
    console.log(dados);

    //requisição AJAX p/ a API
    fetch('http://127.0.0.1:2000/criar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    })
    .then(response => response.text())
    .then(responseText => {
        document.getElementById('resposta').innerHTML = 'Expedição criada com sucesso!';
        console.log("Sucesso:", responseText);
    })
    .catch(error => {
        document.getElementById('resposta').innerHTML = 'Erro ao processar a requisição';
        console.error("Erro:", error);
    });
});

document.getElementById('meuFormulario').addEventListener('click', function(event){
    event.preventDefault();

    var id = document.getElementById('id').value;
    var nome = document.getElementById('nome').value;
    var data = document.getElementById('data').value;
    var destino = document.getElementById('destino').value;
    var estado = document.getElementById('estado').value;
    var tripulacao = document.getElementById('tripulacao').value;
    var carga = document.getElementById('carga').value;
    var duracao = document.getElementById('duracao').value;
    var custo = document.getElementById('custo').value;
    var status = document.getElementById('status').value;

    var dados = {
        id: id,
        nome: nome,
        data: data,
        destino: destino,
        estado: estado,
        tripulacao: tripulacao,
        carga: carga,
        duracao: duracao,
        custo: custo,
        status: status
    };
    console.log(dados);

    // requisição AJAX 
    fetch('http://127.0.0.1:2000/atualizar', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    })
    .then(response => response.text())
    .then(responseText => {
        document.getElementById('resposta').innerHTML = 'Expedição atualizada com sucesso!';
        console.log("Sucesso:", responseText);
    })
    .catch(error => {
        document.getElementById('resposta').innerHTML = 'Erro ao processar a requisição';
        console.error("Erro:", error);
    });
});

document.getElementById('btnDeletar').addEventListener('click', function(event){
    event.preventDefault();

    var id = document.getElementById('id').value;

    fetch('http://127.0.0.1:2000/deletar' + id, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.text())
    .then(responseText => {
        document.getElementById('resposta').innerHTML = 'Expedição deletada com sucesso!';
        console.log("Sucesso:", responseText);
    })
    .catch(error => {
        document.getElementById('resposta').innerHTML = 'Erro ao processar a requisição';
        console.error("Erro:", error);
    });
});
