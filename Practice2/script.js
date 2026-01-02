let count = 0;
document.querySelector("button").addEventListener("click", function(){
    
    count++;
    this.innerText = `Clicked ${count} times`;  
})
