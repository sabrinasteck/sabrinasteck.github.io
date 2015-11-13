var clicked = false;

$("#pirate").remove();

$("body").addClass("gradient");



$("#toggle").click(function(){
    if (clicked == false) {
    $("#status").html("GO")
    $("#status").css("background-color","green")
    $("#toggle").html("Stop")
   
        $("#status").mouseenter(function(){
        $("#cat").show("#cat")
       
   })
     
    } else{
        clicked = true;
        $("#status").mouseleave(function(){
        $("#cat").hide("#cat")
        });
        
    $("#status").html("STOP").css("background-color","red")
    $("#toggle").html("Start")
    clicked = false;
    }
});