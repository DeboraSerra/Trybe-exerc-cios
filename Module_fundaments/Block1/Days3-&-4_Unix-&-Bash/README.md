# Exercises Block 1 - Days 3 & 4 - Unix & Bash

On days 3 and 4, we were taugth a few commands to be used on Linux terminal, in order to make the work faster.

In this directory you will find the files poduced with the exercises bellow and in directory Day1-3_exercises-resolutions are the codes I used.

### Day 1-4 - Unix & Bash - Part 2

On this day we learned other Linux commands, like Input and Outputz command , change files and directories permitions and access active processes, put them to run on background, pause them, resume and finish them.

The exercises were divided in four parts:

#### Part I - Input & Output commands

1. Go to the _unix-tests_ directory;

2. Create a text file through the terminal named _skills2.txt_ and add the values Internet, Unix and Bash, one for each line.

3. Add 5 more items to your skills' list and then show it sorted on the terminal. 🤓

4. Count how many lines there are in the file _skills2.txt_.

5. Create a file called _top-skills.txt_ using the _skills2.txt_ file, containing the first 3 skills in alphabetic order.

6. Create a new file called _phrases2.txt_ through the terminal and add a few phrases at your choice.

7. Count the number of lines that have the letters 'br'.

8. Count the number of lines that doesn't have the letter 'br'.

9. Add two country names at the end of the file _phrases2.txt_.

10. Create a new file called _bunch-of-things.txt_ with the content of the files _phrases2.txt_ and _countries.txt_.

11. Sort the file _bunch-of-things.txt_.


#### Part II - Permitions

1. Go to the directory _unix-tests_;

2. Use the command `ls -l` and see the permitions of the files;

3. Change the permition of the file _bunch-of-things.txt_ so all the users will have access to reading and writing, and check it using the command `ls -l`;

4. Expected result:
	>-rw-rw-rw- 1 ana ana 1860 ago 13 11:39 bunch_of_things.txt

5. Remove the writing permition of the file _bunch-of-things.txt_ to all the users, check it using the command `ls -l`;

6. Expected result:
	>-r--r--r-- 1 ana ana 1860 ago 13 11:39 bunch-of-things.txt

7. Give back the permitions on file _bunch-of-things.txt_ to what it was before using the command `chmod 644 bunch-of-things.txt`.

8. Expected result:
	>-rw-r--r-- 1 ana ana 1860 ago 13 11:39 bunch-of-things.txt


#### Part III - Processes & Jobs

1. List all the processes;

2. Now use the command `sleep 30 &`;

3. Use the processes listing to find the PID of the process executed by the command `sleep 30` and finish your execution ~~(kill the process)~~;

4. Execute again the command `sleep 30`, but now without the &. Then, make continue to execute on the background;

5. Create a process on the background that run the command `sleep` for 300 seconds.

6. Create two more processes that run the command `sleep` for 200 and 100 seconds.
	>You must create them on the foreground (without using th &) en stop them (using crtl+Z) after each one start executing.

7. Verify that only the process `sleep 300` is in execution with the command `jobs`. Stop its execution.
	>You will have to bring the process to the foreground (`fg`) and stop it (`ctrl+z`), or send a signal.

8. Resume the execution of the process `sleep 100` on the backgorund using the command `bg`.

9. Finish the execution of all the sleep processes ~~(kill the processes)~~.


#### (Bonus) - Part IV - The terminal awakening

And to finish with the energy ~óh~, way up high, what about learn some fun command on Unix? ☝ 🎊

1. If you use Linux, open the terminal and execute the command `sudo apt-get install cmatrix`[...]. After that, execute the command `cmatrix`. When you are feeling like Neo, press ctrl+C to go back to the terminal;

2. On Linux system, execute the command `sudo apt-get install fortune`[...], and after the instalation, create a text file called _fortune.txt_ that contains your fortune of the day. Use only one line of command. Hint: use the command `fortune`, and the operator `>`;

3. Count how many words your fortune of the day have. Hint: use the command `wc`;

4. Execute the command `sudo apt-get install sl` on a Linux terminal[...]. After that, execute the command `sl`. Now try `sl -F`;

5. On a Linux system, execute the command `sudo apt-get install cowsay`[...]. After that, execute the command `cowsay` and something you want it to say. Now make the cow say the frase you recorded in your file _fortune.txt_;

6. Discover the prime factors using the command `factor` and the number _42_;

7. See how your fortune looks like backwards. Hint: use the command `rev`.

8. Execute the command `telnet towel.blinkenlights.nl` and wait a few seconds. Remember you have more exercises to do! 😅
