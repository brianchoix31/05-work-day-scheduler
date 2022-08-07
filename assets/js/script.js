var day = moment();
$('#day').text(day.format('[Today is] dddd, MMM do, YYYY.'));
var time = moment();
$('#time').text(time.format('h:mm A'));

var rowHour = $('.row').val('id');
console.log(rowHour);
var currentHour = day.format('h');
console.log(currentHour);

if (currentHour > rowHour) {
    $('.row').addClass('past');
    $('.hour').css('border-right', '3px solid var(--red');
} else if (currentHour === rowHour) {
    $('.row').addClass('present');
    $('.hour').css('border-right', '3px solid var(--yellow');
} else {
    $('.row').addClass('future')
    $('.hour').css('border-right', '3px solid white');
}






// var submitBtnEl = $('');
// submitBtnEl.on('click', function () {
//     submitDisplayEl.text();
// });