<?php
// comments are the same as in c++
# also python single line comments

/*
$color = "green";
print "<br>";
print "hello world\n $colo";
*/

while(True) {

$frame1 = fopen("frame2/2.1frame", "r") or die("can't open file!");
echo fread($frame1, filesize("frame2/2.1frame"));
fclose($frame1);

usleep(85000);

$frame2 = fopen("frame2/2.2frame", "r") or die("error");
echo fread($frame2, filesize("frame2/2.2frame"));
fclose($frame2);

usleep(85000);

$frame3 = fopen("frame2/2.3frame", "r") or die("error");
echo fread($frame3, filesize("frame2/2.3frame"));
fclose($frame3);

usleep(85000);

$frame4 = fopen("frame2/2.4frame", "r") or die("error");
echo fread($frame4, filesize("frame2/2.4frame"));
fclose($frame4);

usleep(85000);
}
?>
