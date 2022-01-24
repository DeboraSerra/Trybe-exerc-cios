# Day 6.5 - Responsive CSS - Mobile first

### Part I - Create a page to a small screen

Using the code provided, start by changing the style of the page for a mobile device.
Change the style to fit the screen according to the breakpoints.

1. At mobile size:

* Make the font-size bigger;
* Make the font-size of the elements `h1` smaller;
* Increase the space between the figures;
* Add some margin to the page.

2. Using the first breakpoint change the points below:

* Change the background color;
* Adjust the font-size;
* Adjust the margin of the page;
* Make the images apear in two columns.

3. Find another breakpoint and make the changes below:

* Change the background color;
* Adjust the font-size;
* Adjust the margin of the page;
* Add a property max-width to make sure the lines won't be to wide.

### Part II - Create 3 different layouts using mobile first

Create three versions of layout to the code provided, one for each size starting with small and working your way to the big one.
To do this you must think how it will work to the user.

* Where should the chapters be positioned?
* How the text should be shown?
* How should the header be positioned?
* What to do with the author information?

### Part III - Create layouts to mobile devices and to print

Using the code provided:

1. Add a media query on the CSS file and the rules below for when it is printed:

* The elements with the id `header`, `navigation` and `footer` can't show;
* The element with the id `aside` must be shown below the main content.

2. For the mobile layout follow the rules below:

* The element with the id `aside` can't show;
* The body element can't have padding;
* The images can't be bigger than the screen;
* The items in the navigation element must appear one on each line;
* The element with the id `header` must be fixed, in a way it always shows on the top of the screen.

### BONUS

As bonus exercise, take the exercise made for the shrimp-mantis and add media-query and CSS library.
