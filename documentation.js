/* MULTIPLICATION SIMPLE
 * This program should ask multiplication questions, displaying which question
 * is being asked, and counting the number of equations with at least one error.
 * FLOWCHART: https://lucid.app/lucidchart/5a3164fd-459f-494d-9cae-b4a6be593b13/view
 */


/* main controls the program. Calling askQuestions() provides feedback depending on the 
 * number right returned: Either "Perfect!" or it says how many right out of the number asked. 
 * Store the number of questions to ask in a variable called questions.
 * @param none
 * @return none
 */
function main() {
    let right = askQuestions(2);

}

/* askQuestions calls askQuestion() question number if times, sending the question number as an argument. 
 * It counts the number right returned, and return number right to main().
 * @param: none
 * @return: {integer} score (0-questions)
 */
function askQuestions(questions) {
    return questions;

}

/* askQuestion asks a multiplication question, using the question parameter to say which
 * question is being asked.  It returns 1 if correct, 0 if incorrect.
 * @param: {integer} question 
 * @return: {integer} (0 or 1) or {boolean}
 */
function askQuestion(question){
  return true;
}
