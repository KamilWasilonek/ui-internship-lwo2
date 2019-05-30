export function myReplace(sentence, wordToChange, newWord) {
  if (wordToChange[0] === wordToChange[0].toUpperCase()) {
    newWord = newWord.slice(0, 1).toUpperCase() + newWord.slice(1);
  }
  return sentence.replace(wordToChange, newWord);
}
