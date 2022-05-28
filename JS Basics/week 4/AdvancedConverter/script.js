(function(){
        let convertType = "miles";
		const heading = document.querySelector('h1');
		const intro = document.querySelector('p');
		const ansdiv = document.getElementById('answer');
		const form = document.getElementById('convert');
		document.addEventListener('keydown', function(event){
			let key = event.code;
			if (key === "KeyK"){
				convertType = "kilometer";
				heading.innerHTML = "Kilometers to Miles Converter";
				intro.innerHTML = "Type in a number of kilometers and click the button to convert the distance to miles.";
			}
			else if (key === "KeyM"){
				convertType = "miles";
				heading.innerHTML = "Miles to Kilometers Converter";
				intro.innerHTML = "Type in a number of miles and click the button to convert the distance to kilometers.";
			}
			
		});
		
		form.addEventListener('submit', function(event){
			event.preventDefault();
			const distance = parseFloat(document.getElementById('distance').value);
			let converted;
			if(distance){
				if(convertType =="miles"){
					converted = (distance * 1.60934).toFixed(2);
					ansdiv.innerHTML = `<h2>${distance} Miles is ${converted} Kilometer</h2>`;
				}
				else if(convertType == "kilometer"){
					converted = (distance / 1.60934).toFixed(2);
					ansdiv.innerHTML = `<h2>${distance} Kilometer is ${converted} Miles</h2>`;
				}

			}
			else{
				ansdiv.innerHTML = "<h2>Error please provide a number</h2>";
			}
		});
})();