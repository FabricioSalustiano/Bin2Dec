function convertBinary() {
    const binaryInput = document.getElementById('binary').value.trim();
    const resultField = document.getElementById('resultDecimal');

    if (!/^[01]{1,8}$/.test(binaryInput)) {
        alert("Por favor, insira até 8 dígitos contendo apenas 0 e 1.");
        resultField.value = '';
        return;
    }

    let decimal = 0;
    const length = binaryInput.length;

    for (let i = 0; i < length; i++) {
        const digit = parseInt(binaryInput.charAt(i));
        const power = length - i - 1;
        decimal += digit * Math.pow(2, power);
    }

    resultField.value = decimal;
}

function clearFields() {
    document.getElementById('binary').value = '';
    document.getElementById('resultDecimal').value = '';
}