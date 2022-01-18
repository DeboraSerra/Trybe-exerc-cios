# Day 9.2 - Fixing exercises - Asynchronous JavaScript and async/await

Answer the questions below. 

1. What is an asynchrounous code? What is the difference between this to a a synchronous code?

> In JavaScript the functions are read and executed from top to bottom. When a function is asynchronous it is 'removed' from the code to be executed in the background and when it is finished, it's answer is returned.
> Synchronous codes are the ones the dont run in the background, so the program will wait one to be over before start the next.

2. When you have to line lots of callbacks, what problem will occur?

> Will occur what is called as callback hell. Callback hell is when people try to write the code as it is read, from top to bottom, and start writing one callback inside another and it ends up being really difficult to understand the code.

3. Why `Promises` are a way to solve this problem?

> Because they behave in a similar way as functions, but they work asynchronously.

4. When you want to communicate with an API, this communication must be synchronous or asynchronous?

> The communication must be asynchronous.

5. Given the previous question, what is fetch and what it is used for?

> fetch is a primary function responsible for sending a requisition and handling the data and the errors. It is used to require APIs. When it is used, we must use the flow managers `.then` and `.catch` so the program will wait for the response and is the requisition isn't successfull, to handle the error.