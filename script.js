//The app should:
$(document).ready(function () {
  //* Display the current day at the top of the calender when a user opens the planner.
  //Use UK time and date format.
  setInterval(function () {
    $("#currentTime").text(moment().format("LLLL"));
  }, 1000);

  //End of time display.

  // Change bg color in relation to time
  // $("textarea").addClass("future")
  // localStorage.setItem("9am", "text here")

  // $("button").on("click", function(event){
  //console.log(event.target)

  //localStorage.setItem("9am", "someTextHere");
  //localStorage.getItem("9am");

  
});