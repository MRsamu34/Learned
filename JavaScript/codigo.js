'use strict';

var edad = 20;
var texto = '';

switch (edad) {
	case 18:
		texto = 'No tienes 18 años';
		break;

	case 19:
		texto = 'Eres mayor de edad'; 
		break;

	default:
		texto = 'No tienes EDAD??';
}
console.log(texto);
