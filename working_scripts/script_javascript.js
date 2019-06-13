while(true) {

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e6; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

var fs = require('fs');

try {
var data = fs.readFileSync("frame2/2.1frame", "utf8");
//	console.log(new Date());
	console.log(data);
	sleep(750);
//	console.log(new Date());
}
	catch(e)
{
	console.log('Error:', e.stack);
}
//======================================================
var fs = require('fs');
try {
var data = fs.readFileSync("frame2/2.2frame", "utf8");
	console.log(data);
	sleep(750);
}
    catch(e)
{
    console.log('Error:', e.stack);
}
//======================================================
var fs = require('fs');

try {
var data = fs.readFileSync("frame2/2.3frame", "utf8");
	console.log(data);
	sleep(750);
}
    catch(e)
{
    console.log('Error:', e.stack);
}
//======================================================
var fs = require('fs');

try {
var data = fs.readFileSync("frame2/2.4frame", "utf8");
	console.log(data);
	sleep(750);
}
    catch(e)
{
    console.log('Error:', e.stack);
}
}
