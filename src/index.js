import analyzer from './analyzer.js';

const getTextUser = () => {

    const getText = document.querySelector("textarea").value;   
    const countWord = analyzer.getWordCount(getText)
    document.getElementById("words").innerHTML = countWord;
    const countCharacterNum = analyzer.getCharacterCount(getText);
    document.getElementById("char").innerHTML = countCharacterNum;
};
document.addEventListener('input', getTextUser);


