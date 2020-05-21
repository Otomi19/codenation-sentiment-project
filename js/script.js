var text = $("#fun").val();
$("button").click(function(){
fetch("https://sentim-api.herokuapp.com/api/v1/",{
	method: 'POST',
	headers: {
        "Accept": "application/json",
	    "Content-Type": "application/json"
    },
    body: JSON.stringify({
		("text": Text }


.then(function(response) {
  		return response.json();
  	})
.then(function(data) {
      console.log(data);
  	});



});