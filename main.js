import './style.css'
import utilities from './WEUtilities'


document.querySelector('#app').innerHTML = `
  <div>
    
  </div>
`
console.log(utilities.capitalizeFirstLetter(47));
console.log(`Value 26 ${utilities.isNumber(26) ? "is a number" : "is not a number"}`);
console.log(`Value ben ${utilities.isNumber("ben") ? "is a number" : "is not a number"}`);
console.log(`Value "12"+1 ${utilities.isNumber("12"+1) ? "is a number" : "is not a number"}`);
