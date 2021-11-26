# Day 2-1 - Git and GitHub - What it is and what it's for

On this day I learned the definitions and functions of Git and GitHub. I also learned how to start a Git in the local repository on Linux and how to create a remote repository on GitHub, how to set an SSH key so I can make changes to the repository, among other things.

The proposed exercises are listed below.

### Part I - Installation and Configuration

Let's start by installing and configuring the *** Git ***.

Follow the step-by-step instructions to get *** Git *** ready in your environment.

#### Installation

##### Linux

To install *** Git *** open your terminal and type the following command:

`sudo apt-get install git-all`

[...]

#### Configuration

Git comes with a tool called `git config` that allows you to give conguration variables that control how ***Git*** shows and operate.

##### Identity

The first step is to configurate your identity, your name, your e-mail, this is important because each commit use this information, and it is recorded in every commit that you create. To configurate this, use the command below on your terminal:

>The e-mail you use here need to be the same you will use to create your account on GitHub.

	`git config --global user.name "Seu nome"`
	`git config --global user.email seuemail@exemplo.br`

##### Editor

Another cool configuration to do is to stablish the editor where you can open the ***Git*** configuration file, _.gitconfig_, it's easier to see and add other configurations you find necessary. For that use the following command on you terminal:

	`git config --global core.editor "code --wait"`

>This command defines the editor of the _.gitconfig_ file as the _VS Code_, that is the editor you will use during the course. In case you want to open the configuration file on _VS Code_ you just have to execute on the terminal the command below.
>For that make sure you are on the directory were the _.gitconfig_ is located.

	`code .gitconfig`

##### Verifying the instalation and configuration

Now that you configurated everything, let's check to see it is all right! 😉

On the terminal:

  -Type `git --version` to know wich version of git is installed.

  >On you terminal must apear something like:
	>`git version 2.x.y`

  -Type `git config --list`
  >You terminal must show something like this:
	>`user.email=youremail@gmail.com`
	>`user.name=yournome`

Your e-mail must be the same one you used to register on ***GitHub***.

That's it, now that everything is ok, let's go to the next step.

### Part II - Create your _GitHub_ account

### Part III - Adding a SSH key on your _GitHub_ account

On this step, we'ra going to add a SSH key to your ***GitHub*** account, that will allow you to make _pushes_ and _pulls_ without the need to type you user and password all the time, ass explained before. It's really important that you follow **ALL** the steps below, that is the only way you will have the expected results.

##### Generating an SSH key

Open your terminal and type the command bellow. It creates a new SSH key, using your e-mail as label.
>Your e-mail must be the same one you used to create your GitHub account.

	`ssh-keygen -t rsa -b 4096 -C "seuemail@gmail.com"`

	`Enter a file in which to save the key (/home/you/.ssh/id_rsa): [Press enter]`

Now you have to type a secure password.

	`Enter passphrase (empty for no passphrase): [Type a passphrase]`
	`Enter same passphrase again: [Type passphrase again]`

##### Adding your SSH key to the ssh-agent

First you have to initiate the `ssh-agent` on the background:

	`eval "$(ssh-agent -s)"`

Now you must add your private SSH key to the `ssh-agent` using the command bellow on the terminal:

	`ssh-add ~/.ssh/id_rsa`

##### Adding the SSH key to your GitHub Account

First you will have to copy your public SSH key.[...]

	`cat ~/.ssh/id_rsa.pub`

Enter your ***GitHub*** account and follow the steps bellow:

  - On the upper rigth corner on ***GitHub***, click on your profile photo and go to **Settings**;

  - on the left side bar, click on **SSH and GPG keys**;

  - Click on **New SSH key** or **Add SSH key**;

  - On _Título_, add a description to your new key;

  - Paste your key on the area assigned _Key_;

  - Click on **Add SSH key**;

[...]

### Part IV - Your _GitHub_ repository

That is it! Now that you can manage your codes localy and also send them to your ***GitHub***, its time to put the house in order!

[...]

Now lets transform your diretory in a repository ***Git***:

  - Return to the exercise root directory;

  - Initialize the repository with `git init`;

  - Create a _README_ file using the command `touch README.md`;

  - Create an `initial commit` using:

    ```
    git add .
    git commit -m "Initial commit"
    ```

  - Go to your GitHub and create a public repository, where you will store all the exercises you will make during the course;

    - Give it a descriptive name, for example _trybe-exercises_;

    - ⚠️ Remember not to initialize the repository with a _README.md_ file, since you already created one o previous step! 😉

  - Click on **SSH** and copy the _URL_ of the repository;

    - Execute the command to add a _URL_ to the local repository using `git remote add origin "URL"`;

  - Verify if it's every thing alrigth with your _URL_ remote using the command `git remote -v`. You terminal must show something likethis:

    ```
    origin  git@github.com:john-snow/know-nothing.git (fetch)
    origin  git@github.com:john-snow/know-nothing.git (push)
    ```

  - Where _john-snow_ is your username and _know-nothing_ is the name you gave to your repository;

  - Now that everything is properly configurated and verifyed, its time to push your first commit to ***GitHub***! 🤩

  - Execute the command `git push origin master` on your terminal;

  - Go to your GitHub and check the new modifications.

Now, how about add a description of what is you repository on _README.md_? 💪.

  - The README.md that you created is about your _trybe-exercises_ repository, with that in mind you might add infomations regarding the Trybe course, what you are developing and what you will develop;

  - Another intresting thing to do is add a _README.md_ file inside the daily exercises directory to put a description of the exercises you developed;

  - Remember to make a _commit_ when you finish altering the files;

  - After the _commit_, always make a `push`;

  - Check the alterations on ***GitHub***.

