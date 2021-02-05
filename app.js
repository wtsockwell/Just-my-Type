$(document).ready(function () {
    //Hiding the uppercase board and revealing it when the shift key is held down
    $("#keyboard-upper-container").hide();
    
    let gameSpace = $("body")
    //Sentence and character selectors
    let sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];
    let sentenceNum = 0
    let charNum = 0
    let typeChar = sentences[sentenceNum].charAt(charNum)
    let characterCount = 0
    let wordCount = 0
    let mistakes = 0
    $("#sentence").append(sentences[sentenceNum])
    $("#target-letter").append(typeChar)
    
    //Timer set up for the WPM program
    let seconds = 0
    let minutes = (seconds/60)
    setInterval(setTime, 1000)
    
    function setTime(){
        seconds++
    }
    

    setTime();


    gameSpace.keydown(function (event) {
        let character = event.key

            //Setting up light up characters on the page as well as proper board states
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
        //added word cout, mistake count, as well as feedback for correct marks and incorrect marks, as well as basis for WPM equation and inclusion
        let character = event.key
        let correct = $("<span>\u2713</span>").css("color", "#1DA237")
        let wrong = $("<span>X</span>").css("color", "#CD2626")
        minutes = (seconds/60)
        


        //When typing characters this section will present them front and center as well as remove them when correct
        if (character == typeChar) {
            charNum++
            typeChar = sentences[sentenceNum].charAt(charNum)
            $("#target-letter").empty()
            $("#target-letter").append(typeChar)
            characterCount++
            $("#feedback").append(correct)
            //Animation for moving the highlight cursor
            $("#yellow-block").animate({
                left: "+=17.4px"
            }, 100)
            if (typeChar == 32){
                wordCount++
            }
        } else if (character == "Shift"){
            
        } else {
            $("#feedback").append(wrong)
            mistakes++
        }
        //Segment for changing of sentences
        if (characterCount == sentences[sentenceNum].length) {
            sentenceNum++
            wordCount++
            characterCount = 0
            charNum = 0
            typeChar = sentences[sentenceNum].charAt(charNum)
            $("#sentence").empty()
            $("#sentence").append(sentences[sentenceNum])
            $("#feedback").empty()
            $("#target-letter").append(typeChar)
            $("#yellow-block").animate({
                left: "18px"
            }, 100)
            //Reset functionality while maintaining sentence structure
            if (sentenceNum == sentences.length) {
                $("#target-letter").empty()
                let wordsPM = Math.floor((wordCount/minutes)-(2*mistakes))
                let startBtn = $("<button>Play again?</button>").prependTo(".keyboard-container")
                $("#feedback").append(wordsPM + " Words per Minute")
                startBtn.click(function () {
                    sentenceNum = 0
                    characterCount = 0
                    charNum = 0
                    wordCount = 0
                    mistakes = 0
                    seconds = 0
                    startBtn.hide()
                    $("#sentence").empty()
                    $("#sentence").append(sentences[sentenceNum])
                    $("#target-letter").append(typeChar)
                    $("#feedback").empty()
                })
            }
        }
    })


//Used to return the board back to lower case after Shift key has been pressed, and only when Shift is released
    gameSpace.keyup(function (e) {
        if (e.key == "Shift") {
            $("#keyboard-upper-container").hide();
            $("#keyboard-lower-container").show();
        }
    })


})