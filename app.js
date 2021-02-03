$(document).ready(function(){
    //Hiding the uppercase board and revealing it when the shift key is held down
    $("#keyboard-upper-container").hide();
    
    let shiftArea = $("body")
    shiftArea.keydown(function(event){
        if(event.key == "Shift"){
            $("#keyboard-lower-container").hide();
            $("#keyboard-upper-container").show();
        }
    })
    shiftArea.keyup(function(){
        $("#keyboard-upper-container").hide();
        $("#keyboard-lower-container").show();
    })

    //Highlighting the keys when they are pressed
    $(".key").keydown(function (e) { 
        
    });

})