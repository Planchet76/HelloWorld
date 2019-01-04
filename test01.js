function getIPFilterStatus(){
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

function addIPFilter() {
	fetch('http://restapi.demoqa.com/customer/register', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
		},
		body: myUser
	})
}
