document.getElementById('hablar4').addEventListener("mouseover",()=>{
    decir(document.getElementById("hablar4").value);
});
function decir(hablar4){
    speechSynthesis.speak(new SpeechSynthesisUtterance(hablar4));
}
document.getElementById('hablar5').addEventListener("mouseover",()=>{
    decir(document.getElementById("hablar5").value);
});
function decir(hablar5){
    speechSynthesis.speak(new SpeechSynthesisUtterance(hablar5));
}
document.getElementById('hablar6').addEventListener("mouseover",()=>{
    decir(document.getElementById("hablar6").value);
});
function decir(hablar6){
    speechSynthesis.speak(new SpeechSynthesisUtterance(hablar6));
}
document.getElementById('hablar7').addEventListener("mouseover",()=>{
    decir(document.getElementById("hablar7").value);
});
function decir(hablar7){
    speechSynthesis.speak(new SpeechSynthesisUtterance(hablar7));
}