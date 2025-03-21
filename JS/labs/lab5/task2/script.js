
var _name = prompt('enter your name: ');
var tel = prompt('enter your phone number: ');
var mobile = prompt('enter your mobile number: ');
var email = prompt('enter your email address: ');
var _color = prompt('enter color format "red , green or blue"');
var myDate = new Date();

document.write('<h2>entering user info </h2> <hr style="border-top: 3px solid"> ');
document.write('Welcome dear guest '.fontcolor(_color)+ _name + "<br>");
document.write('Your telephone number is '.fontcolor(_color) + tel + "<br>");
document.write('Your mobile number is '.fontcolor(_color)+ mobile + "<br>");
document.write('Your email address is '.fontcolor(_color) + email + "<br>");
document.write('<div style="width: 100px; height: 200px"></div>');
document.write('today is '.fontcolor(_color)+  myDate.toDateString());


