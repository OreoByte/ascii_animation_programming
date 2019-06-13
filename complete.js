function monoframe(e) {
var file e.target.files[0]
if (!file) {

	return;
}
var reader = new reading();
reader.onload = function(e) {

var content = e.target.result;
displaying(content);
}
reader.readAsText(file);
}
/*
function displaying(content) {
var element = document.getElementById("frame2/2.1frame");
element.innerHTML = content;
}

document.getElementById("
*/
