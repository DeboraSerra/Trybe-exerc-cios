# Day 2-2 - Git & GitHub - Uderstanding the commands

On this day we were taught the most important commands to work with Git and GitHub, like `git pull`, `git push`, `git fetch`, and others.

The exercise were made accordingly with the specified below.

## Now the practice (trybe-skills2.txt)

⚠️ To make the exercises below, you must use the project with the text on the _.txt_ file, located in the directory from the day before, create a copy to use today.

This time, each one must do the exercises in your own computer, ok? Let's go! 😋

1. Go to the root of the project with the _.txt_ file;

2. Check if there isn't any file without _commit_ using `git status`:

  * If there is something, check if it is necessary and make the `commit`, or remove it.

3. Create a new branch with the name _trybe-skills-changes_ and do the checkout to it;

4. On the _.txt_ file, at the end of the skills list, add two more skills that will be developed on Trybe:
  * Exemple:

	>O que eu vou aprender na Trybe (What will I learn on Trybe):

	> - Unix
	> - Bash
	> - Git
	> - HTML
	> - CSS

  * Do a `git add name-of-the-file.extention`;

  * You can add all the files you modified using `git add .`, but avoid it in commits with a lot of files to prevent you from adding any modification by mistake;

  * Now do a `git commit -m "Message you want"`;

  * A good practice is always sum up what your commit is modifying, for exemple, `git commit -m "Add a new skill"`;

  * Avoid joining to many modifications in one commit. That way, in case there is any mistake on your code, it will be easier to see in what modification it occurred;

  * And last use a`git push -u origin trybe-skills-changes`;

5. Open a _Pull Request_ with a detailed description:

  * Give it context to what you are doing, use links or mention specifications that are important.Exemple: "Work made for week 1 on the course Software Developer of Trybe. Here, the challange was... And to fix the problem we did... and the result was..." ;

  * The merge must be made only when you reach exercise 10.

6. Return to the _main_ branch with the command: `git checkout main`;

7. Check if you are on the _main_ branch using the command: `git branch` (This branch must be with its original format, without the new skills);

8. Create a new branch _trybe-skills-updates_ from the main and move to it;

9. On the same _.txt_ file that you modified on _step 4_, also at the end of your skills' listm add one more skill you will learn on other blocks:

  * Atention! Here the file won't have the modifications made before on the other branch 😉;

  * Do a `git add name-of-the-file.extention`;

  * Now a `git commit -m "Message you want"`;

  * And for last a `git push -u origin trybe-skills-updates`;

  * After the first "push" on your branch, you can use only the command `git push`;

  * Open a Pull Request with a friendly description:

    * The merge must be done onle on exercise 10;

10. Now, do the _merge_ of the branches _trybe-skills-changes_ e _trybe-skills-updates_ on the _main_ branch, through the _Pull Request_:

  * First, go to the page from the first _Pull Request_ (branch _trybe-skills-changes_) and do the merge clicking on the green button **"Merge pull request"**;

  * Now, go to the page of the other _Pull Request_ (branch _trybe-skills-updates_) And try  to merge clicking on the same button. Did you notice that it is blocked? This happens because this Pull Request is trying to alter the same line of code with a different contentm and the Git can't determine alone witch of the branches is the correct one;

  * You have to fix this conflict before doing the merge of the _Pull Request_. Click on the button **"Resolve conflicts"**, pick one of the two versions of the text (remember to delete the lines with <<<<<<< and >>>>>>>, they are created just to give a more visual identification of the problem). After that click on **"Mark as resolved"** and, latter, on **"Commit merge"**;

  * Now you must be able to merge your _Pull Request_ normally. 😎
