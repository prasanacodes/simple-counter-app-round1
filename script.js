document.addEventListener('DOMContentLoaded', () => {
    const counterDisplay = document.getElementById('counter-display');
    const incrementBtn = document.getElementById('increment-btn');
    const decrementBtn = document.getElementById('decrement-btn');
    const saveBtn = document.getElementById('save-btn');
    const saveInputArea = document.getElementById('save-input-area');
    const saveNameInput = document.getElementById('save-name-input');
    const confirmSaveBtn = document.getElementById('confirm-save-btn');
    const savedCountsList = document.getElementById('saved-counts-list');

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
        if (count > 0) {
            count--;
            updateCounterDisplay();
        } else {
            console.log("Counter cannot go below zero.");
        }
    };

    /**
     * Handles the save button click event.
     * Shows/hides the input field for naming the saved count.
     */
    const handleSaveClick = () => {
        saveInputArea.classList.toggle('hidden');
        if (!saveInputArea.classList.contains('hidden')) {
            saveNameInput.focus(); // Focus on the input when it appears
        }
    };

    /**
     * Handles the confirm save button click event.
     * Saves the current count with a user-provided name.
     */
    const handleConfirmSave = () => {
        const name = saveNameInput.value.trim();
        if (name === '') {
            alert('Please enter a name for your saved count.');
            return;
        }

        const listItem = document.createElement('li');
        listItem.classList.add('saved-count-item');
        listItem.innerHTML = `<strong>${name}:</strong> <span>${count}</span>`;
        savedCountsList.appendChild(listItem);

        // Clear input and hide save area
        saveNameInput.value = '';
        saveInputArea.classList.add('hidden');
    };

    // Attach event listeners to the buttons
    incrementBtn.addEventListener('click', handleIncrement);
    decrementBtn.addEventListener('click', handleDecrement);
    saveBtn.addEventListener('click', handleSaveClick);
    confirmSaveBtn.addEventListener('click', handleConfirmSave);

    // Allow saving by pressing Enter in the name input field
    saveNameInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            handleConfirmSave();
        }
    });

    // Initialize the display with the starting count
    updateCounterDisplay();
});
