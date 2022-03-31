const containerClima = document.querySelector('.containerClima');
const resultado = document.querySelector('.resultado');
const formulario = document.querySelector('.formulario');

window.addEventListener('load', () =>{
    formulario.addEventListener('submit', buscarClima);
})

function buscarClima (e) {
    e.preventDefault();
 const ciudad = document.querySelector('#ciudad').value;
 const pais = document.querySelector('#pais').value;

 if(ciudad ==="" || pais ===""){
     mostrarError('Ambos campos deben completarse');
     return;
 }

 consultarApi ( ciudad, pais);


}

function mostrarError (mensaje){
    const alerta = document.querySelector()
    if (!alerta){
        const alerta = document.createElement('div');
        alerta.classList.add;
        alerta.innerHTML= `<strong > ERROR!!!!!!</strong>
        <span>${mensaje}</span>` ;
        containerClima.appendChild(alerta);

        setTimeout(() =>{
            alerta.remove

        }, 5000)
    }
}
function consultarApi(ciudad,pais)  {
 const appId ='4eb8a8ec72881bb0dcd3eafd4f09a12d';

 const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`
 fetch (url)
 .then(respuesta => respuesta.json())  
 .then(datos =>{

    limpiarHtml();
    
    if ( datos.cod ==="404"){ 
    mostrarError('Ciudad no encontrada')
    return;
    }
    
    mostrarClima(datos)
        })
 }
 function mostrarClima(datos){
    const{ main:{ temp, temp_max,temp_min}} = datos
    const centigrados = temp - 273.15;

    const centrigradoUnDecimal = centigrados.toFixed(1)

    const actual = document.createElement('p');
    actual.innerHTML= `La temperatura es de ${centrigradoUnDecimal}℃;`;
    actual.classList.add('text-center','text-light','mb-5','fs-3');

    const resultadoDiv = document.createElement('div');
    resultadoDiv.classList.add('text-center','text-light','shadow-lg', 'p-2','mb-5',);
    resultadoDiv.appendChild(actual);

    resultado.appendChild(resultadoDiv);
    
 }

 function limpiarHtml(){
     while(resultado.firstChild){
         resultado.removeChild(resultado.firstChild);
     }
 }