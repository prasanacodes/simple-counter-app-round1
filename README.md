# Simple Counter App

This is a minimalist, production-ready single-page web application that demonstrates a basic counter functionality with increment and decrement, and the ability to save named counts. It's built with modern HTML, CSS, and JavaScript, focusing on clean code, responsiveness, and user-friendliness.

## Features

- **Increment Button**: Increases the counter value.
- **Decrement Button**: Decreases the counter value (prevents going below zero).
- **Current Value Display**: Shows the live count.
- **Save Button**: Allows users to save the current counter value with a custom name.
- **Saved Counts Display**: A dedicated section to view all saved counts and their names.
- **Reset Button**: Resets the current counter value to zero.
- **Clear Saved Button**: Clears all previously saved counts.
- **Confirmation Dialogs**: Prompts for confirmation before resetting the counter or clearing saved counts.
- **Stylish Design**: Modern and responsive UI using CSS.
- **Pure JavaScript**: No frameworks or libraries are used, keeping it lightweight.

## Live Demo

(If hosted, you would link it here)

## Technologies Used

- **HTML5**: For structuring the web page.
- **CSS3**: For styling and responsiveness.
- **JavaScript (ES6+)**: For interactive functionality.

## Setup and Usage

To get this project up and running on your local machine, follow these simple steps:

### 1. Clone the repository (or download the files)

```bash
git clone https://github.com/your-username/simple-counter-app.git
cd simple-counter-app
```

If you downloaded the files directly, navigate to the directory where you saved them.

### 2. Open `index.html`

Simply open the `index.html` file in your preferred web browser. You can do this by double-clicking the file or by right-clicking and choosing "Open with..." your browser.

That's it! The application will load, and you can start interacting with the counter.

## Code Explanation

### `index.html`

- Sets up the basic HTML structure, including meta tags for responsiveness and character encoding.
- Links to `style.css` for presentation and `script.js` for functionality.
- Contains a `div` with the class `container` to hold the main counter elements.
- `<h1>` for the app title.
- A `div` with `id="counter-display"` to show the current count.
- Two `<button>` elements with `id="increment-btn"` and `id="decrement-btn"`.
- A `save-btn` to trigger the save functionality.
- **New**: A `reset-btn` to reset the current counter.
- **New**: A `clear-saved-btn` to clear all saved counts.
- A `save-input-area` div, initially hidden, containing an `input` field (`save-name-input`) for naming saved counts and a `confirm-save-btn`.
- A `saved-counts-container` div to display a list of saved counts, using an unordered list (`saved-counts-list`).

### `style.css`

- Uses `Roboto` font from Google Fonts for a clean look.
- Centers the main counter content vertically and horizontally on the page.
- Applies a modern card-like design to the `.container` with `box-shadow` and `border-radius`.
- Styles the `counter-display` with a large, bold font.
- Styles the buttons (`.btn`) with distinct colors, padding, and hover/active effects.
- Styles for the `save-btn` and `confirm-save-btn`.
- **New**: Styles for `reset-btn` and `clear-saved-btn`.
- Styles for the `save-input-area` and `save-name-input`.
- Styles for the `saved-counts-container` and `saved-counts-list` to present saved items clearly.
- Includes media queries to ensure the app is responsive and looks good on smaller screens.

### `script.js`

- Uses `DOMContentLoaded` to ensure the DOM is fully loaded before executing JavaScript.
- Retrieves references to all necessary DOM elements, including the new save-related elements, and the new reset and clear saved buttons.
- Initializes a `count` variable to `0`.
- `updateCounterDisplay()` function: A utility function to update the `textContent` of `counterDisplay`.
- `handleIncrement()` function: Increments `count` and calls `updateCounterDisplay()`.
- `handleDecrement()` function: Decrements `count` and calls `updateCounterDisplay()`, preventing the count from going below zero.
- `handleSaveClick()`: Toggles the visibility of the `save-input-area`.
- `handleConfirmSave()`:
    - Retrieves the name from `save-name-input`.
    - Validates the name (prevents empty names).
    - Creates a new list item (`<li>`) with the saved name and count.
    - Appends the new item to `saved-counts-list`.
    - Clears the input field and hides the `save-input-area`.
- **New**: `handleReset()`: Prompts for confirmation and, if confirmed, resets `count` to `0` and updates the display.
- **New**: `handleClearSaved()`: Prompts for confirmation and, if confirmed, clears all child elements from `saved-counts-list`.
- Event listeners are attached to all buttons: `increment-btn`, `decrement-btn`, `save-btn`, `confirm-save-btn`, `reset-btn`, and `clear-saved-btn`.
- `updateCounterDisplay()` is called initially to display the starting value of `0` when the page loads.

## Customization

- **Styling**: Modify `style.css` to change colors, fonts, button styles, or layout.
- **Initial Count**: Change the `let count = 0;` line in `script.js` to start from a different number.
- **Decrement Limit**: Adjust the `if (count > 0)` condition in `handleDecrement` if you want the counter to go into negative numbers.

## Contributing

Feel free to fork this repository, make improvements, and submit pull requests. Any suggestions are welcome!

## License

This project is open-source and available under the MIT License.
