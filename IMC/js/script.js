const nome = document.querySelector('#nome');
const altura = document.querySelector('#altura');
const peso = document.querySelector('#peso');
const imcf = document.querySelector('#imc');
const btn = document.querySelector('#btn');
const resultado = document.querySelector('#resultado');

btn.addEventListener('click', (event) => {

    event.preventDefault();

    if(peso.value !== '' && altura.value !== '' && nome.value !== ''){
        
       
        let imc = peso.value / (altura.value**2);
       
        

        imcf.value = imc.toFixed(1);
        
        nome.value = altura.value = peso.value = '';
        
    }  
    else{
        resultado.innerHTML = 'Preencha os dados corretamente';
    }

    

});