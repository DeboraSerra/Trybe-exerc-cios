# Day 12.2 - React Router

## Fixing exercises

##### (./fixing-exercises-12.2/src/components)

1. Make the applicstion navigable.

2. Create a route to the component `Home`.

3. Add a route to `/about` to the component `About`.

4. Make the route `/` restrict to the component `Home`.

5. Add a route to `/users` to the component `Users`.

6. Add the route to the components inside `BrowserRouter`.

7. Change the component `Users` with the code provided.

8. In the `App` component change the way `Users` is rendered so it will receive it's props.

9. Change the route using an id. Then, chenge the component `Users` so it will show the value received with the id.

10. The component `App` must receive three routes: one to render `Home`, one to render `About` and one to render `Users`. Use the Switch component and order the routes from he most specific to the most generic.

11. Add a component called `StrictAcdcess` that receives an object `user` as props. If the username and password are correct, render the component, if it isn't, apear an alert showing 'Acces denied' and return to the main page.

12. Add a link to `/strict-access` in the `App` component.

13. Add a route to `/strict-access`.