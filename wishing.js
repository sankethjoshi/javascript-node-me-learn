var date = new Date()
var hour = date.getHours()
var wish;
if (hour < 12){
    wish = "good morning!!";
}
else if (hour < 16){
    wish = "good afternoon!!";
}
else if (hour < 21){
    wish = "good evening!!";
}
else {
    wish = "good night!!";
}
console.log(wish)
// window.open("www.wikipedia.org");
// var opn = require('opn');
// opn("www.wikipedia.org");
