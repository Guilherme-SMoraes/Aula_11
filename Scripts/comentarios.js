const nome = document.getElementById('NomeCompleto');
const comentario = document.getElementById('ComentarioText');

document.getElementById('enviarComentario').addEventListener('click',(event)=>{
    event.preventDefault();

    const tabela = document.getElementById('ComentariosFeitos');

    // Validações
    if(nome.value===""||comentario.value===""){
        alert("Preencha todos os campos para realizar um comentário");
        return;
    }

    // Monta a tabela com os dados
    var html = '';

    html += '<tr>';
    html += `   <td>${nome.value}</td>`;
    html += `   <td>${comentario.value}</td>`;
    html += `   <td><button class="btn btn-danger" type="button" onClick="ApagarComentario(this)">Apagar</button></td>`;
    html += '</tr>';

    tabela.innerHTML+=html;

});
function ApagarComentario(target){
    target.parentElement.parentElement.remove();
}
function focoCampo(event){
    event.target.style.borderColor = 'green';
}
function perdeFoco(event){
    event.target.style.borderColor = 'black';
}
nome.addEventListener('focus',focoCampo.bind(this));
comentario.addEventListener('focus',focoCampo.bind(this));
nome.addEventListener('blur',perdeFoco.bind(this));
comentario.addEventListener('blur',perdeFoco.bind(this));