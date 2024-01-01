//First Challenge: Doing Arithmetic With Functions
var add = function (a, b) {
  return a + b;
};

var multiply = function (a, b) {
  return a * b;
};

console.log(add(multiply(36325, 9824), 777));

//Second Challenge: Are These Arrays The Same
var areArraysSame = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
};

console.log(areArraysSame([1, 2, 3], [4, 5, 6]));


console.log(areArraysSame([1, 2, 3], [1, 2, 3]));


areArraysSame([1, 2, 3], [1, 2, 3, 4]);
//Third Challenge: Hangman, Using Functions
var pickWord = function () {
  var words = [
    "rollers",
    "cereal",
    "truck",
    "shrimp"
  ];

  return words[Math.floor(Math.random() * words.length)];
};

var setupAnswerArray = function (word) {
  var answerArray = [];
  for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
  }

  return answerArray;
};

var showPlayerProgress = function (answerArray) {
  alert(answerArray.join(" "));
};

var getGuess = function () {
  return prompt("Guess a letter, or click Cancel to stop playing.");
};

var updateGameState = function (guess, word, answerArray) {
  var appearances = 0;
  for (var j = 0; j < word.length; j++) {
    if (word[j] === guess) {
      answerArray[j] = guess;
      appearances++;
    }
  }

  return appearances;
};

var showAnswerAndCongratulatePlayer = function (answerArray) {
  showPlayerProgress(answerArray);
  alert("Good job! The answer was " + answerArray.join(""));
};

var word = pickWord();
var answerArray = setupAnswerArray(word);
var remainingLetters = word.length;

while (remainingLetters > 0) {
  showPlayerProgress(answerArray); var guess = getGuess();
  if (guess === null) {
    break;
  } else if (guess.length !== 1) {
    alert("Please enter a single letter.");
  } else {
    var correctGuesses = updateGameState(guess, word, answerArray);
    remainingLetters -= correctGuesses;
  }
}

console.log(showAnswerAndCongratulatePlayer(answerArray));