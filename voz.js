document.getElementById('hablar').addEventListener("mouseover",()=>{
    decir(document.getElementById("hablar").value);
});
function decir(hablar){
    speechSynthesis.speak(new SpeechSynthesisUtterance(hablar));
}

document.getElementById('hablar2').addEventListener("mouseover",()=>{
    decir(document.getElementById("hablar2").value);
});
function decir(hablar2){
    speechSynthesis.speak(new SpeechSynthesisUtterance(hablar2));
}
document.getElementById('hablar3').addEventListener("mouseover",()=>{
    decir(document.getElementById("hablar3").value);
});
function decir(hablar3){
    speechSynthesis.speak(new SpeechSynthesisUtterance(hablar3));
}
