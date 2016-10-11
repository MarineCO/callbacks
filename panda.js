(function main(){

	function iLove(arg, tendance){
		if (tendance === 'amour'){
			alert("J'aime les pandas " + arg);
		}	else if (tendance === 'haine') {
			alert('Je hais les pandas ' + arg + ', c\'est pour ça que je n\'ouvre jamais la console dev');
		} 	else {
			alert('what ?!');
		}
	}

	$("button").click(function(){
		var pandaType = $(this).data('type');
		var tendance = $(this).data('tendance');
		console.log(pandaType)
		iLove(pandaType, tendance);
	});

	$("#button2").click(function(){
		iLove('roux');
	});

	function iHate(arg1){
		alert("Je n'aime pas les " + arg1);
	}

	$('#button3').click(function(){
		iHate('pandas');
	});

	$('#button4').click(function(){
		iHate('girafes');
	});
});