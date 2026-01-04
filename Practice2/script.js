$(document).ready(function(){
    $("#hide").click(function(){
        $("p").hide(700);
    });
    $("#show").click(function(){
        $("p").show(400);
    })

    $("p").hover(function(){
        $(this).css("background-color", "Lightgray"); 
    })
    $("p").mouseout(function(){
        $(this).css("background-color", "white")
    })
})