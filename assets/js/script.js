// displays current date and time pulled from moment.js
var today = moment();
$('#day').text(today.format('[Today is] dddd, MMM Do, YYYY.'));
var time = moment();
$('#time').text(time.format('[Time is] h:mm:ss A.'));

// current time is converted to 24 hour format to be compared to the id of the time block in order for the looped function to determine a background color for each row
function noteBgColor() {
    var currentHour = moment().hours();
    console.log(currentHour);

    $('.note').each(function() {
        var rowHour = parseInt($(this).parent().attr('id'));
        console.log(rowHour);
     
     if (currentHour === rowHour) {
        $(this).addClass('present');
        $(this).css('border-left', '5px solid var(--green');
    } else if (currentHour > rowHour) {
        $(this).addClass('past');
        $(this).css('border-left', '5px solid var(--red');
    } else {
        $(this).addClass('future');
        $(this).css('border-left', '5px solid var(--beige');
    }

    })
}
noteBgColor();

// targets the pathed values needed to be save in local storage upon clicking save button
var saveBtn = $('.saveBtn');
saveBtn.on('click', function() { 
    var time = $(this).parent().parent().attr('id');
    console.log(time);
    var text = $(this).parent().siblings('.note').children('.text').val();
    console.log(text);

    localStorage.setItem(time, text);
})

// retrieves value set in local storage to be placed back into note section that was originally saved in when page is refreshed
$('#9 .text').val(localStorage.getItem('9'));
$('#10 .text').val(localStorage.getItem('10'));
$('#11 .text').val(localStorage.getItem('11'));
$('#12 .text').val(localStorage.getItem('12'));
$('#13 .text').val(localStorage.getItem('13'));
$('#14 .text').val(localStorage.getItem('14'));
$('#15 .text').val(localStorage.getItem('15'));
$('#16 .text').val(localStorage.getItem('16'));
$('#17 .text').val(localStorage.getItem('17'));