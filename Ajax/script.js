form = document.getElementById('formCadastro');
form.addEventListener('submit', (event)=>{
    event.preventDefault();
    const formData = new FormData(form);

    let cabecalho = {
        method: 'POST',
        body: formData
    }

    fetch('salvar.php', cabecalho)

    .then(response => response.text())
    .then(data=> {
        alert(data);
        form.reset();
        carregarUsuarios();
    })

    .catch(error => console.error('Erro:', error))
})

function carregarUsuarios(){
    fetch('consultar.php')
    .then(response => response.text()) 
    .then(data => {
        console.log(data)
            document.getElementById('listaUsuarios').innerHTML = data;
    })

    .catch(error => console.error('Erro:', error));
}

window.onload = carregarUsuarios();