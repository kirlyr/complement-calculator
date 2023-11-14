function calculateOnesComplement() {
    const binaryInput = document.getElementById('inputBinary').value;
    const isBinary = /^[01]+$/.test(binaryInput);

    if (isBinary) {
        const onesComplement = binaryInput.split('').map(bit => (1 - bit).toString()).join('');
        document.getElementById('result').value = onesComplement;
    } else {
        alert('Please enter a valid binary number (0s and 1s only).');
    }
}

function calculateTwosComplement() {
    const binaryInput = document.getElementById('inputBinary').value;
    const isBinary = /^[01]+$/.test(binaryInput);

    if (isBinary) {
        const twosComplement = (parseInt(binaryInput, 2) * -1).toString(2);
        document.getElementById('result').value = twosComplement;
    } else {
        alert('Please enter a valid binary number (0s and 1s only).');
    }
}

function calculateSevensComplement() {
    const input = document.getElementById('inputBinary').value;
    const isOctal = /^[0-7]+$/.test(input);

    if (isOctal) {
        const sevensComplement = input
            .split('')
            .map(digit => (7 - parseInt(digit, 8)).toString(8))
            .join('');
        document.getElementById('result').value = sevensComplement;
    } else {
        alert('Please enter a valid octal number (0-7 only).');
    }
}

function calculateEightsComplement() {
    const input = document.getElementById('inputBinary').value;
    const isOctal = /^[0-7]+$/.test(input);

    if (isOctal) {
        const eightsComplement = input
            .split('')
            .map(digit => (7 - parseInt(digit, 8)).toString(8))
            .join('');
        const result = (parseInt(eightsComplement, 8) + 1).toString(8);
        document.getElementById('result').value = result;
    } else {
        alert('Please enter a valid octal number (0-7 only).');
    }
}

function calculateNinesComplement() {
    const decimalInput = document.getElementById('inputBinary').value;
    const isDecimal = /^\d+$/.test(decimalInput);

    if (isDecimal) {
        const ninesComplement = (9 - parseInt(decimalInput)).toString();
        document.getElementById('result').value = ninesComplement;
    } else {
        alert('Please enter a valid decimal number.');
    }
}
