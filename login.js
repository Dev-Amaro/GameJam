var checkbox = document.getElementById('auditivo');
var checkbox1 = document.getElementById('visuais');
var checkbox2 = document.getElementById('naotem');
function proximo(){
    if(checkbox.checked){
        window.open("auditivos.html", "_self");
    }
    else{
        console.log("erro");
    }

    if(checkbox1.checked){
        window.open("visuais.html", "_self");
    }
    else{
        console.log("erro1");
    }

    if(checkbox2.checked){
        window.open("inicio.html", "_self");
    }
    else{
        console.log("erro2");
    }
}
