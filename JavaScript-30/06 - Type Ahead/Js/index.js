~(function() {
    
	// const citysJsonUrl =
	// 		'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json',
	// 	cities = [];
	// fetch(citysJsonUrl).then((blob) => blob.json()).then((data) => cities.push(...data));

	let xhr = new XMLHttpRequest();
	xhr.open('get', citysJsonUrl);
	xhr.responseType = 'json';
	xhr.send();
	xhr.onload = function() {
		if (xhr.status === 200) {
			console.log(xhr);
			console.log(xhr.response);
		}
	};

	xhr.onprogress = function(event) {
		console.log(`Received ${event.loaded} of ${event.total}`);
	};
})();
