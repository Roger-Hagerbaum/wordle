let inputGuess = 'hallå'.toUpperCase();
let inputCorrect = 'cykla'.toUpperCase();
let letterOne
function compareAlgoritm(guess, correctWord) {
    let resultArray = [];

    for (let i = 0; i < correctWord.length; i++) {
        if (guess[i] === correctWord[i]) {
            resultArray[i] = {letter: guess[i], result: "correct"};
        }else {
            resultArray[i] = {letter: guess[i], result: ""};
        }
    }
        for (let i = 0; i < correctWord.length; i++) {
            let letter = correctWord.split(guess[i]).length -1;
           if(correctWord.includes(guess[i])) {
               for(let j = 0; j < correctWord.length; j++ ) {
                   if(resultArray[j].result === "correct" && resultArray[j].letter === guess[i]) {
                       letter --;
                   }else if(resultArray[j].result === "misplaced" && resultArray[j].letter === guess[i]){
                       letter --;
                   }
               }
           }
           if (correctWord.includes(guess[i]) && resultArray[i].result !== "correct" && letter > 0)  {
                resultArray[i] = {letter: guess[i], result: "misplaced"};
            } else if (!correctWord.includes(guess[i])|| resultArray[i].result === "") {
                resultArray[i] = {letter: guess[i], result: "incorrect"};
            }
        }

    console.log(resultArray)
    return resultArray;
}
compareAlgoritm(inputGuess ,inputCorrect);
export { compareAlgoritm };