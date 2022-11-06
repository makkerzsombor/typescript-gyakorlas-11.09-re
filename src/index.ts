

document.addEventListener('DOMContentLoaded',() => {

    // default values:
    (document.getElementById('dbSzam') as HTMLElement).textContent = '0';
    (document.getElementById('idbSzam') as HTMLElement).textContent = '0';
    (document.getElementById('aKAra') as HTMLElement).textContent = '0';

    // radius values
    // error with form turning invis
    (document.getElementById('bookType') as HTMLElement).addEventListener('click', () => {        
        if((document.getElementById('pK') as HTMLInputElement).checked) {
            // hide eBook
            (document.getElementById('rKonyv') as HTMLElement).textContent = '';
            (document.getElementById('eBookForm') as HTMLElement).style.visibility = 'hidden';
            (document.getElementById('pBookForm') as HTMLElement).style.visibility = 'visible';
        }else if ((document.getElementById('eK') as HTMLInputElement).checked) {
            // hide paperBook
            (document.getElementById('rKonyv') as HTMLElement).textContent = '';
            (document.getElementById('pBookForm') as HTMLElement).style.visibility = 'hidden';
            (document.getElementById('eBookForm') as HTMLElement).style.visibility = 'visible';
        }else{
            (document.getElementById('rKonyv') as HTMLElement).textContent = "Kérem válasszon egy könyv típust!";
        }
    });
    

    // paper check:
    (document.getElementById('pKonyv') as HTMLElement).addEventListener('click',() => {
        // error hide:
        (document.getElementById('rpCim') as HTMLElement).textContent = '';
        (document.getElementById('rpPrice') as HTMLElement).textContent = '';
        (document.getElementById('rpSuly') as HTMLElement).textContent = '';
        (document.getElementById('rpIsbn') as HTMLElement).textContent = '';
        // ellenorzesek:
        let joKonyv = (document.getElementById('pCim') as HTMLInputElement).value.length > 0;
        let joAr = parseInt((document.getElementById('pPrice') as HTMLInputElement).value) >= 0;        
        let joSuly = parseInt((document.getElementById('pSuly') as HTMLInputElement).value) > 0;
        let joIsbn = (document.getElementById('pIsbn') as HTMLInputElement).value.length == 13;
        if(joKonyv && joAr && joSuly && joIsbn){
            // listához adás:
            console.log('papir Minden jó');            
            (document.getElementById('pCim') as HTMLInputElement).value = '';
            (document.getElementById('pPrice') as HTMLInputElement).value = '';
            (document.getElementById('pSuly') as HTMLInputElement).value = '';
            (document.getElementById('pIsbn') as HTMLInputElement).value = '';
        }else if(!joKonyv){
            (document.getElementById('rpCim') as HTMLElement).textContent = 'Nem adta meg a könyv címét!';
        }else if(!joAr){
            (document.getElementById('rpPrice') as HTMLElement).textContent = 'Rossz árat adott meg, (min 0)!';
        }else if(!joSuly){
            (document.getElementById('rpSuly') as HTMLElement).textContent = 'Rossz súlyt adott meg (min 1)!';
        }else if(!joIsbn){
            (document.getElementById('rpIsbn') as HTMLElement).textContent = 'Rossz ISBN-t adott meg (13 karakter)!';
        }
    });

    // eBook check:
    (document.getElementById('eKonyv') as HTMLElement).addEventListener('click', () => {
        // error hide
        (document.getElementById('reCim') as HTMLInputElement).textContent = '';
        (document.getElementById('rePrice') as HTMLInputElement).textContent = '';
        (document.getElementById('reSuly') as HTMLInputElement).textContent = '';
        (document.getElementById('reIsbn') as HTMLInputElement).textContent = '';
        // ellenörzések
        let joKonyv = (document.getElementById('eCim') as HTMLInputElement).value.length > 0;
        let joAr = parseInt((document.getElementById('ePrice') as HTMLInputElement).value) >= 0;        
        let joSuly = parseInt((document.getElementById('eSuly') as HTMLInputElement).value) > 0;
        let joIsbn = (document.getElementById('eIsbn') as HTMLInputElement).value.length == 13;
        if(joKonyv && joAr && joSuly && joIsbn){
            // listához adás:
            console.log('papir Minden jó');            
            (document.getElementById('eCim') as HTMLInputElement).value = '';
            (document.getElementById('ePrice') as HTMLInputElement).value = '';
            (document.getElementById('eSuly') as HTMLInputElement).value = '';
            (document.getElementById('eIsbn') as HTMLInputElement).value = '';
        }else if(!joKonyv){
            (document.getElementById('reCim') as HTMLElement).textContent = 'Nem adta meg a könyv címét!';
        }else if(!joAr){
            (document.getElementById('rePrice') as HTMLElement).textContent = 'Rossz árat adott meg, (min 0)!';
        }else if(!joSuly){
            (document.getElementById('reSuly') as HTMLElement).textContent = 'Rossz súlyt adott meg (min 1)!';
        }else if(!joIsbn){
            (document.getElementById('reIsbn') as HTMLElement).textContent = 'Rossz ISBN-t adott meg (13 karakter)!';
        }
    });

})