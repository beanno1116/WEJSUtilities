const ERROR_DETAILS = '[WEUtilities][FNC]'


/**
 * Method that capatilzes the first character
 * of the all words in the passed string 
 * @param {String} str - the string to capitalize the first letter of each word
 * @param {String} del - the string used to break up the str param
 * @returns {String} - string with each word's first letter capitalized
 */
const capitalizeEachFirstLetter = (str,del=" ") => {
  try {
    if (str !== null || str === undefined) throw new Error("Parameter undefined");
    if (!isString(str)) throw new Error("Parameter is not of type string");
    return str.split(del).map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(del);
  } catch (error) {
    console.log(`${ERROR_DETAILS}[capitalizeEachFirstLetter][ERROR]-${error.message}`);
  }
}

/**
 * Method that capatilzes only the first character
 * of the first word of the passed string
 * @param {String} str - string to capitalize the first letter of
 * @returns {String} - string with capitalized first letter
 */
const capitalizeFirstLetter = (str = undefined) => {
  try {
    if (str !== null || str === undefined) throw new Error("Parameter undefined");
    if (!isString(str)) throw new Error("Parameter is not of type string");  
    return str.charAt(0).toUpperCase() + str.slice(1);
  } catch (error) {
    console.log(`${ERROR_DETAILS}[capitalizeFirstLetter][ERROR]-${error.message}`);
  }
}

/**
 * Method that will check the darkmode setting on the window using 
 * matchMedia on the window for prefer-color-scheme: dark and seeing if
 * it is true
 * @returns {Boolean} - true if browser has darkmode enabled false if not
 */
const isDarkMode = () => {
  try {
    var mediaQuery = window.matchMedia("(prefer-color-scheme: dark)");
    var darkMode = mediaQuery.matches;
    if (darkMode) {
      return true;
    }
    return false;    
  } catch (error) {
    console.log(`${ERROR_DETAILS}[isDarkMode][ERROR]-${error.message}`);
  }
}


/**
 * gets the type of function passed
 * @param {Function} fn - value to check
 * @returns {String} - name of the function based on the constructor.name
 */
const functionType = (fn) => {
  try {
    if (fn === null || fn === undefined) throw new Error("Parameter undefined");
    if (!isFunction) throw new Error("Parameter not of type Function");
    var type = fn?.constructor?.name;
    if (type){
      return type;
    }
    return "";
  } catch (error) {
    console.log(`${ERROR_DETAILS}[functionType][ERROR]-${error.message}`);
  }
}

const findOverFlowedElement = () => {
  try {
    document.querySelectorAll('*').forEach(el => {
      if (el.offsetWidth > document.documentElement.offsetWidth){
        console.log("Overflowing element: ".el);
      }
    })
  } catch (error) {
    console.log(`${ERROR_DETAILS}[findOverFlowedElement][ERROR]-${error.message}`);
  }
}




/**
 * Checks if the provided parameter is of type Array
 * @param {*} arr - value to check
 * @returns {Boolean} - true if is array false if not array
 */
const isArray = (arr) => {
  try {
    if (arr === null || arr === undefined) throw new Error("Parameter undefined");
    if (typeof arr === 'object' && arr instanceof Array) {
      return true;
    }
    return false;    
  } catch (error) {
    console.log(`${ERROR_DETAILS}[isArray][ERROR]-${error.message}`);
  }
}

/**
 * Checks if the provided parameter is of type function
 * @param {*} fn - value to check 
 * @returns {Boolean} - true if value is function false if not a function
 */
const isFunction = (fn) => {
  try {
    if (fn === null || fn === undefined) throw new Error("Parameter undefined");
    if ({}.toString.call(fn) === '[object Function]'){
      return true;
    }
    return false;    
  } catch (error) {
    console.log(`${ERROR_DETAILS}[isFunction][ERROR]-${error.message}`);
  }
}

/**
 * Checks if the provided parameter is a number
 * @param {*} num - value to check 
 * @returns {Boolean} - true if value is num false if not a num
 */
const isNumber = (num) => {
  try {
    if (num === null || num === undefined) throw new Error("Parameter undefined");
    if (!isNaN(num)){
      return true;
    }
    return false;
  } catch (error) {
    console.log(`${ERROR_DETAILS}[isNumber][ERROR]-${error.message}`);
  }
}

/**
 * Checks if the provided parameter is of type Object
 * @param {*} obj - vallue to check
 * @returns {Boolean} true if value is object | false if value is not an object
 */
const isObject = (obj) => {
  try {
    if (obj === null || obj === undefined) throw new Error("Parameter undefined");
    if (typeof obj === 'object' && obj instanceof Object) {
      return true;
    }
    return false;    
  } catch (error) {
    console.log(`${ERROR_DETAILS}[isObject][ERROR]-${error.message}`);
  }
}

/**
 * Checks if the provided parameter is of type String
 * @param {*} str - value to check
 * @returns {Boolean} - true if value is string false if not a string
 */
const isString = (str) => {
  try {
    if (str === null || str === undefined) throw new Error("Parameter undefined");
    if (typeof str === 'string' || str instanceof String) {
      return true;
    }
    return false;    
  } catch (error) {
    console.log(`${ERROR_DETAILS}[isString][ERROR]-${error.message}`);
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
  capitalizeEachFirstLetter,
  capitalizeFirstLetter,
  findOverFlowedElement,
  isDarkMode,
  functionType,
  isArray,
  isFunction,
  isNumber,
  isObject,
  isString, 
  shuffleArray
}

export default utilities;