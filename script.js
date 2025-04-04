/* Multiplication Simple
 * This program should ask multiplication questions, displaying which question
 * is being asked, and counting the number of equations with no errors.
 * FLOWCHART: https://lucid.app/lucidchart/5a3164fd-459f-494d-9cae-b4a6be593b13/view
 */
// NOTE TO STUDENT: Use this if you have to - but try to code based on the flowchart and comments in script.js only first! 

/* Steps in order */
// Create a global variable called questions, set it to 5 (for now).
// Create a global variable called right, set it to 0.
// Define a function called main to be called from the web button.
// Define a function called askQuestions and call it from inside main().
// Define a function called askQuestion and call it from inside askQuestions() 
// To test, create "stub" functions with return values where returns are needed. 

var quetions = 5;
var right = 0;
function main() {
  askQuetions();
  
}
/* main() controls the program. Calling askQuestions() it provides feedback depending on the 
 * number right returned: Either "Perfect!" or it says how many right out of the number asked. 
 * Set the number of questions as the variable called questions.
 * @param none
 * @return none
 */
// Call askQuestions() and store the returned value in 'right'
// If right = questions alert "Perfect"
// Otherwise alert "You answered right out of questions correctly."

/* askQuestions() calls askQuestion() the total number of questions times, counting and returning number right.
 * It sends the question number as an argument, and adds up the number right that are returned.
 * @param: none
 * @return: right (0-questions)
 */
// Create a variable called right, set to 0
// Write a for loop with question as the index, values 1 to questions
// Call askQuestion in the loop, with question as argument
// Add the returned value of askQuestion to right each time you call it (same line)
// return right after loop finishes

/* askQuestion asks a multiplication question, showing which question out of total questions
 *@param: question (integer)
 * @return: integer (0 or 1) or boolean (false = 0, true = 1)
 */
// Create a variable named a, and set to a random integer between 3 and 9.
// Create a variable named b, and set to a random integer between 3 and 9.
// Create a variable called product, set as a * b.
// Create a variable called equation, set as the complex string a * b = ?.
// Create a variable called answer, ask user for it by prompting with equation.
// Display "Correct!" and return 1 or true if the answer and product match.
// Otherwise, display "Incorrect!" and return 0 or false.

/* askQuestions calls askQuestion() question times, sending the question number as an argument. 
 * It counts number wrong returned, and return number wrong to main().
 * @param: none
 * @return: score (0-questions)
 */
// Create a variable right, set it to 0
// Write a for loop with question as the index, values 1 to questions
// Call askQuestion(question) in the loop, with question as argument
// Add the returned value of askQuestion to right each time you call it (same line)
// return right after loop finishes
