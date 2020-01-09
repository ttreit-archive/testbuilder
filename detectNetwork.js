

// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  
  var detectNetwork = function(cardNumber) {
    var bankByLength = checkLength(cardNumber);
    var bankByPrefix = checkPrefix(cardNumber);

    if (bankByLength === bankByPrefix) {
      return bankByPrefix; 
    } else {
      return 'Unknown Bank';
    }
  };

  function checkLength(cardNumber) {
    switch (cardNumber.length) {
      case 14:
        return 'Diner\'s Club';
        break;
      case 15:
        return 'American Express';
        break;
      default:
        return 'Unknown Bank';
        break;
    }

  }

  function checkPrefix(cardNumber) {
    var prefix = cardNumber.slice(0, 2);
    switch (prefix) {
      case '38':
      case '39':
        return 'Diner\'s Club';
        break;
      case '34':
      case '37':
        return 'American Express';
        break;
      default:
        return 'Unknown Bank';
    }
    
  }
  
  
