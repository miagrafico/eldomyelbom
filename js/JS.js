
// variable donde se guardarán los json creados
var estudiantes =[];
/*
Constructor que permite formar objetos JSON
*/
function Estudiante(codigo, nombre, nota){
	this.codigo=codigo;
	this.nombre = nombre;
	this.nota = nota;


}
/*
	Evento listener que permite la creación del json y la inserción a la tabla
*/
 document.getElementById("registro").addEventListener("click", function(){
 	// se atrapan los datos desde la interfaz
	var codigo = document.getElementById("codigo").value;
	var nombre = document.getElementById("nombre").value;
	var nota = parseInt(document.getElementById("nota").value);

	// se valida que la nota sea una numero
	if (isNaN(nota)){
		alert("La nota debe ser un número");
		return;
	}
	else{
		//se crea el json
		var nuevoEstudiante = new Estudiante(codigo, nombre, nota);
		//se agrega a la variable el json creado
		if (guardarJSON(nuevoEstudiante)==false){
			return;
		}
		var  tabla = document.getElementById("myTable"); // se obtiene la tabla mediante el id
		var i;
		var filaFinal;
		var fila;

		filaFinal = tabla.rows.length; // se obtiene el total de filas de la tabla
		fila = tabla.insertRow(filaFinal); // se crea la fila nueva en la tabla

		// ahora se crearán las celdas
		var celda0 = fila.insertCell(0);
		var celda1 = fila.insertCell(1);
		var celda2 = fila.insertCell(2);

		// se asignan los datos a las celdas
		celda0.innerHTML = nuevoEstudiante.codigo;
		celda1.innerHTML = nuevoEstudiante.nombre;
		celda2.innerHTML = nuevoEstudiante.nota;
		// limpiar los campos
		document.getElementById("codigo").value = "";
		document.getElementById("nombre").value = "";
		document.getElementById("nota").value = "";
	}
	});


/*
	Funcion que permite guardar un json al arreglo
*/


 function guardarJSON(json){
 	for (i=0; i< estudiantes.length; i++){ // ciclo para recorrer el JSON
		if (estudiantes[i].codigo == json.codigo){
			alert("No pueden haber dos estudiantes con el mismo código");
			return false;
		}
	}
 	estudiantes[estudiantes.length] = json;
 	return true;

 }


 /**/

 function mostrarDatos(json){
    var out="";

    for (var i = 0; i < json.length; i++) {
      out+="Nombre: "+json[i].nombre+" - "+"Codigo: "+json[i].codigo+ " - " +"Nota: "+json[i].nota+" <br> ";
    }
    alert("Estos son los estudiantes registrados: "+out);
 };

 //Mostrar cual es el promedio en notas.

 function notaPromedio(json){
 var outPrueba="--------------Promedio Notas-------------- <br>";
 var notasPrueba=0;

 for (var i = 0; i < json.length; i++) {
 var notasPrueba=json[i].nota+notasPrueba;
 }
 var promedio=notasPrueba/json.length;
 var resultado=promedio;
 outPrueba+= "Promedio de notas: " + resultado+"";
 alert("Estos son los estudiantes registrados: "+outPrueba);
 };

 //mostrar cual es la nota mayor.

 function notaMayor(json) {
             var out = "";
             var notaMayor = json[0].nota;
             var pos = 0;
             var aux = "";
             for (i = 0; i < json.length; i++) {

                 if (json[i].nota >= 5) {
                     notaMayor = json[i].nota;
                     pos = i;
                     aux=aux+json[pos].nombre;
                 }
             }
             alert("Las personas con nota mayor son: "+out+ aux);
 };

 //mostrar cuales son los estudiantes con la nota menor.
 function notaMenor(json) {
             var out = "-----------Nota Menor-----------<br>";
             var notaMenor = json[0].nota;
             var pos = 0;
             var aux = "";
             for (i = 0; i < json.length; i++) {

                 if (json[i].nota <= 4 ) {
                     notaMenor = json[i].nota;
                     pos = i;
                     aux=aux+json[pos].nombre+"<br>";
                 }
             }
             alert("Las personas con nota menor son: "+out+ aux);
 };


 /*---------------------------------*/
