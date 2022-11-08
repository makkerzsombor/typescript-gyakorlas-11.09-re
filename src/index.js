"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Ebook_1 = require("./Ebook");
const PaperBook_1 = require("./PaperBook");
let lista = [];
document.addEventListener('DOMContentLoaded', () => {
    // default values:
    document.getElementById('dbSzam').textContent = '0';
    document.getElementById('idbSzam').textContent = '0';
    document.getElementById('aKAra').textContent = '0';
    let darabszam = 0;
    let ingyenesDarabSzam = 0;
    let osszesAr = 0;
    // radius values
    document.getElementById('bookType').addEventListener('click', () => {
        if (document.getElementById('pK').checked) {
            // hide eBook
            document.getElementById('rKonyv').textContent = '';
            document.getElementById('eBookForm').style.display = 'none';
            document.getElementById('pBookForm').style.display = 'block';
        }
        else if (document.getElementById('eK').checked) {
            // hide paperBook
            document.getElementById('rKonyv').textContent = '';
            document.getElementById('pBookForm').style.display = 'none';
            document.getElementById('eBookForm').style.display = 'block';
        }
        else {
            document.getElementById('rKonyv').textContent = "Kérem válasszon egy könyv típust!";
        }
    });
    // paper check:
    document.getElementById('pKonyv').addEventListener('click', () => {
        // error hide:
        document.getElementById('rpCim').textContent = '';
        document.getElementById('rpPrice').textContent = '';
        document.getElementById('rpSuly').textContent = '';
        document.getElementById('rpIsbn').textContent = '';
        // ellenorzesek:
        let joKonyv = document.getElementById('pCim').value.length > 0;
        let joAr = parseInt(document.getElementById('pPrice').value) >= 0;
        let joSuly = parseInt(document.getElementById('pSuly').value) > 0;
        let joIsbn = document.getElementById('pIsbn').value.length == 13;
        if (joKonyv && joAr && joSuly && joIsbn) {
            // listához adás:
            lista.push(new PaperBook_1.PaperBook(document.getElementById('pCim').value, parseInt(document.getElementById('pPrice').value), parseInt(document.getElementById('pSuly').value), document.getElementById('pIsbn').value));
            // Felso szamlalok valtoztatasa
            darabszam++;
            osszesAr += parseInt(document.getElementById('pPrice').value);
            if (parseInt(document.getElementById('pPrice').value) == 0) {
                ingyenesDarabSzam++;
            }
            document.getElementById('dbSzam').textContent = darabszam.toString();
            document.getElementById('idbSzam').textContent = ingyenesDarabSzam.toString();
            document.getElementById('aKAra').textContent = osszesAr.toString();
            document.getElementById('pCim').value = '';
            document.getElementById('pPrice').value = '';
            document.getElementById('pSuly').value = '';
            document.getElementById('pIsbn').value = '';
        }
        else if (!joKonyv) {
            document.getElementById('rpCim').textContent = 'Nem adta meg a könyv címét!';
        }
        else if (!joAr) {
            document.getElementById('rpPrice').textContent = 'Rossz árat adott meg, (min 0)!';
        }
        else if (!joSuly) {
            document.getElementById('rpSuly').textContent = 'Rossz súlyt adott meg (min 1)!';
        }
        else if (!joIsbn) {
            document.getElementById('rpIsbn').textContent = 'Rossz ISBN-t adott meg (13 karakter)!';
        }
    });
    // eBook check:
    document.getElementById('eKonyv').addEventListener('click', () => {
        // error hide
        document.getElementById('reCim').textContent = '';
        document.getElementById('rePrice').textContent = '';
        document.getElementById('reSuly').textContent = '';
        document.getElementById('reIsbn').textContent = '';
        // ellenörzések
        let joKonyv = document.getElementById('eCim').value.length > 0;
        let joAr = parseInt(document.getElementById('ePrice').value) >= 0;
        let joSuly = parseInt(document.getElementById('eSuly').value) > 0;
        let joIsbn = document.getElementById('eIsbn').value.length == 13;
        if (joKonyv && joAr && joSuly && joIsbn) {
            // listához adás:
            lista.push(new Ebook_1.Ebook(document.getElementById('eCim').value, parseInt(document.getElementById('ePrice').value), parseInt(document.getElementById('eSuly').value), document.getElementById('eIsbn').value));
            // Felso adatok változtatasa:
            darabszam++;
            osszesAr += parseInt(document.getElementById('ePrice').value);
            if (parseInt(document.getElementById('ePrice').value) == 0) {
                ingyenesDarabSzam++;
            }
            document.getElementById('dbSzam').textContent = darabszam.toString();
            document.getElementById('idbSzam').textContent = ingyenesDarabSzam.toString();
            document.getElementById('aKAra').textContent = osszesAr.toString();
            // Adattorles      
            document.getElementById('eCim').value = '';
            document.getElementById('ePrice').value = '';
            document.getElementById('eSuly').value = '';
            document.getElementById('eIsbn').value = '';
        }
        else if (!joKonyv) {
            document.getElementById('reCim').textContent = 'Nem adta meg a könyv címét!';
        }
        else if (!joAr) {
            document.getElementById('rePrice').textContent = 'Rossz árat adott meg, (min 0)!';
        }
        else if (!joSuly) {
            document.getElementById('reSuly').textContent = 'Rossz súlyt adott meg (min 1)!';
        }
        else if (!joIsbn) {
            document.getElementById('reIsbn').textContent = 'Rossz ISBN-t adott meg (13 karakter)!';
        }
    });
});
