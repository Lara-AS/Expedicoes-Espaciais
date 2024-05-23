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
    console.log(dados)
    // realizar requisição AJAX para a API
    fetch('http://127.0.0.1:2000/criar',{
        method:'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    })
     // tratamento da resposta da requisição
    .then(response => response.text())
    .catch(error =>{
        document.getElementById('resposta')
        .innerHTML = 'Erro ao processar a requisição';
        console.error("Erro:", error);
    });

});
document.getElementById('bntAtualizar').addEventListener('click', function(event){
    event.preventDefault();

    var id = documents.getElementById('id').value;
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
    console.log(dados)
    // realizar requisição AJAX para a API
    fetch('http://127.0.0.1:2000/atualizar',{
        method:'PUT',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    })
     // tratamento da resposta da requisição
    .then(response => response.text())
    .catch(error =>{
        document.getElementById('resposta')
        .innerHTML = 'Erro ao processar a requisição';
        console.error("Erro:", error);
    });
});

/**var id = prompt('Insira o ID que deseja atualizar:');
if (id) {
    enviarDados('PUT', 'http://127.0.0.1:2000/atualizar/');
} else {
    alert('Insira um ID válido.');**/