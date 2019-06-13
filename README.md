# List of all the working files and how to run them on Linux
	all working files will be placed in the working_scripts directory

# programming python (interpreted language)
	python3 run
	apt install python-pip or python3-pip

	working file:
	python3 ascii_motion_loop.py

# programming java (compiled language)
	apt-cache search openjdk-9
	or install default-jdk (install compile tools)

	javac program.java (compile code)
	java program.class (run program)

	working file;
	javac done_java.java
	java done_java.class

# c++ programming (compiled language)
	g++ file.cpp -o output
	./output 
		(may require chmod +x output-name)
		gcc for C programming

	working file;
	g++ cmove.cpp -o mover_c
	./mover_c

# Node.js or just JS (interpreted language)
	node node.js
	node -i (interactive mode)
		.exit or ctrl+c to exit inter mode
	
	working file;
		js script_javascript.js
	or	node script_javascript.js

# php (interpreted language)
	apt install php5-cli
	yum install php-cli centos and so on
		other php with 
	php file.php
	php5 file.php
or
	php -a (interactive mode, noice)

	working file;
	php sug_two.php

# NOTE;
	may have to recompile for the executeable to work on your system
	Was developed on Debian 9
