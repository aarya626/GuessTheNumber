const randomNum = Math.floor((Math.random() * 100) + 1);
// console.log(randomNum);
let remaining = 10;
// let guesses = document.getElementById('remaining').innerHTML
// console.log(guesses);
// guesses = "9";
const form = document.getElementById('formid')
form.addEventListener('submit',function(e){
    e.preventDefault();
    const num = document.getElementById('input_number').value;
    if (remaining==0){
        console.log("Game over!!!");
        document.getElementById('button').disabled = true;  
    }
    else if(num>randomNum){
        console.log('Too high!!! Try again');
        remaining -= 1
        document.getElementById('remaining').innerHTML = remaining;
    }
    else if(num<randomNum){
        console.log('Too low!!! Try again');
        remaining -= 1
        document.getElementById('remaining').innerHTML = remaining;
    }
    else{
        console.log("Bravo!!!!! You won");
    }
})

