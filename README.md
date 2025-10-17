# Simple Counter App

This is a minimalist, production-ready single-page web application that demonstrates a basic counter functionality with increment and decrement buttons. It's built with modern HTML, CSS, and JavaScript, focusing on clean code, responsiveness, and user-friendliness.

## Features

- **Increment Button**: Increases the counter value.
- **Decrement Button**: Decreases the counter value (prevents going below zero).
- **Current Value Display**: Shows the live count.
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
- Contains a `div` with the class `container` to hold the main elements.
- `<h1>` for the app title.
- A `div` with `id="counter-display"` to show the current count.
- Two `<button>` elements with `id="increment-btn"` and `id="decrement-btn"`.

### `style.css`

- Uses `Roboto` font from Google Fonts for a clean look.
- Centers the content vertically and horizontally on the page.
- Applies a modern card-like design to the `.container` with `box-shadow` and `border-radius`.
- Styles the `counter-display` with a large, bold font.
- Styles the buttons (`.btn`) with distinct colors, padding, and hover/active effects for a good user experience.
- Includes media queries to ensure the app is responsive and looks good on smaller screens.

### `script.js`

- Uses `DOMContentLoaded` to ensure the DOM is fully loaded before executing JavaScript.
- Retrieves references to the `counter-display`, `increment-btn`, and `decrement-btn` elements.
- Initializes a `count` variable to `0`.
- `updateCounterDisplay()` function: A utility function to update the `textContent` of `counterDisplay` with the current `count`.
- `handleIncrement()` function: Increments `count` and calls `updateCounterDisplay()`.
- `handleDecrement()` function: Decrements `count` and calls `updateCounterDisplay()`. It includes a conditional check (`if (count > 0)`) to prevent the count from going into negative numbers, ensuring a non-negative counter.
- Event listeners are attached to both buttons to call their respective handler functions on click.
- `updateCounterDisplay()` is called initially to display the starting value of `0` when the page loads.

## Customization

- **Styling**: Modify `style.css` to change colors, fonts, button styles, or layout.
- **Initial Count**: Change the `let count = 0;` line in `script.js` to start from a different number.
- **Decrement Limit**: Adjust the `if (count > 0)` condition in `handleDecrement` if you want the counter to go into negative numbers.

## Contributing

Feel free to fork this repository, make improvements, and submit pull requests. Any suggestions are welcome!

## License

This project is open-source and available under the MIT License.
