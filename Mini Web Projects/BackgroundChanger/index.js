function hexGenerator(){
    const hexNumbers = [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        'A',
        'B',
        'C',
        'D',
        'E',
        'F'
    ];

    let result = '#';

    for( var i =0; i<6; i+=1){
         const random = Math.floor(Math.random()*hexNumbers.length);
         result+= hexNumbers[random];
        }
    return  result;
}

const name = document.getElementById("name");
const btn = document.getElementById('btn');
const bg = document.getElementById("bg");

function change(){
    bg.style.backgroundColor =hexGenerator();
    name.innerHTML = 'HEX COLOR : ' +hexGenerator();
    }
btn.addEventListener("click", change);

