"use strict";
document.addEventListener('DOMContentLoaded', () => {
    var _a;
    // default values:
    document.getElementById('dbSzam').textContent = '0';
    document.getElementById('idbSzam').textContent = '0';
    document.getElementById('aKAra').textContent = '0';
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
            console.log('papir Minden jó');
            document.getElementById('pCim').value = '';
            document.getElementById('pPrice').value = '';
            document.getElementById('pSuly').value = '';
            document.getElementById('pIsbn').value = '';
        }
        else if (!joKonyv) {
            document.getElementById('rpCim').textContent = 'Nem adta meg a könyv címét!';
        }
        else if (!joAr) {
            document.getElementById('rpPrice').textContent = 'Rossz árat adoot meg, (min 0)!';
        }
        else if (!joSuly) {
            document.getElementById('rpSuly').textContent = 'Rossz súlyt adott meg (min 1)!';
        }
        else if (!joIsbn) {
            document.getElementById('rpIsbn').textContent = 'Rossz ISBN-t adott meg (13 karakter)!';
        }
    });
    // eBook check:
    (_a = document.getElementById('eKonyv')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
        let joKonyv = document.getElementById('eCim').value.length > 0;
        let joAr = parseInt(document.getElementById('ePrice').value) >= 0;
        let joSuly = parseInt(document.getElementById('eSuly').value) > 0;
        let joIsbn = document.getElementById('eIsbn').value.length == 13;
        if (joKonyv && joAr && joSuly && joIsbn) {
            console.log('eBook Minden jó');
        }
    });
});
