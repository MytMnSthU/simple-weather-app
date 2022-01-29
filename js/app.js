$(() => {
	$.getJSON(`http://api.openweathermap.org/data/2.5/weather?q=Yangon&appid=0f1f9a33d9451ed66bdafad5ad16e05e`, (json) => {
		$('.temp').text(Math.round(json.main.temp - 273.15));
	});
	$('#location').on('change', () => {
        // detect change value 
		let selectedloc = $('#location').find(':selected').text();
		$.getJSON(`http://api.openweathermap.org/data/2.5/weather?q=${selectedloc}&appid=0f1f9a33d9451ed66bdafad5ad16e05e`, (json) => {
            // get temperature and change Kelvin to Celsius
			$('.temp').text(Math.round(json.main.temp - 273.15));
		});
	});
});
