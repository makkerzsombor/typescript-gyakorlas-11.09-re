

document.addEventListener('DOMContentLoaded',() => {

    // default values:
    (document.getElementById('dbSzam') as HTMLElement).textContent = '0';
    (document.getElementById('idbSzam') as HTMLElement).textContent = '0';
    (document.getElementById('aKAra') as HTMLElement).textContent = '0';

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
            console.log('papir Minden jó');            
            (document.getElementById('pCim') as HTMLInputElement).value = '';
            (document.getElementById('pPrice') as HTMLInputElement).value = '';
            (document.getElementById('pSuly') as HTMLInputElement).value = '';
            (document.getElementById('pIsbn') as HTMLInputElement).value = '';
        }else if(!joKonyv){
            (document.getElementById('rpCim') as HTMLElement).textContent = 'Nem adta meg a könyv címét!';
        }else if(!joAr){
            (document.getElementById('rpPrice') as HTMLElement).textContent = 'Rossz árat adoot meg, (min 0)!';
        }else if(!joSuly){
            (document.getElementById('rpSuly') as HTMLElement).textContent = 'Rossz súlyt adott meg (min 1)!';
        }else if(!joIsbn){
            (document.getElementById('rpIsbn') as HTMLElement).textContent = 'Rossz ISBN-t adott meg (13 karakter)!';
        }
    });

    // eBook check:
    document.getElementById('eKonyv')?.addEventListener('click', () => {
        let joKonyv = (document.getElementById('eCim') as HTMLInputElement).value.length > 0;
        let joAr = parseInt((document.getElementById('ePrice') as HTMLInputElement).value) >= 0;        
        let joSuly = parseInt((document.getElementById('eSuly') as HTMLInputElement).value) > 0;
        let joIsbn = (document.getElementById('eIsbn') as HTMLInputElement).value.length == 13;
        if(joKonyv && joAr && joSuly && joIsbn){
            console.log('eBook Minden jó');
        }
    });

})