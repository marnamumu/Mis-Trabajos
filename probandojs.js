/* Strings*/
var cadena = "Hola Mundo";

/* Propiedades
variable -> Devuelve la longitud de la cadena*/

/*console.log(cadena.length);*/
/* Length = (Largo, longitud)= Cuenta todos los espacios, para el ejemplo de Hola Mundo*/

/*var cadenaMayus = cadena.toUpperCase();
console.log(cadena.toUpperCase());
console.log(cadenaMayus);*/
/* toUpperCase devuelve las palabras en mayúsculas y no altera la cadena original*/
/* Dos formas de poner en mayusculas*/

/* toLowerCase()  -> Devuelve la cadena a minúsculas*/
/*console.log(cadena.toLowerCase());*/

/* indexOf(sting) -> Devuelve la posición en la que se encuentra el String,
si no lo encuentra devuelve -1    indexOf devuelve la primera coincidencia*/
/*console.log(cadena.indexOf("Hola"));*/
/* Me a dado como resultado 0 (cero), y eso significa que me entrega la ubicación de la 
primera letra de la palabra buscada (posición Cero)*/
/*console.log(cadena.indexOf("o"));*/
/* Si buscamos la letra o, nos devuelve como resultado el 1, que significa la ubicación de la 
primera letra o en la oración Hola Mundo y su ubicación es 1 */
console.log(cadena.indexOf("n"));
/* Si buscamos la letra n, nos devuelve como resultado el 7, que representa la ubicación de la primera 
y única letra n en la oración Hola Mundo y su ubicación es 7.

/* replace(valor a buscar, valor nuevo)-> 