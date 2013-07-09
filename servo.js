var five = require("johnny-five")
	, board
	, servo
;

board =  new five.Board();

board.on("ready", function() {
	
	five.Servo({
		pin: 9,
		// Limit this servo to 170º
		range: [ 0, 145],
		startAt: 0
	});
	
	five.Servo(10);
	
	servo = new five.Servos();
	
	// You can add any objects to the boards REPL,
	// Let's add the servo here, so we can control
	// it directly from the REPL
	board.repl.inject({
		servo: servo
	});
	
	//
	//
	servo.max();
});