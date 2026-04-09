let namee = document.getElementById("namee");
let email = document.getElementById("email");
let form = document.querySelector("form");

let error = false;

form.addEventListener("submit", function(event){
    event.preventDefault()
    let length = namee.value.length

    if(length < 8){
        document.getElementById("error").innerText="Name must be 8 characters long";
        error = true;
    }else{
        document.getElementById("error").innerText=""
        error = false;
    }
    
    if(error){
        document.getElementById("success").innerText= "Please check your creditionals";
        document.getElementById("success").style.color = "red";
    }else{
        document.getElementById("success").innerText= "Account Created!";
        document.getElementById("success").style.color = "green";
        console.log(length);
        
        
    }
    

})