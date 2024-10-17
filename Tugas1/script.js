        let display = document.getElementById('display');
        let currentInput = '';

        function appendNumber(number) {
            if (currentInput === '0') {
                currentInput = number;
            } else {
                currentInput += number;
            }
            updateDisplay();
        }

        function appendOperator(operator) {
            currentInput += operator;
            updateDisplay();
        }

        function clearDisplay() {
            currentInput = '0';
            updateDisplay();
        }

        function deleteLast() {
            currentInput = currentInput.slice(0, -1);
            if (currentInput === '') {
                currentInput = '0';
            }
            updateDisplay();
        }

        function calculateResult() {
            try {
                currentInput = eval(currentInput).toString();
            } catch (error) {
                currentInput = 'Error';
            }
            updateDisplay();
        }

        function updateDisplay() {
            display.textContent = currentInput;
        }