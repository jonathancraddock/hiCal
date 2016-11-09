$(document).ready( function() {

	// User Variables
	var userMonth = new Date().getMonth()+1;
	var userYear = new Date().getFullYear();

  // Create the calendar using supplied month and year
	drawCalendar(userMonth,userYear);

  // Navigate by month
	$("#calNext").click(nextMonth);
	$("#calPrev").click(prevMonth);

} );

function drawCalendar(calMonth,calYear) {

	var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
	var weekdays = [7,1,2,3,4,5,6];

	var d = new Date(calYear,calMonth-1,1); // weekday on 1st of the month
	var e = new Date(calYear,calMonth,0); // number of days in the month
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
	userMonth = calMonth;
	userYear = calYear;

};

function nextMonth() {
	if ( userMonth < 12 )
		{ userMonth++; } else
		{ userYear++; userMonth=1; };
	drawCalendar(userMonth,userYear);
};

function prevMonth() {
	if ( userMonth > 1 )
		{ userMonth--; } else
		{ userYear--; userMonth=12; };
	drawCalendar(userMonth,userYear);
};
