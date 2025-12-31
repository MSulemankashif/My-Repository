let input = document.getElementsByTagName('input');
let h3 = document.getElementsByTagName('h3');

document.querySelector('form').addEventListener('submit', function(event){
    event.preventDefault();
    let value = input[0].value;

    if(value <= 0) {
        h3[0].innerText = `Please enter a valid positive number greater than 0`;
    }else{

        let result = value ** 2;
    
        h3[0].innerText = `The square root of ${value} is ${result}`
    }

    
})