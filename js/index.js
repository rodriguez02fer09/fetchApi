
//Aqui guardamos  los elementos a manipular en una variable 
const urlAPI = 'https://randomuser.me/api/';
const tarjeta = document.querySelector('.tarjeta');
const btn = document.querySelector('.btnContainer');


// Aquí realizamos un la consulta de la promesa, esperando su respuesta asíncrona
function peticionAPI (urlApi){
fetch(urlApi)
    .then(response => {
        return response.json()
    })
    .then(data => {
        //manipulamos la respuesta
        console.log(data.results[0])
        tarjeta.innerHTML  = renderizarDatosUsuario (data.results[0])//como  necesitamos mostrar datos de la api le damos inner.HTML por que vamos a motrar sus datos
        
    }).catch(error => {
        console.log(error);//manejo de errores
    })
}

function renderizarDatosUsuario(datos) {
    //aqui implementamos la funcion con para mostrar los datos 
    /* -------------------------------- CONSIGNA 1 -------------------------------- */
    // Aquí deben desarrollar una función que muestre en pantalla:
    // la foto, el nombre completo del usuario y su email.
    // Esto debe estar basado en la info que nos llega desde la API e insertarse en el HTML.
    let template = `
    <div>
    <p>${datos.name.title} ${datos.name.first} ${datos.name.last}</p>
    <p>${datos.email}</p>
</div>
<div class="imagen">
    <img src="${datos.picture.large}">
</div> 
`;
    
    
return template   
    
}


/* --------------------------- CONSIGNA 2 (extra) --------------------------- */
// Aqui pueden ir por el punto extra de utilizar el boton que se encuentra comentado en el HTML
// Pueden descomentar el código del index.html y usar ese boton para ejecutar un nuevo pedido a la API, sin necesidad de recargar la página.
// Es criterio del equipo QUÉ bloque del código debe contenerse dentro de una función para poder ser ejecutada cada vez que se escuche un click.

// window.addEventListener('load', function () {
//     peticionAPI(urlAPI);
// })  



btn.addEventListener('click', function () {
    peticionAPI     (urlAPI);
});