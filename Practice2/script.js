let input = document.querySelector('input');
let h3 = document.querySelector('h3');

document.querySelector('form').addEventListener('submit', function(event){
    event.preventDefault();
    let value = input.value;

    if(value <= 0) {
        h3.innerText = `Please enter a valid positive number greater than 0`;
    }else{

        let result = value ** 2;
    
        h3.innerText = `The square root of ${value} is ${result}`
    }
})