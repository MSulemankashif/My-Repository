const discountEnd = new Date("March 2, 2026, 20:59:59").getTime();

setInterval(function Interval (){

    const now = new Date().getTime();

    const remaining =   discountEnd - now;


    const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remaining % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = "Flash Sale Ends in!!  " + 
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

if(remaining < 0){
    clearInterval(setInterval);
    document.getElementById("timer").innerHTML = "Discount Expired";
}

})

Interval();