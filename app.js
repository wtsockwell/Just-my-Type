$(document).ready(function () {
    //Hiding the uppercase board and revealing it when the shift key is held down
    $("#keyboard-upper-container").hide();

    let gameSpace = $("body")
    //Sentence and character selectors
    let sentences = ["test1","test2","test3","test4","test5"];
    let sentenceNum = 0
    let charNum = 0
    let typeChar = sentences[sentenceNum].charAt(charNum)
    let characterCount = 0
    $("#sentence").append(sentences[sentenceNum])
    $("#target-letter").append(typeChar)

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
    //Sentence and type display functionality with the characters only changing on correct key presses
    gameSpace.keydown(function (event) {
        let character = event.key
        
        if (characterCount == sentences[sentenceNum].length) {
            characterCount = 0
            charNum = 0
            typeChar = sentences[sentenceNum].charAt(charNum)
            $("#sentence").empty()
            sentenceNum++
            $("#sentence").append(sentences[sentenceNum])
            $("#target-letter").append(typeChar)
            console.log(sentenceNum)
            //Reset functionality while maintaining sentence structure
            if (sentenceNum == sentences.length) {
                $("#target-letter").empty()
                let startBtn = $("<button>Play again?</button>").prependTo(".keyboard-container")
                startBtn.click(function () {
                    sentenceNum = 0
                    characterCount = 0
                    charNum = 0
                    startBtn.hide()
                    $("#sentence").empty()
                    $("#sentence").append(sentences[sentenceNum])
                    $("#target-letter").append(typeChar)
                    
                })
            }
        }
        if (character == typeChar) {
            charNum++
            typeChar = sentences[sentenceNum].charAt(charNum)
            $("#target-letter").empty()
            $("#target-letter").append(typeChar)
            characterCount++

        }
    })



    gameSpace.keyup(function (e) {
        if (e.key == "Shift") {
            $("#keyboard-upper-container").hide();
            $("#keyboard-lower-container").show();
        }
    })


})