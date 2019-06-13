//http://www.cplusplus.com/forum/general/55650/

#include<iostream>
#include<fstream>
#include<unistd.h> // sleep(seconds); for unix or linux
using namespace std;

int main()
{
while(true)
{
	string mono;
	fstream first;
	//first.open("one.txt", ios::out | ios::in);
	first.open("frame2/2.1frame", ios::out | ios::in);

	if(first.is_open())
	while(! first.eof())
	{
	getline(first, mono);
	cout << mono << endl;
	}
// NOTE; usleep microseconds 1000000 1+6 zeros for one second
//	sleep(); is only every second (usleep is linux programming)

	usleep(100000);
//======================================================
	string di;
	fstream second;
	second.open("frame2/2.2frame", ios::out | ios::in);

	if(second.is_open())
	while(! second.eof())
	{
	getline(second, di);
	cout << di << endl;
	}
	
	usleep(100000);
//======================================================
	string tri;
	fstream third;
	third.open("frame2/2.3frame", ios::out | ios::in);

	if(third.is_open())
	while(! third.eof())
	{
	getline(third, tri);
	cout << tri << endl;
	}

	usleep(100000);
//======================================================
	string tetra;
	fstream fourth;
	fourth.open("frame2/2.4frame", ios::out | ios::in);

	if(third.is_open())
	while(! third.eof())
	{
	getline(fourth, tetra);
	cout << tetra << endl;
	}
	
	usleep(100000);
}
return 0;
}
