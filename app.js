var five = require("johnny-five")
	, board
	, button
;

board = new five.Board();
	
board.on("ready", function() {
	var led = new five.Led({
		pin: 13
	});
	
	button = new five.Button(8);
	
	board.repl.inject({
		button: button
	});
	
	// "button" pressed down
	button.on("down", function() {
		led.on();
		console.log("down");
	});
	
	// button "hold" for specified time
	// defaults to 500ms
	// set
	button.on("hold", function() {
		console.log("Strobe!!!");
		led.strobe(); //start blinking pin 13 led when button is pushed
	});
	
	// up the button is released
	button.on("up", function() {
		led.off();
		console.log("up")
	});
	
	
});