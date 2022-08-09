var today = moment();
$('#day').text(today.format('[Today is] dddd, MMM Do, YYYY.'));
var time = moment();
$('#time').text(time.format('[Time is] h:mm:ss A.'));

var saveBtn = $('.saveBtn');
saveBtn.on('click', function() { 
    var time = $(this).parent().parent().attr('id');
    console.log(time);
    var task = $(this).parent().siblings('.note').children('.task').val();
    console.log(task);

    localStorage.setItem(time, task);
})

function noteBgColor() {
    var currentHour = moment().hours();
    console.log(currentHour);

    $('.note').each(function() {
        var rowHour = parseInt($(this).parent().attr('id'));
        console.log(rowHour);
        // console.log($(this));
     
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
// setInterval(noteBgColor, 1000);

$('#9 .task').val(localStorage.getItem('9'));
$('#10 .task').val(localStorage.getItem('10'));
$('#11 .task').val(localStorage.getItem('11'));
$('#12 .task').val(localStorage.getItem('12'));
$('#13 .task').val(localStorage.getItem('13'));
$('#14 .task').val(localStorage.getItem('14'));
$('#15 .task').val(localStorage.getItem('15'));
$('#16 .task').val(localStorage.getItem('16'));
$('#17 .task').val(localStorage.getItem('17'));