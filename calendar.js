$(document).ready( function() {

	// User Variables
	var startDay = 7;


	// System
	var dayNum 			= (startDay*-1)+2;
	var displayNum 	= 0;
	var dayMonth 		= 31;


  // Test calendar layout with a 31 day month
	for (o = 1; o < 7; o++) {
		for (i = 1; i < 8; i++) {
			if ( dayNum<1 | dayNum>dayMonth ) { displayNum="" } else { displayNum = dayNum };
			$(".cal-row-"+o+" li:nth-child("+i+")").html(displayNum);
			dayNum++;
		};
	};


} );
