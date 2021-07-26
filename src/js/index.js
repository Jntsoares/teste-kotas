let minVaga = 1;
let maxVaga = 2; //Valor fixo para teste da app
let monthly = 15.26;
let caucao = monthly;
let totalInsc = monthly + caucao;
let signature = totalInsc;
let nextMonth = monthly;

// Inicializando valores

var elMonthly = document.querySelector('.signature-price .value .vs').textContent = monthly;
let elCaucao = document.querySelector('.caucao .value .vs').textContent = caucao;
let elTotal = document.querySelector('.total .value .vs').textContent = totalInsc;
let elSignature = document.querySelector('.total-signature .vs').textContent = totalInsc;
let elNextMonth = document.querySelector('.next-month .vs').textContent = monthly;


let btnAdd = document.querySelector('.add');
let btnSub = document.querySelector('.sub');
btnSub.disabled = true;
btnSub.classList.add("btn-disabled");

let qtdAux =  parseInt(document.querySelector('.qtd-aux').textContent = minVaga);

// Operações após evento de click ao botão de adicionar assinaturas
btnAdd.addEventListener('click', function(){
  qtdAux++;
  let result = (parseInt(document.querySelector('.qtd-aux').textContent = qtdAux));
  
  // Realizando perações com valores
    elMonthly = qtdAux * elMonthly;
    elCaucao = elMonthly;
    elTotal = elMonthly + elCaucao;
    elSignature = elTotal;
    elNextMonth = elMonthly;
    
    //Substituido valores
    document.querySelector('.signature-price .value .vs').textContent = elMonthly;
    document.querySelector('.caucao .value .vs').textContent = elCaucao;
    document.querySelector('.total .value .vs').textContent = elTotal;
    document.querySelector('.total-signature .vs').textContent = elTotal;
    document.querySelector('.next-month .vs').textContent = elNextMonth;

    if(qtdAux == maxVaga){
      btnAdd.disabled = true;
      btnAdd.classList.add("btn-disabled");
    }

    btnSub.classList.remove("btn-disabled");
    btnSub.disabled = false;
  });

  console.log('teste');

// Operações após evento de click ao botão de remover assinaturas
  btnSub.addEventListener('click', function(){
    // Realizando perações com valores
    elMonthly = elMonthly / qtdAux;
    elTotal = elTotal / qtdAux;
    
    qtdAux--;
    let result = (parseInt(document.querySelector('.qtd-aux').textContent = qtdAux));
    console.log(qtdAux);

    // Realizando perações com valores
    elCaucao = elMonthly;
    elSignature = elTotal;
    elNextMonth = elMonthly;
    
    //Substituido valores
    document.querySelector('.signature-price .value .vs').textContent = elMonthly;
    document.querySelector('.caucao .value .vs').textContent = elCaucao;
    document.querySelector('.total .value .vs').textContent = elTotal;
    document.querySelector('.total-signature .vs').textContent = elTotal;
    document.querySelector('.next-month .vs').textContent = elNextMonth;
    if(qtdAux == minVaga){
      btnSub.classList.add("btn-disabled");
    }

    btnAdd.classList.remove("btn-disabled");
    btnAdd.disabled = false;
    
  });





