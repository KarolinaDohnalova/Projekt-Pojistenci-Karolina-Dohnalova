'use strict';

// PojisteniApp.js - třída pro správu aplikace.
class PojisteniApp {    
    // Konstruktor třídy PojisteniApp pro správu aplikace.
    constructor() {
        this.novyZaznam = document.getElementById('novy-zaznam');
        this.seznamPojistenych = document.getElementById('pojisteni-list');
        this.pojisteniKolekce = []; // Kolekce pro ukládání pojištěných.
        // Počká na odeslání formuláře a poté zavolá metodu pratForm.
        this.novyZaznam.addEventListener('submit', this.pratForm.bind(this));
    }
    // Metoda pro obsluhu odeslání formuláře.
    pratForm(e) {
        e.preventDefault();   // Zastaví výchozí chování formuláře.

        const jmenoInput = document.getElementById('jmeno');
        const prijmeniInput = document.getElementById('prijmeni');
        const vekInput = document.getElementById('vek');
        const telefonInput = document.getElementById('telefon');

        const jmeno = jmenoInput.value;
        const prijmeni = prijmeniInput.value;
        const vek = vekInput.value;
        const telefon = telefonInput.value;

        if (jmeno && prijmeni && vek && telefon) {
            const novyPojisteny = new Pojisteny(jmeno, prijmeni, vek, telefon);
            this.pojisteniKolekce.push(novyPojisteny); // Přidá nového pojištěného do kolekce.
            this.pridejPojisteneho(novyPojisteny);
            this.vycistiFormular();
        } else {
            alert('Všechna pole formuláře jsou povinná.');
        }
    }
    // Metoda pro přidání pojištěného do seznamu.
    pridejPojisteneho(pojisteny) {
        const listItem = document.createElement('li');
        listItem.innerHTML = pojisteny.toString();

        // Funkce pro smazání pojištěného.
        const smazatButton = listItem.querySelector('.smazat');
        smazatButton.addEventListener('click', () => {
            this.seznamPojistenych.removeChild(listItem);
            // Také odstraní pojištěného z kolekce.
            const index = this.pojisteniKolekce.indexOf(pojisteny);
            if (index !== -1) {
                this.pojisteniKolekce.splice(index, 1);
            }
        });

        this.seznamPojistenych.appendChild(listItem);

        // Zobrazí seznam pojištěných.
        this.seznamPojistenych.style.display = 'block';
    }
    // Metoda pro vymazání formuláře.
    vycistiFormular() {
        const jmenoInput = document.getElementById('jmeno');
        const prijmeniInput = document.getElementById('prijmeni');
        const vekInput = document.getElementById('vek');
        const telefonInput = document.getElementById('telefon');

        jmenoInput.value = '';
        prijmeniInput.value = '';
        vekInput.value = '';
        telefonInput.value = '';
    }
}