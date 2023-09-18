'use strict';

// Pojisteny.js - třída pro reprezentaci pojištěnců.
class Pojisteny {
    // Konstruktor třídy Pojisteny pro vytvoření nové instance s informacemi o pojištěném.
    constructor(jmeno, prijmeni, vek, telefon) {
        this.jmeno = jmeno;           // Jméno pojištěného.
        this.prijmeni = prijmeni;     // Příjmení pojištěného.
        this.vek = vek;               // Věk pojištěného.
        this.telefon = telefon;       // Telefon pojištěného.
    }

    // Metoda pro vytvoření informací o pojištěném v HTML dokumentu.
    toString() {
        return `<div class="informace-o-pojistenem">
                    <p><strong>Jméno:</strong> ${this.jmeno}</p>
                    <p><strong>Příjmení:</strong> ${this.prijmeni}</p>
                    <p><strong>Věk:</strong> ${this.vek} let</p>
                    <p><strong>Telefonní číslo:</strong> ${this.telefon}</p>
                </div>
                    <button class="smazat">Smazat</button>`;
    }
}
