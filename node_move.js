/*
function PrintAll() {
	var frames = ["frame2/2.1frame", "frame2/2.2frame"];
	for (var i = 0; i < frames.length; i++) {
	var oWindow = window.open(frames[i], "print");
	oWindow.print();
	oWindow.close();
	}
}
*/
var fs = require('fs');

try {
var data = fs.readFileSync("frame2/2.1frame", "utf8");
	console.log(data);
	.on('close", function(data) {});
}
	catch(e)
{
	console.log('Error:', e.stack);
}
//-------------------------------------------------------
var fs = require('fs');

try {
var data = fs.readFileSync("frame2/2.2frame", "utf8");
	console.log(data);
}
	catch(e)
{
	console.log('Error:', e.stack);
}
//------------------------------------------------------
var fs = require('fs');
try {
var frame = fs.readFileSync("frame2/2.3frame", "utf8");
	console.log(frame);
}
	catch(e)
{
	console.log('error:', e.stack);
}

var
