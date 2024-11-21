" Hide Unhide Element"
// $(document).ready(function(){
//     $("p").hover(function(){
//         $(this).css("cursor","pointer");
//     });
//     $("p").click(function(){
//         $(this).hide();
//     });
//     $("#toggleButton").click(function(){
//         $("h1").hide(400);
//     });
//     $("#showBtn").click(function(){
//         $("h1").show(400);
//     });
// });
"Basic"
// console.log(`We are Using ${jQuery}`);
// $("p").click(function(){
//     $("p").hide();
// })
// $("p").click(function(){
//     alert(`Button is Clicked!`)
// })

    "Show hide Element"
// $(document).ready(function(){
//     $("#toggleButton").click(function(){
//         $("p").hide(700);
//     });
//     $("#showBtn").click(function(){
//         $("p").show(500);
//     });
// });

"Applying CSS"
// $("p").hover(
//     function() { $(this).css("background-color", "yellow"); },
//     function() { $(this).css("background-color", "white"); }
// );

// $("#toggleButton").hover(
//     function(){$(this).css("background-color","purple")},
//     function(){$(this).css("background-color","white")}
// );

let button = document.querySelector("#theme");
let body = document.querySelector("body");
let mode = "light";

button.addEventListener("click",()=>{
    if ( mode === "light"){
        mode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }else{
        mode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
    } console.log(mode);
    
})