document.addEventListener("DOMContentLoaded", function () {
    const sudokuContainer = document.getElementById("sudoku-container");

    // Initialize a 4x4 Sudoku grid with empty cells
    const sudokuGrid = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ];

    // Function to generate the Sudoku grid in the HTML
    function generateSudoku() {
        sudokuContainer.innerHTML = ""; // Clear previous content

        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                const cell = document.createElement("div");
                cell.classList.add("cell");

                // Check if the cell should be user-input or pre-filled
                if (sudokuGrid[i][j] !== 0) {
                    cell.textContent = sudokuGrid[i][j];
                } else {
                    // Allow user input for empty cells
                    const input = document.createElement("input");
                    input.type = "number";
                    input.min = 1;
                    input.max = 4;
                    input.classList.add("user-input");
                    cell.appendChild(input);
                }

                sudokuContainer.appendChild(cell);
            }
        }
    }

    // Generate the initial Sudoku grid
    generateSudoku();

    // Handle user input changes
    sudokuContainer.addEventListener("input", function (event) {
        const inputElement = event.target;
        const rowIndex = Math.floor(inputElement.parentElement.cellIndex / 4);
        const colIndex = inputElement.parentElement.cellIndex % 4;

        sudokuGrid[rowIndex][colIndex] = parseInt(inputElement.value) || 0;
    });

    // Function to reset the Sudoku grid
    function resetSudoku() {
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                sudokuGrid[i][j] = 0;
            }
        }

        generateSudoku();
    }

    // Reset button event listener
    const resetButton = document.getElementById("reset-button");
    resetButton.addEventListener("click", resetSudoku);
});
