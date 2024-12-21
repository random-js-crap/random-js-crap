// const one = {
//     el: document.getElementById('1'),
//     x: false,
//     o: false
// };
// const two = {
//     el: document.getElementById('2'),
//     x: false,
//     o: false
// };
// const three = {
//     el: document.getElementById('3'),
//     x: false,
//     o: false
// };
// const four = {
//     el: document.getElementById('4'),
//     x: false,
//     o: false
// };
// const five = {
//     el: document.getElementById('5'),
//     x: false,
//     o: false
// };
// const six = {
//     el: document.getElementById('6'),
//     x: false,
//     o: false
// };
// const seven = {
//     el: document.getElementById('7'),
//     x: false,
//     o: false
// };
// const eight = {
//     el: document.getElementById('8'),
//     x: false,
//     o: false
// };
// const nine = {
//     el: document.getElementById('9'),
//     x: false,
//     o: false
// };

// for (let turn; turn < )

// one.el.addEventListener('click', function (){
//     if (!one.x && !one.o) {
//         one.el.textContent = 'X';
//         one.x = true;
//     }
// });





// const kletka =  {
//     el: document.getElementsByClassName('kletka'),
//     x: false,
//     o: false
// };
// const turnText = document.getElementsByClassName('turn')[0];

// for (let i = 0; i <= 8; i++){
//     kletka.el[i].addEventListener('click', function () {
//         for (let j = 1; j <= 9; j++){
//             if (j % 2 == 0 && !kletka.x && !kletka.o){
//                 kletka.el[i].textContent = 'X'
//                 kletka.x = true
//                 turnText.textContent = j
//             } else if (j % 2 !=0 && !kletka.x && !kletka.o){
//                 kletka.el[i].textContent = 'O'
//                 kletka.o = true
//             } else{
//                 alert('шото не так')
//             }
//         }
//     });
// }

const winComb = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], 
    [1, 4, 7], 
    [2, 5, 8], 
    [0, 4, 8],
    [2, 4, 6]
];

function checkTie(){
    for(let i = 0; i <= 8; i++){
        if(kletka[i].textContent == ''){
            return;
        };
    };
    document.querySelector('.win__text').textContent = 'НИЧЬЯ';
    document.querySelector('.win').style.display = 'block';
    turn = 'end';
};

function checkWin(){
    let isWinner = false;
    for(let comb of winComb){
        const [a, b, c] = comb;
        if (kletka[a].textContent && kletka[a].textContent === kletka[b].textContent && kletka[a].textContent === kletka[c].textContent){
            isWinner = true;
            document.querySelector('.turn__text').style.display = 'none';
            document.querySelector('.win__value').textContent = kletka[a].textContent;
            document.querySelector('.win').style.display = 'block';
            turn = 'end'
        };
    };
};

// ставить x/o
const kletka = document.getElementsByClassName('kletka');
const turnText = document.getElementsByClassName('turn')[0];

let turn = 'x';

for (let i = 0; i <= 8; i++) {
    kletka[i].addEventListener('click', function () {
        if (kletka[i].textContent != 'x' && kletka[i].textContent != 'o') {
            if (turn === 'x') {
                kletka[i].textContent = turn;
                turn = 'o';
                turnText.textContent = "O";
            } else if(turn === 'o') {
                kletka[i].textContent = turn;
                turn = 'x';
                turnText.textContent = "X";
            } else if(turn === 'end'){
                alert('уже низя');
            }
        } else {
            alert('низя так');
        }
        //перемога??
        checkWin();
        checkTie();
    });
}






// темы 
const themeBtn = document.getElementsByClassName('btn')[0];
let theme = 'black';
let themeSaved = localStorage.getItem('theme');
if(themeSaved == null){
    localStorage.setItem('theme', 'black');
    themeSaved = localStorage.getItem('theme');
};
console.log(themeSaved);

const themeBlackText = `
color: rgb(0, 169, 169);
`;
const themeLilaText = `
color: #A628FF;
`;


if(themeSaved == 'black'){
    console.log(`подгрузка сохраненной темы ${themeSaved}`);
    document.querySelectorAll('p').forEach(p => {
        p.style.cssText = themeBlackText;
    });        
    document.querySelectorAll('h1').forEach(h1 => {
        h1.style.cssText = themeBlackText;
    });      
    document.querySelector('.setka').style.cssText = 'background-color:rgb(0, 169, 169)';
} else if(themeSaved == 'lila'){
    console.log(`подгрузка сохраненной темы ${themeSaved}`);
    document.querySelectorAll('p').forEach(p => {
        p.style.cssText = themeLilaText;
    });        
    document.querySelectorAll('h1').forEach(h1 => {
        h1.style.cssText = themeLilaText;
    });        
    document.querySelector('.setka').style.cssText = 'background-color: #A628FF';
};

themeBtn.addEventListener('click', function () {
    if (themeSaved == 'black'){
        document.querySelectorAll('p').forEach(p => {
            p.style.cssText = themeLilaText;
        });        
        document.querySelectorAll('h1').forEach(h1 => {
            h1.style.cssText = themeLilaText;
        });        
        document.querySelector('.setka').style.cssText = 'background-color: #A628FF';
        localStorage.setItem('theme', 'lila');
        themeSaved = localStorage.getItem('theme');
        theme = 'lila';
    } else if(themeSaved == 'lila'){
        document.querySelectorAll('p').forEach(p => {
            p.style.cssText = themeBlackText;
        });        
        document.querySelectorAll('h1').forEach(h1 => {
            h1.style.cssText = themeBlackText;
        });      
        document.querySelector('.setka').style.cssText = 'background-color:rgb(0, 169, 169)';
        theme = 'black';
        localStorage.setItem('theme', 'black');
        themeSaved = localStorage.getItem('theme');
    }
});