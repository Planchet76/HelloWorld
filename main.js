function getFilterStatus(){
	fetch('http://restapi.demoqa.com/utilities/weather/city/Dallas')
	.then(
		function(response) {
			if (response.status !== 200) {
				console.log('Looks like there was a problem. Status Code: ' +
				response.status);
				return;
			}

			response.json().then(function(data) {
				console.log(data);
				document.getElementById("id_results").innerHTML = JSON.stringify(data);
			});
		}
	)
	.catch(function(err) {
		console.log('Fetch Error :-S', err);
	});
}

function mainFunction02() {
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
				if (this.readyState == 4) {
						document.getElementById("id_results").innerHTML = this.responseText;
				}
		};
		xhttp.open("GET", "https://pokeapi.co/api/v2/berry/", true);
		xhttp.send();
}

function tstFunction01(){
	document.getElementById("id_results").innerHTML="No soup for you.";
}

function tstFunction02(){
	document.getElementById("id_results").innerHTML="Are you deaf?";
}

function tstFunction03(){
	document.getElementById("id_results").innerHTML="I SAID NO SOUP!";
}
