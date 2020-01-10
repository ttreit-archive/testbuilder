  var detectNetwork = function(cardNumber) {
    //get bank name by unique prefix. Prefixes are unique so this
    //is the best way to get the initial bank.  
    var bank = checkPrefix(cardNumber);  
    
    //verify card is valid length - if both prefix and length are within
    //the bank's constraints we can proceed.
    var bankValidated = checkLength(bank, cardNumber);

    if (bankValidated) {
      return bank;
    } else {
      return 'Unknown Bank';
    }
  };

  function checkLength(bank, cardNumber) {
    var dinersClub =[14];
    var amex =[15];
    var visa =[13, 16, 19];
    var masterCard =[16];

    switch (bank) {
      case 'American Express':
        return validateLength(cardNumber, amex);
      case 'Diner\'s Club':
        return validateLength(cardNumber, dinersClub);
      case 'MasterCard':
        return validateLength(cardNumber, masterCard);
      case 'Visa':          
        return validateLength(cardNumber, visa);
            default:
        return false 
    }

  }
  function validateLength(cardNumber, bankArray) {
    return (bankArray.includes(cardNumber.length));
  }


  function checkPrefix(cardNumber) {
    var prefix = cardNumber.slice(0, 2);
    switch (prefix) {
      case '34':
      case '37':
        return 'American Express';
        break;
      case '38':
      case '39':
        return 'Diner\'s Club';
        break;
      case '51':
      case '52':
      case '53':
      case '54':
      case '55':
        return 'MasterCard';
        break;
      case '41':
        return 'Visa'
        break;
      default:
        return 'Unknown Bank';
    }
    
  }