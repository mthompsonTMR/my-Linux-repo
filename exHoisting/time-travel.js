/* Task 1: Declare a Destination Variable */
// TODO: Use `let` to declare a variable named `destination` and assign it the value `"Ancient Egypt"`. Print the destination to the console.
let destination = "ancient Egypt"
console.log(destination);
/* Task 2: Change the Destination */
// TODO: Now, change the `destination` variable to `"Medieval Europe"`. Print the new destination to the console.
destination = "Medieval Europe"
console.log(destination);
/* Task 3: Declare a Constant Travel Date */
// TODO: Use `const` to declare a variable named `travelDate` and set it to `"2024-03-15"`. Try to change the `travelDate` to another value and observe and explain what happens as a comment.
/*
 * Observations:
 * TODO: Explain here.
 */
const travelDate = "2024-03-15";
console.log(travelDate);

travelDate = "2024-11-11";
console.log(travelDate);
//exception uncaught typeerror: variable cannot be resassigned onece it is declared it stays constant

/* Task 4: Experiment with Variable Hoisting */
// TODO: Before declaring any variable, try to print a variable named `timeMachineModel` to the console. Then, declare `timeMachineModel` using `var` and assign it the value `"T-800"`. Observe and explain what happens as a comment.
/*
 * Observations:
 * TODO: Explain here.
 */
console.log(timeMachineModel);  //undefined
//anonymous assigment to variable
var timeMachineModel = "T-800";
console.log(timeMachineModel); //typeerror 
//so the variable is hoisted to the top of the scope and exists in memorny but not assigined or initialized  the value that was added later. 
