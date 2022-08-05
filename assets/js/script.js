var today = moment();
$('#currentDay').text(today.format('[Today is] dddd, LL.'));
$('#currentTime').text(today.format('LT'));




var rootEl = $('#root');
console.log(rootEl);

// schedule btn
var submitBtnEl = $('');
submitBtnEl.on('click', function () {
    submitDisplayEl.text();
});