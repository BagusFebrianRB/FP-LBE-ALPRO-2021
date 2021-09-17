const text = ['Mahasiswa Informatika', 'Manusia Biasa'];
let count = 0;
let textindex = 0;
let currenttext = '';
let words = '';

(function ketik(){
    
    if(count == text.length){
        count=0;
    }

    currenttext = text[count];

    words = currenttext.slice(0, ++textindex);
    document.querySelector('.efek-ketik').textContent = words;

    if(words.length==currenttext.length){
        count++;
        textindex=0;
    }

    setTimeout(ketik, 400);

})();