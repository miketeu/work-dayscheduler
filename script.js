//The app should:

//* Display the current day at the top of the calender when a user opens the planner.
//Use UK time and date format.
setInterval(function () {
  $("#currentTime").text(moment().format('LLLL'));
}, 1000);

//End of time display.

// $(element).css("backgroundColor",)