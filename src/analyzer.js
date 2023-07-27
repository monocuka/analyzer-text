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


  getAverageWordLength: (text) => (analyzer.getCharacterCountExcludingSpaces(text) / analyzer.getWordCount(text)).toFixed(2),


  getNumberCount: (text) => {
    let count = 0;

    for (let i = 0; i < text.length; i++) {
      if (text[i].charCodeAt(0) >= 48 && text[i].charCodeAt(0) <= 57 ) {
        count++
      }
    }
    return count;
  },

  getNumberSum: (text) => {

    let count = 0;
    for (let i = 0; i < text.length; i++) {
      if (text[i].charCodeAt(0) >= 48 && text[i].charCodeAt(0) <= 57 ) {
        count += parseInt(text[i])
      }
    }
   return count;
  }
};

export default analyzer;
