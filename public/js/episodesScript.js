console.log('prueba')

window.addEventListener('load', function() {

    fetch ('https://spapi.dev/api/episodes')
    .then(function  (respuesta){
    return respuesta.json()
    })
    
    .then(function(informacion) {
    console.log(informacion.data)
    /*
    for (let i= 0; i < informacion.provincias.length; i ++){
        let gif = '<p>'+ 'Nombre de Provincia : ' + informacion.provincias[i].nombre + '</p>';
        let id = '<p>' + 'Numero de ID : ' + informacion.provincias[i].id + '</p>';
        let centroide = '<p>' + 'Latitud : ' + informacion.provincias[i].centroide.lat + '</p>';
        let centroide2 = '<p>' + 'Longitud : ' + informacion.provincias[i].centroide.lon + '</p>';

        document.querySelector('ol').innerHTML += '<li>' + gif + id + centroide+ centroide2+'</li>'
       

    }*/
    
    })
    
    })