document.addEventListener('DOMContentLoaded', () => {
    const counterDisplay = document.getElementById('counter-display');
    const incrementBtn = document.getElementById('increment-btn');
    const decrementBtn = document.getElementById('decrement-btn');

    let count = 0;

    /**
     * Updates the text content of the counter display element.
     */
    const updateCounterDisplay = () => {
        counterDisplay.textContent = count;
    };

    /**
     * Handles the increment button click event.
     * Increments the count and updates the display.
     */
    const handleIncrement = () => {
        count++;
        updateCounterDisplay();
    };

    /**
     * Handles the decrement button click event.
     * Decrements the count and updates the display.
     * Prevents the count from going below zero (optional, based on requirements).
     */
    const handleDecrement = () => {
        // Optional: Prevent decrementing below 0 for a non-negative counter
        if (count > 0) {
            count--;
            updateCounterDisplay();
        } else {
            // Optionally provide feedback or just do nothing
            console.log("Counter cannot go below zero.");
        }
    };

    // Attach event listeners to the buttons
    incrementBtn.addEventListener('click', handleIncrement);
    decrementBtn.addEventListener('click', handleDecrement);

    // Initialize the display with the starting count
    updateCounterDisplay();
});
