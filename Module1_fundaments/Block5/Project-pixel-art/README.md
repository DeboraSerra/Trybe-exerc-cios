# Project - Pixel art

To use the Pixel art document, you must simply select the color you want on the palette and start drawing. If you want a bigger board just type the number and hit the VQV button, or press 'Enter', but the board will not be smaller than 5X5 or bigger than 50X50. If you clicked a square by mistake, click it again and the color will be removed. If you want to star again, click the 'Clear board' button.

This project was produced using the guidelines bellow. We were encouraged to refactor our projects as we want after the requisites were done.

1. Add to the page the title _Color palette_.

2. Add to the page a palette with four different colors.

>* The palette must be an element with the id `color-palette`, and each color must have the class `color`;

>* The background color of each element in the palette must be the color this element represents. The only color not allowed is white;

>* Each element of the palette must have a solid border with 1px thinckness ad the color black;

>* It must have all the colors available side by side and below the title _Color Palette_;

>* the colors can't be repeated.

3. Add the color black as the first color of the palette.

4. Add to the paxe a pixel board with 25 pixel.

>* The board must have 5 elements in width and 5 element of height;

>* The board must have the id `pixel-board` and each 'pixel' must have the class `pixel`;

>* The initial color of the pixels must be white;

>* The board must appear below the colors palette.

5. Each pixel element must have 40px width and 40px heigth and have a black solid border with 1px thickness.

6. Define the black color as the first one selected. When the page is loaded, the color black must be selected to color the pixels.

>* The element with the black color must start with class `selected`;

7. When you click in one of the colors of the palette, it will be selected and can be used to color the pixels.

>* The class `selected` must be added to the selected color and removed from the previous color;

>* Only one color at a time can have the class `selected`;

8. When you click the pixel inside the board, the pixel will be painted with the selected color.

9. Create a button that, when it is clicked, cleans the board,making all the pixels have the background color white.

#### Bonus

10. Make so the user is able to choose the size of the board.

>* Create an input and a button that allow you to set a size between 5 and 50 to the board.

>* When you click the button, a board must be created with N pixels in width and N pixels in height, where N is the number inserted in the input;

>* The input must have the id `board-size` and the button must have the id `generate-board` and the text _VQV_;

>* The input must only accept numbers bigger than 0.

>* The button must be by the side of the input, and they must be positioned between the color palette and the pixel board;

>* If no value is set to the input when the button is clicked, there must apear an alert with the text _Invalid board!_;

>* The new board must have all the pixels with the background white.

11. Limit the min and max size of the board.

>* In case the value typed on the input is:

>>* Less than 5, generate a board with size 5;

>>* Bigger than 50, generate a board with size 50.

12. Make so the color in the palette are random when the page is loaded.

>* The color black must still be the first color of the palette
