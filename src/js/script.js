const numeroCliques = document.querySelector('.numeroCliques');
const tempoRestante = document.querySelector('.tempoRestante');
const mediaCliques = document.querySelector('.mediaCliques');
let tempoInicial = 0;
let tempo = 0 ;
let comecarCliques = false;
let cliques = 0;
let jogoEmAndamento = false;

document.addEventListener('click', e => {

    const el = e.target;
    
    if(el.classList.contains('btnComecar')){
        if(tempo <= 0) return;
        contagem();
    };
    
    if(el.classList.contains('tempoEscolhido5')) defineValorBtn(5);

    if(el.classList.contains('tempoEscolhido10')) defineValorBtn(10);
    
    if(el.classList.contains('tempoEscolhido15')) defineValorBtn(15);

    if(el.classList.contains('divCliqueEmMim')){
        
        if(tempo > 0 && comecarCliques === true) incrementaCliques();
        
    };
});

function contagem(){
    jogoEmAndamento = true;
    comecarCliques = true;
    timer = setInterval(function(){

        decrementaTempo();

        if (tempo <= 0){
            mediaCLiquesSegundo(cliques, tempoInicial);
            termina();
        }}, 1000);
}

function termina(){
    clearInterval(timer);
    comecarCliques = false; 
    cliques = 0;
    jogoEmAndamento = false;  
}

function  incrementaCliques(){
    cliques++
    numeroCliques.textContent = cliques;
}

function decrementaTempo(){
    tempo--;
    tempoRestante.textContent = tempo;
}

function mediaCLiquesSegundo(cliques, tempo){
    mediaCliques.textContent = (cliques / tempo).toFixed(2);
}

function defineValorBtn(tempos){
    if (jogoEmAndamento === false){
        tempoInicial = tempos;
        tempo = tempos ;
        tempoRestante.textContent = tempos;
        numeroCliques.textContent = 0;
    }
}