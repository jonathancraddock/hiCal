$(document).ready( function() {

	// User Variables
	var userMonth = 9;
	var userYear = 2016;

  // Test calendar layout with a 31 day month
	drawCalendar(userMonth,userYear);

} );

function drawCalendar(calMonth,calYear) {

	var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
	var weekdays = [7,1,2,3,4,5,6];

	var d = new Date(calYear,calMonth-1,1);
	var e = new Date(calYear,calMonth,0);
	var startDay = weekdays[d.getDay()];
	var daysInMonth = e.getDate();

	var dayNum = (startDay*-1)+2;
	var displayNum = 0;

		for (o = 1; o < 7; o++) {
			for (i = 1; i < 8; i++) {
				if ( dayNum<1 | dayNum>daysInMonth ) { displayNum="" } else { displayNum = dayNum };
				$(".cal-row-"+o+" li:nth-child("+i+")").html(displayNum);
				dayNum++;
			};
		};

	$("#month-year").html(months[calMonth-1]+", "+calYear);

};
