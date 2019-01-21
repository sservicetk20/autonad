
window.onload = function() {
	removeLoading();
	activateAnimate();
	parallax_page();
};

$(document).ready(function() {
	menuHamburguesa();
	menuFiltro();
	LeerMasUbicacion();
	//HeaderFiltro();
	LeerMasModelo();
	Modal();
	ModalMobile();
	carrusel();
	carrusel_interna();
	carrusel_destacados();
});


function menuHamburguesa() {
	$('.hamburger-menu').on('click', function() {
		$('.bar').toggleClass('animate');

		$('.singleHeader__links, .singleHeader__redes').toggleClass('active');
	})
}

function menuFiltro() {
	$('.hamburger-filtro').on('click', function() {
		$('.bar-filtro').toggleClass('animate');

		$('.singlefiltro__links').toggleClass('active');
	})
}

/* function HeaderFiltro(){
	let dropdown = document.querySelector('.dropdown');
		dropdown.addEventListener('click', function(event) {
			event.stopPropagation();
			dropdown.classList.toggle('is-active');
		});
} */


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
		//nav: true,
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

function carrusel_destacados(){
	$('#carousel-destacados').owlCarousel({
		loop:true,
		margin:10,
		//nav:true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:3
			},
			1000:{
				items:5
			}
		}
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

function Modal() {
	$("#showModal").click(function() {
		$(".modal").addClass("is-active");  
	  });
	  
	  $(".modal-close").click(function() {
		 $(".modal").removeClass("is-active");
	  });	
}

function ModalMobile() {
	$("#showModal-mobile").click(function() {
		$(".modal").addClass("is-active");  
	  });
	  
	  $(".modal-close").click(function() {
		 $(".modal").removeClass("is-active");
	  });	
}

