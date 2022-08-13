var checkbox = document.getElementById('auditivo');
var checkbox1 = document.getElementById('visuais');
var checkbox2 = document.getElementById('naotem');
function proximo(){
    if(document.getElementById("nome").value == ""){
        alert('Por favor, preencha o campo nome');
        document.getElementById("nome").focus();
        return false
    }
    if(checkbox.checked){
        window.open("auditivos.html", "_self");
    }if(checkbox1.checked){
        window.open("visuais.html", "_self");
    }if(checkbox2.checked){
        window.open("inicio.html", "_self");
    }else{
        alert("Selecione uma opção");
    }
}
