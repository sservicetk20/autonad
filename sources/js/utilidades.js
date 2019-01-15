var global_url = window.location.href;     // Returns full URL
var ancho_vp = window.innerWidth;
var alto_vp = window.innerHeight;


function utilidadesJS() {}

utilidadesJS.orietacionImagenes = function (selector, classHorizontal, classVertical, classCuadrada) {
	// ↓↓ Valores por defecto
	if (classHorizontal == undefined) {classHorizontal = 'imagen_horizontal'}
	if (classVertical == undefined) {classVertical = 'imagen_vertical'}
	if (classCuadrada == undefined) {classCuadrada = 'imagen_cuadrada'}
		// ↑↑ Valores por defecto

	var imagenes = document.querySelectorAll(selector);
	if (imagenes[0].tagName == 'IMG') {
		for (var i = 0; i < imagenes.length; i++) {
			var anchoNatural = imagenes[i].naturalWidth;
			var altoNatural = imagenes[i].naturalHeight;
			if (anchoNatural > altoNatural) {
				imagenes[i].classList.add(classHorizontal);
			} else if(altoNatural > anchoNatural){
				imagenes[i].classList.add(classVertical);
			}
			else{
				imagenes[i].classList.add(classCuadrada);
			}
		}
	}
	else{
		console.log('Ingresa un selector de imagen valido');
	}
}

utilidadesJS.buscarUrl = function (palabra) {
	if (global_url.indexOf(palabra) != -1) {
		return true
	}
}


utilidadesJS.isMobile =function () {
	var retorno;
	if (ancho_vp <= 768) {
		// Movil
		retorno = true
		return retorno
	}
	else{
		// Desktop
		retorno = false
		return retorno
	}
}

utilidadesJS.isTablet =function () {
	var retorno;
	if (ancho_vp <= 992) {
		// Movil
		retorno = true
		return retorno
	}
	else{
		// Desktop
		retorno = false
		return retorno
	}
}