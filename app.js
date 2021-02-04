$(document).ready(function () {
    //Hiding the uppercase board and revealing it when the shift key is held down
    $("#keyboard-upper-container").hide();

    let gameSpace = $("body")
    gameSpace.keydown(function (event) {
        let character = event.key

        if (event.shiftKey == true) {
            $("#keyboard-lower-container").hide();
            $("#keyboard-upper-container").show();
            //Ability to keep the board properly selected as well as highlight the selected character
            $(`.well#${character.charCodeAt(0)}`).css("background-color", "skyblue")
            if (event.key == "Shift") {
                $(".well#83").css("background-color", "#f5f5f5")
            } else {
                $(`.well#${character.charCodeAt(0)}`).css("background-color", "skyblue")
            }
            gameSpace.keyup(function () {
                $(`.well#${character.charCodeAt(0)}`).css("background-color", "#f5f5f5")
            })
        } else {
            $(`.well#${character.charCodeAt(0)}`).css("background-color", "skyblue")
            gameSpace.keyup(function () {
                $(`.well#${character.charCodeAt(0)}`).css("background-color", "#f5f5f5")
            })
        }
    })
    gameSpace.keyup(function(e){
        if(e.key == "Shift"){
            $("#keyboard-upper-container").hide();
            $("#keyboard-lower-container").show();
        }
    })



    
})