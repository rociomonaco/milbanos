/* PLANTILLA CLASE 15 - jQuery AJAX
   FUNCIÓN READY CON ARROW FUNCIÓN. UNA VEZ LISTO EL DOM HACEMOS LAS LLAMADAS ASÍNCRONAS
*/
//CREAMOS UN LISTADO DE ROBOT DE ACCESO GLOBAL
let listaRobots = [];

$(()=>{
  //MÉTODO jQuery PARA OBTENER LOS DATOS DEL JSON LOCAL DE ROBOT DE FORMA ASÍNCRONAS
  $.getJSON("data/robots.json",(respuesta)=>{
    // GUARDAMOS LA RESPUESTA EN UNA VARIABLE EN EL LISTADO GLOBAL DE ROBOTS
    listaRobots = respuesta ;
    // USAMOS UNA VARIABLE PARA DETERMINAR CUANTOS ELEMENTOS POR "row" DEL GRID VOY A AGREGAR
    let cantxFila   = 4 ;  
    // USAMOS UN FOR PARA ITERAR, INCREMENTANDO LOS INDICES TENIENDO EN CUENTA cantxFila
    for (let index = 0; index < listaRobots.length; index+=cantxFila){
      // CREAMOS EL DIV CON CLASE "row", QUE ES LA FILA DEL GRID
      $("#contenidoGeneradoRobots").append(`<div class="row" id="fila${listaRobots[index].id}"></div><hr>`);
      // LLAMADA A LA FUNCIÓN QUE NOS PERMITE AGREGAR ROBOTS POR FILA
      crearFilaRobot(listaRobots,index,cantxFila);
    }
    //UNA VEZ GENERADO TODOS LOS ROBOT VAMOS A ESCUCHAR EL EVENTO CLICK DE TODOS LOS BOTES CUYOS ID CONTIENE LA SUBCADENA "amigo"
    $('button[id^="amigo"]').click((e) =>{
      //  OBTENEMOS EL ID DEL AMIGO SEPARANDO LA SUBCADENA "amigo" DEL ID, LUEGO CALCULAMOS SU POSICION EN EL ARRAY( YA QUE ESTA ORDENADO POR ID, SI EL ID ES 5 SU POSICION ES 4)
      let indiceAmigo = parseInt(e.target.id.substr(5).toUpperCase()) - 1;
      //  SIMULAMOS UN POST DE LA INFORMACION DEL AMIGO (EMPLEAMOS EL API JSONPLACEHOLDER PARA ENVIAR INFORMACION Y RECIBIR RESPUESTA)
      $.post("https://jsonplaceholder.typicode.com/posts",listaRobots[indiceAmigo],function(data, status){
        // SI LA PETICION SE CUMPLE
        if(status === "success"){
          // CARGAMOS EN EL DOM LA RESPUESTA A LA PETICIÓN POST
          $("#notificacion").html(`<h4>INFORMACION ENVIADA</h4><h6> ID ${data.id} - nombre: ${data.nombre} - nombre: ${data.apellido} </h6>`);
          //MOSTRAMOS LA NUEVA NOTIFICACION CON TOGGLE Y LA OCULTAMOS
          $("#notificacion").toggle("slow").delay(600).toggle("slow");
        }
      });
    });
    // USAMOS LA ANIMACION TOGGLE PARA OCULTAR NOTIFICACIÓN
    $("#notificacion").toggle("slow",()=>{
      //CUANDO NOTIFICACION ESTA OCULTA MOSTRAMOS CON TOGGLE CONTENDOR DE INFORMACION GENERADA
      $("#contenidoGeneradoRobots").toggle("slow");
    });
 });
});
//FUNCIÓN QUE PERMITE CREAR LA FILA DE ROBOTS, CONTROLANDO LOS INDICES DE LA LISTA EN RELACION AL LENGHT
function crearFilaRobot(lista, indiceActual, cantidad){
  for (let index = 0; index < cantidad ; index++) {
    let nuevoIndice = indiceActual + index;
    if( nuevoIndice < lista.length){
      $(`#fila${lista[indiceActual].id}`).append(crearComponenteRobot(lista[nuevoIndice]));
    }
  }
}
//FUNCION QUE DEFINE LA ESTRUCTURA DEL HTML A AGREGAR LA INFORMACION DE UN ROBOT AL DOCUMENTO
function crearComponenteRobot(robot){
  return `<div class="column column-25">
          <img src="${robot.avatar}">
          <div>
            <h4>${robot.nombre}, ${robot.apellido}</h4>
            <h6>${robot.email}</h6>
            <button id="amigo${robot.id}">AGREGA</button>
          </div>
          </div>`;
}


//OTRO CODIGO COMENTADO MOSTRADO EN CLASE
/*
for (let index = 0; index < DATOSROBOTS.length; index+=4){
  $("#contenidoGenerado").append(`<div class="row" id="fila${DATOSROBOTS[index].id}"></div><hr>`);

  $(`#fila${DATOSROBOTS[index].id}`).append(crearComponente(DATOSROBOTS[index]));
  $(`#fila${DATOSROBOTS[index].id}`).append(crearComponente(DATOSROBOTS[index+1]));
  $(`#fila${DATOSROBOTS[index].id}`).append(crearComponente(DATOSROBOTS[index+2]));
  $(`#fila${DATOSROBOTS[index].id}`).append(crearComponente(DATOSROBOTS[index+3]));
}

// OTRAS LLAMADAS ASINCRONAS

// SOLICITUDES AL API JSONPLACEHOLDER
$.get("https://jsonplaceholder.typicode.com/posts",function(data, status){
  alert("DATOS OBTENIDOS")
}); 

$.get("https://jsonplaceholder.typicode.com/posts/1",function(data, status){
  console.log(data);
  console.log(status);
});

$.post("pagina2.html",DATOSROBOTS[40],function(data, status){
  console.log(data);
  console.log(status);
});
*/
