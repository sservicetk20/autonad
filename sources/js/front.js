
window.onbeforeunload = resetApp;

window.onload = function() {
	removeLoading();
	activateAnimate();
	parallax_page();
	paginador();
};

$(document).ready(function() {
	menuHamburguesa();
	carrusel();
	carrusel_interna();
	popUpMasRecetas();
	LeerMasUbicacion();
	LeerMasModelo();
});


function menuHamburguesa() {
	$('.hamburger-menu').on('click', function() {
		$('.bar').toggleClass('animate');

		$('.singleHeader__links, .singleHeader__redes').toggleClass('active');
	})
}

function resetApp(){
	// window.scrollTo(0, 0);
	$('body').addClass('loading');
}

function paginador() {

	if (utilidadesJS.buscarUrl('/page/')) {
		slideTo('#seccionCatalogo');
	}

	var cantidadColores = $('.catalogo__paginador--container a').length;

	var base = new KolorWheel('f1bf0e');
	var target = base.abs("#c66713",cantidadColores);


	for (var i = 0; i < cantidadColores; i++) {
		// console.log(target.get(i).getHex());
		var colorGenerado = target.get(i).getHex();
		$('.catalogo__paginador--container a').eq(i).css('background-color', colorGenerado);
	}

}

function removeLoading() {
	// $('body').removeClass('loading');
	$('.loader-wrap').addClass('animated fadeOut');
	$('.loader-wrap').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
		$('body').removeClass('loading');
		$('.loader-wrap').removeClass('animated fadeOut');
	});

	var animateElements = $('[data-animate]');
	setTimeout(function(){
		animateElements.each(function(index, el) {
			var animationName = $(this).attr('data-animate');
			animateElements.removeClass(animationName);
		});
	}, 1000);
}

function carrusel() {
	$("#carrusel").owlCarousel({
		items:1,
    	margin:10,
		autoHeight:true,
		nav: true,
		//navElement: true,
		navText: [
			"<i class='fa fa-caret-left'></i>",
			"<i class='fa fa-caret-right'></i>"
		],
		autoplay: true,
		autoplayHoverPause: true
	});
}

function carrusel_interna(){
	$('#carousel-interna').owlCarousel({
		items:1,
		//loop:false,
		//center:true,
		margin:10,
		autoHeight:true,
		URLhashListener:true,
		//autoplayHoverPause:true,
		//startPosition: 'URLHash'
	});
}

function parallax_page() {
	var rellax = new Rellax('.rellax', {
		callback: function(positions) {
			// console.log(positions);
		}
	});
}

function activateAnimate() {
	var animateElements = $('[data-animate]');
	animateElements.each(function(index, el) {
		var animationName = $(this).attr('data-animate');
		$(this).addClass('animated ' + animationName);
	});
}

function slideTo(elemento) {
	$('html, body').animate({
		scrollTop: $(elemento).offset().top
	}, 700);
}

function popUpMasRecetas() {
	var popUp = $('.catalogo--recetas.popUpActive');
	popUp.on('tap', function() {
		$(this).removeClass('popUpActive');
		localStorage.setItem("PopUpentendido", true);
	});
	var estadoPopUp = localStorage.getItem("PopUpentendido");
	if (estadoPopUp) {
		popUp.removeClass('popUpActive')
	}
}

function LeerMasUbicacion() {
	$('.leer-mas-ubicacion').click(function(){
		var $this = $(this);
		$this.toggleClass('leer-mas-ubicacion');
		if($this.hasClass('leer-mas-ubicacion')){
			$this.text('LEER MÁS');
			$( ".vermas_ubicacion" ).removeClass( "vermas_abrir_ubicacion" ).addClass( "is-hidden" );
		} else {
			$this.text('LEER MENOS');
			$( ".vermas_ubicacion" ).removeClass( "is-hidden" ).addClass( "vermas_abrir_ubicacion" );	
		}
	});
}//LEER MAS

function LeerMasModelo() {
	$('.leer-mas-modelo').click(function(){
		var $this = $(this);
		$this.toggleClass('leer-mas-modelo');
		if($this.hasClass('leer-mas-modelo')){
			$this.text('LEER MÁS');
			$( ".vermas_modelo" ).removeClass( "vermas_abrir_modelo" ).addClass( "is-hidden" );
		} else {
			$this.text('LEER MENOS');
			$( ".vermas_modelo" ).removeClass( "is-hidden" ).addClass( "vermas_abrir_modelo" );	
		}
	});
}//LEER MAS
