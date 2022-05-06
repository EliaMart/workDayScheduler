var dayDisplay = $('#currentDay');
var timeEl = $('#time');
var saveBtnEl = $('#saveBtn');

$(document).ready(function(){
$('.saveBtn').on('click', function() {
    var value = $(this)
    .siblings('.description').val();
    var time = $(this)
    .parent()
    .attr('id')

    localStorage.setItem(time, value);
})

}); 


$('#hour-8 .description').val(localStorage.getItem("hour-8"));
$('#hour-9 .description').val(localStorage.getItem("hour-9"));
$('#hour-10 .description').val(localStorage.getItem("hour-10"));
$('#hour-11 .description').val(localStorage.getItem("hour-11"));
$('#hour-12 .description').val(localStorage.getItem("hour-12"));
$('#hour-1 .description').val(localStorage.getItem("hour-1"));
$('#hour-2 .description').val(localStorage.getItem("hour-2"));
$('#hour-3 .description').val(localStorage.getItem("hour-3"));
$('#hour-4 .description').val(localStorage.getItem("hour-4"));
$('#hour-5 .description').val(localStorage.getItem("hour-5"));



function displayDay() {
    var today = moment().format('dddd,  MMM Do');
    dayDisplay.text(today);
}

setInterval(displayDay, 1000);