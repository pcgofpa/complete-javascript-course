/*
CHALLENGE #4
Steven needs a very simple tip calculator for whenever he goes to eat in a 
restaurant. In his country, it's usual to tip 15% if the bill value is between 
50 and 300. If the value is different, the tip is 20%.

Your tasks:

1. Calculate the tip, depending on the bill value. Create a variable called tip 
for this. It's not allowed to use an if...else statement (if it's easier for you, 
you can start with an if...else statement, and then try to convert it to a ternary 
operator).
2. Print a string to the console containing the bill value, the tip, and the 
final value (bill + tip).
Example: The bill was 275, the tip was 41.25, and the total value 316.25.
Note: Use the values of the bill and tip variables to construct this string. 
Don't hard-code them 🙂

TEST DATA: Test with different bill values: 275, 40, and 430
*/
//Variable Declaration
let bill = 430;
let tip;

// Function
if(bill >= 50 && bill <= 300) {
    tip = (bill * 0.15);    
} else if (bill>= 301){
    tip = (bill * 0.20)    
} else {
    tip = (bill * 0.10)    
}
console.log(`The bill was $${bill}, customary tip would be $${tip}. Your total is $${(bill + tip)}.`);
