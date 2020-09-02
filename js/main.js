$(document).ready(function () {
	// prevenimos que no nos salga el #en la url
	$('.menu li:has(ul)').click(function (e) {
		e.preventDefault();
		// hacemos un condicional para que si tiene la clase activado ejecutamos nuestro condicional
		if ($(this).hasClass('activado')) {
			$(this).removeClass('activado');
			$(this).children('ul').slideUp(); // estas dos lineas nos hacen que el menu desplegado cuando lo vuelvo a pinchar se recoja 

		} else {
			$('.menu li ul').slideUp();
			$('.menu li').removeClass('activado');
			$(this).addClass('activado');
			$(this).children('ul').slideDown();

		}
	});
	// Vamos a hacer que el boton de meu tenga funcionalidad
	$('.menu-movil').click(function () {
		$('.menu').slideToggle();
	});
	// queremos que por defecto el meu este oculto por lo que hacemos una comprobacion. si en dispositio movil desplegabos menu y lo hacemos mas grande sin este codigo desaparece el menu
	$(window).resize(function () {
		if ($(document).width() > 450) {
			$('.contenedor-menu .menu').css({ 'display': 'block' });
		}
		// hacemos que desaparezca en tamaÃ±o grande
		if ($(document).width() < 450) {
			$('.contenedor-menu .menu').css({ 'display': 'none' });
			$('.menu li ul').slideUp();
			$('.menu li').removeClass('activado');

			// fin
		}
	});
	$('.menu li ul li a').click(function () {
		window.location.href = $(this).attr("href");

	});
});