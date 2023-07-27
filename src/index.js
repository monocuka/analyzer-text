// eslint-disable-next-line indent
import analyzer from './analyzer.js';

const getTextUser = () => {
    
  const getText = document.querySelector("textarea").value;   
  const countWord = analyzer.getWordCount(getText)
  document.getElementById("words").innerHTML = countWord;
  const countCharacterNum = analyzer.getCharacterCount(getText);
  document.getElementById("char").innerHTML = countCharacterNum;
  const counterLetter = analyzer.getCharacterCountExcludingSpaces(getText);
  document.getElementById("letter").innerHTML = counterLetter;
  const averageCount = analyzer.getAverageWordLength(getText);
  document.getElementById("average").innerHTML = averageCount; 
  const theNumberText = analyzer.getNumberCount(getText);
  document.getElementById("nums").innerHTML = theNumberText;
  const sumNumber = analyzer.getNumberSum(getText);
  document.getElementById("sum").innerHTML = sumNumber;

};
document.addEventListener('input', getTextUser);

const cleanTextArea = () => {
  document.querySelector("textarea").value = "";
  //clean values for buttons
  document.querySelectorAll(".result").forEach((div) => {
    div.textContent = "";
  });
}
const cleanBtn = document.getElementById("reset-button")
cleanBtn.addEventListener('click', cleanTextArea )

