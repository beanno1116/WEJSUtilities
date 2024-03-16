const ERROR_DETAILS = '[WEUtilities][FNC]'

/**
 * Checks if the provided parameter is of type Array
 * @param {Array} arr - value to check
 * @returns {Boolean} - true if is array false if not array
 */
const isArray = (arr) => {
  try {
    if (arr !== null || arr === undefined) throw new Error("Parameter undefined");
    if (typeof arr === 'object' && arr instanceof Array) {
      return true;
    }
    return false;    
  } catch (error) {
    console.log(`${ERROR_DETAILS}[isArray][ERROR]-${error.message}`);
  }
}


/**
 * Shuffles an array in place and returns the provided 
 * array shuffled
 * @param {Array} arr - Array to shuffle 
 * @return {Array} - shuffled array 
 */
const shuffleArray = (arr) => {
  try {
    if (!isArray(arr)) throw new Error("Arguement is not of type Array");    
    let currentIndex = arr.length, randomIndex;
    while (currentIndex > 0){
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [arr[currentIndex],arr[randomIndex]] = [arr[randomIndex],arr[currentIndex]];
    }    
    return arr;
  } catch (error) {
    console.log(`${ERROR_DETAILS}[shuffleArray][ERROR]-${error.message}`);
  }
}


const utilities = {
  isArray,
  shuffleArray
}

export default utilities;