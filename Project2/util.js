const generateText = (name, age) => {
    // Returns output text
    return `${name} (${age} years old)`;
    // return `Bjoern (38 years old)`;
  };
  
  exports.createElement = (type, text, className) => {
    // Creates a new HTML element and returns it
    const newElement = document.createElement(type);
    newElement.classList.add(className);
    newElement.textContent = text;
    return newElement;
  };
  
  const validateInput = (text, notEmpty, isNumber) => {
    // Validate user input with two pre-defined rules
    if (!text) {
      return false;
    }
    if (notEmpty && text.trim().length === 0) {
      return false;
    }
    if (isNumber && +text === NaN) {
      return false;
    }
    return true;
  };

  exports.checkAndGenerate = (name, age) => {
    if (!validateInput(name, true, false) || !validateInput(age, false, true)) {
      return false;
    }
    return generateText(name, age);
  };


// export the function in case needed in other components
// Node.js syntax
  exports.generateText = generateText;
  exports.validateInput - validateInput;