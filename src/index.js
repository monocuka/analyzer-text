import analyzer from './analyzer.js';

const getTextUser = () => {

    const getText = document.querySelector("textarea").value;

    console.log(getText);
};
document.addEventListener('input', getTextUser);


