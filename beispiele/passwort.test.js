const { checkIfGrossbuchstabeVorhanden, checkIfLaengeGroesserAcht, checkIfZahlVorhanden } = require('./passwort');

describe("Passwort Validierungsfunktionen", () => {
    describe("checkIfGrossbuchstabeVorhanden", () => {
        test("gibt true zurück, wenn mindestens ein Großbuchstabe vorhanden ist", () => {
            expect(checkIfGrossbuchstabeVorhanden('Test')).toBe(true);
        });

        test("gibt false zurück, wenn kein Großbuchstabe vorhanden ist", () => {
            expect(checkIfGrossbuchstabeVorhanden('test')).toBe(false);
        });
    });

    describe("checkIfLaengeGroesserAcht", () => {
        test("gibt true zurück, wenn die Länge mindestens 8 Zeichen ist", () => {
            expect(checkIfLaengeGroesserAcht('Passwort')).toBe(true);
        });

        test("gibt false zurück, wenn die Länge weniger als 8 Zeichen ist", () => {
            expect(checkIfLaengeGroesserAcht('Passw')).toBe(false);
        });
    });

    describe("checkIfZahlVorhanden", () => {
        test("gibt true zurück, wenn mindestens eine Zahl vorhanden ist", () => {
            expect(checkIfZahlVorhanden('Passwort1')).toBe(true);
        });

        test("gibt false zurück, wenn keine Zahl vorhanden ist", () => {
            expect(checkIfZahlVorhanden('Passwort')).toBe(false);
        });
    });
});


