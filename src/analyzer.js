const analyzer = {  
  getWordCount: (text) => text.split(' ').length,

  getCharacterCount: (text) => text.length,
  
  getCharacterCountExcludingSpaces: (text) => {

    const theAlpha = text.toLowerCase();
    
    let count = 0;
    
    for (let i = 0; i < theAlpha.length; i++) {
      
      if (theAlpha[i].charCodeAt(0) >= 97 && theAlpha[i].charCodeAt(0)<= 122) {
        count++
      }
    }
    return count;
  },


  getAverageWordLength: (text) =>{
    const textCharacter = text.toLowerCase();
    let count = 0;

    for (let i = 0; i < textCharacter.length; i++) {
      if (textCharacter[i].charCodeAt(0) >= 33 ) {
        count++
      }
      
    }
    return parseFloat((count / analyzer.getWordCount(text)).toFixed(2)); 
  },


  getNumberCount: (text) => {

    const theText = text.split(" ");
    let count = 0;

    for (let i = 0; i < theText.length; i++) {
      if (!isNaN(theText[i])) {
        count++
      }
    }
    return count;
  },

  getNumberSum: (text) => {

    const theText = text.split(" ");

    const numbersArray = theText.filter(Number);

    return numbersArray.length === 0 ? 0 : numbersArray.reduce((a,b) => parseFloat(a) +parseFloat(b));
    // for (let i = 0; i < numbersArray.length; i++) {
    //   count += parseFloat(numbersArray[i]);
    // } this for cicle is the same as the reduce method 
    
  },
};

export default analyzer;
