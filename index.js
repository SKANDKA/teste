//pegando o cabecalho 
var body = document.getElementById('body');
console.log(body.innerWidth,'oi')
//cabecalho do grupo 
var cabecalho = document.createElement('div');
cabecalho.style.backgroundColor = 'rgb(82,143,244,255)';
//calculo de porcetagem da tela 
cabecalho.style.width = (innerWidth/100)*100 +'px'; 
cabecalho.style.height = innerHeight/100*10 +'px'; 

//texto 
cabecalho.innerHTML = '<h4>AppTest</h4>'

//adicionando
body.appendChild(cabecalho)