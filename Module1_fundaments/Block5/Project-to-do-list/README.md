# Project - To Do List

### How to use it

To use the task manager you must add your tasks to the input area and select the _Add task_ button. If you want to delete your to do list, click the _Delete all_ button (the list will no longer be saved). To complete a task, click the item twice and it will be crossed from your list. To delete the completed tasks, click the button _Delete completed_. If you want to save your list to access it latter, click the _Save_ button. To move a task up and down, first select the item (it will turn gray) and use the arrows. If you want to delete one specific task, select it and click the button _Remove selected task_. 
If you manipulate the list and wat the new list to be saved, you must click tha _Save_ button again.

### How I did it

This project was produced following the instructions below:

1. Add the title _My to do list_.

2. Add below the title a paragraph with the id `funcionamento` and the text _Click twice to mark an item as completed_.

3. Add an input with the id `texto-tarefa` where the user can type the text he/she want to add to the list.

4. Add an ordered list with the id `lista-tarefas`.

5. Add a button with the id `criar-tarefa` and, when the user click the button, a new item must be added to the end of the list and the input must be emptied.

6. Order the list items by their creation order.

7. Click on an item of the list must change its background colot to `rgb(128,128,128)`.

8. There must not be possible to select more than an element of the list at a time.

9. Click twice on an item make it to be crossed, indicating that the item was completed. It must be possible to undo this action by clicking it twice again.

>* create a CSS class with the name `completed` and define the `text-decoration` with the value `line-through` and use it to add the crossed efect to the completed task.

10. Add a button with the id `apaga-tudo` that deletes all the items of the list when it is clicked.

11. Add a button with th eid `remover-finalizados` that remove only the completed tasks of the list when it is clicked.

#### BONUS

12. Add a button with the id `salvar-tarefas` that save all th elist content. If you close and open the page again, the list must be shown the way it was before.

13. Add two buttons, one with the id `mover-cima` and the other with the id `mover-baixo`, that allow the user to move the selcted item up or down the list.

14. Add a button with the id `remover-selecionado` that remove the selected item when it is clicked.
