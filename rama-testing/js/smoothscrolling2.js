$("nav").on('click','a',function (event) {
		event.preventDefault();
		var elAttr = $(this).attr('href');
		var resultado;
		if (elAttr == '#inicio') {
			resultado = 0;
		} else {
			resultado = $(elAttr).offset().top;
		}
		$('body,html').animate({
			scrollTop: resultado
		},500);
});