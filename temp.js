var five = require("johnny-five")

;

board = new five.Board();

board.on("ready", function() {
	var sensor = new five.Sensor("A0");
	
	sensor.on("read", function(){
		var celsius = -(100 * (this.value / 1000) - 50);
		var fahrenheit = celsius * (9/5) + 32;
		
		console.log(celsius + "C", fahrenheit + "F");
	});
});
