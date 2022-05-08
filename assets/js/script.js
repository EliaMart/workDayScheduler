var dayDisplay = $('#currentDay');
var saveBtnEl = $('#saveBtn');
var hourEl = $(".hour");


// function that saves text in local storage when button is clicked
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

// how to GET values out of local storage 
$('#hour-8 .description').val(localStorage.getItem("hour-8"));
$('#hour-9 .description').val(localStorage.getItem("hour-9"));
$('#hour-10 .description').val(localStorage.getItem("hour-10"));
$('#hour-11 .description').val(localStorage.getItem("hour-11"));
$('#hour-12 .description').val(localStorage.getItem("hour-12"));
$('#hour-13 .description').val(localStorage.getItem("hour-13"));
$('#hour-14 .description').val(localStorage.getItem("hour-14"));
$('#hour-15 .description').val(localStorage.getItem("hour-15"));
$('#hour-16 .description').val(localStorage.getItem("hour-16"));
$('#hour-17 .description').val(localStorage.getItem("hour-17"));

// function that identifies the current time, matches it with the time in the row and colors the text area. 
var colorTime = function () {
    var currentHour = moment().hour();
    var rowList = $(".row");
    for (var row of rowList) {
        var id = row.id.split("-")[1];
        if (currentHour > id) {
            var childNodes = row.childNodes;
            for (var childNode of childNodes) {
                if (childNode.localName == 'textarea') {
                    childNode.classList.add('past');
                }
            }
        } else if (currentHour == id) {
            var childNodes = row.childNodes;
            for (var childNode of childNodes) {
                if (childNode.localName == 'textarea') {
                    childNode.classList.add('present');
                }
            }
        } else {
            var childNodes = row.childNodes;
            for (var childNode of childNodes) {
                if (childNode.localName == 'textarea') {
                    childNode.classList.add('future');
                }
            }
        }
     }
};




colorTime();


// function that displays the time at the top
function displayDay() {
    var today = moment().format('dddd,  MMM Do');
    dayDisplay.text(today);
}

setInterval(displayDay, 1000);