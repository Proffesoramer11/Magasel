document.getElementById('payment-form').addEventListener('submit', function(event) {
}
    event.preventDefault();

    // Get the card number, card type, expiration date, and CVV
    var cardNumber = document.getElementById('card-number').value;
    var cardType = document.getElementById('card-type').value;
    var expirationDate = document.getElementById('expiration-date').value;
    var cvv = document.getElementById('cvv').value;

    // Validate the card number
    if (cardNumber.length < 16) {
      alert('Invalid card number');
      return;
    }
  
    // Determine the card type based on the first few digits
    if (cardNumber.startsWith('51') || cardNumber.startsWith('52') || cardNumber.startsWith('53') || cardNumber.startsWith('54') || cardNumber.startsWith('55')) {
      cardType = 'mastercard';
    } else if (cardNumber.startsWith('4')) {
      cardType = 'visa';
    } else if (cardNumber.startsWith('600000') || cardNumber.startsWith('600010') || cardNumber.startsWith('600080') || cardNumber.startsWith('600009')) {
      cardType = 'atheer';
    } else if (cardNumber.startsWith('6001')) {
      cardType = 'mada';
    } else {
      alert('Unsupported card type');
      return;
    }
  
    // Validate the expiration date
    if (expirationDate < new Date().toISOString().substring(0, 7)) {
      alert('Expiration date is) 
    }
    // This is a simple JavaScript function that takes two numbers and returns their sum
function addNumbers(num1, num2) {
    return num1 + num2;
  }
  
  // This is how you can call the function and print the result to the console
  console.log(addNumbers(2, 3)); // Output: 5