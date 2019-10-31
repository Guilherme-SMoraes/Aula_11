const nome = document.getElementById('NomeCompleto');
const comentario = document.getElementById('ComentarioText');

function ApagarComentario(target){
    target.parentElement.parentElement.remove();
}
function focoCampo(event){
    event.target.style.borderColor = 'green';
}
function perdeFoco(event){
    event.target.style.borderColor = 'black';
}