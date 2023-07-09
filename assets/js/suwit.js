function getPilihanComputer() {
    const computer = Math.round(Math.random() * 10 + 1);
    if( computer >= 8 ) return 'gunting';
    if( computer <= 7 && computer < 5 ) return 'batu';
    return 'kertas';
}

function getResult(computer, player) {
    if( player == computer ) return 'SERI';
    if( player == 'gunting' ) return ( computer == 'kertas' ) ? 'MENANG!' : 'KALAH!';
    if( player == 'kertas' ) return ( computer == 'gunting' ) ? 'KALAH!' : 'MENANG!';
    if( player == 'batu' ) return ( computer == 'kertas' ) ? 'KALAH!' : 'MENANG!';
}

function getRandomImg() {
    const randomImg = document.querySelector('div.computer .img-computer');
    const arrimg = ['gunting', 'batu', 'kertas'];
    const random = new Date().getTime();
    let r = 0;
    setInterval(function() {
        if( new Date().getTime() - random > 1000 ) {
            clearInterval;
            return;
        }
        randomImg.setAttribute('src', 'assets/img/' + arrimg[r++] + '.png');
        if( r == arrimg.length ) r = 0;
    }, 100);
}

const pilihan = document.querySelectorAll('ul li img');
pilihan.forEach(function(gambar) {
    gambar.addEventListener('click', function() {
        const pilihanComputer = getPilihanComputer();
        const pilihanPlayer = gambar.className;
        const result = getResult(pilihanComputer, pilihanPlayer);
        
        getRandomImg();

        setTimeout(function() {
            const img = document.querySelector('img.img-computer');
            img.setAttribute('src', 'assets/img/' + pilihanComputer + '.png');
    
            const textResult = document.querySelector('div.result');
            textResult.innerHTML = result;
        }, 1000);
    });
});