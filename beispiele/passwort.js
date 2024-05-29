
function checkIfGrossbuchstabeVorhanden(input) {
    return /[A-Z]/.test(input);
}


function checkIfLaengeGroesserAcht(input) {
    return input.length >= 8;
}


function checkIfZahlVorhanden(input) {
    return /\d/.test(input);
}

module.exports = {
    checkIfGrossbuchstabeVorhanden,
    checkIfLaengeGroesserAcht,
    checkIfZahlVorhanden
};
