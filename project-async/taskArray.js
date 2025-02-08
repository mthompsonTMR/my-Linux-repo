
//1.	Declare the Task Array and the Interval ID: 
let oneTimeTasks = [];
let monitoringTaksID;
//2.	Add One-Time Task Function
function addOneTimeTask(func, delay) {

  let taskId = setTimeout(() => {
    func();
    oneTimeTasks = oneTimeTasks.filter(task => task.id !== taskId);
  }, delay);
}
//3.	Run One-Time Tasks Function: Create a function named runOneTimeTasks that iterates over the oneTimeTasks array and uses setTimeout to schedule each task according to its delay.

function runOneTimeTasks() {
  oneTimeTasks.forEach(task => {
    setTimeout(() => {
      task.func();
      oneTimeTasks = oneTimeTasks.filter(t => t !== task);
    }, task.delay);
  });
}
//4.	Start Monitoring Function: Write a function named startMonitoring that uses setInterval to simulate continuous monitoring. This function should print a message every few seconds and store the interval ID in monitoringTaskId.
function startMonitoring() {
  monitoringTaksID = setInterval(() => {
    console.log("Monitoring ....");
  }, 3000);
}
//5.	Stop Monitoring Function: Implement a function named stopMonitoring that stops the continuous monitoring by using clearInterval on monitoringTaskId.
function stopMonitoring() {
  clearInterval(monitoringTaksID);
  console.log("Monitoring Stopped");
}
//6.	Start Countdown Function: Create a function named startCountdown that takes a duration parameter. Use setInterval to decrease the countdown every second and print the remaining time. Use clearInterval to stop the countdown when it reaches zero, printing a "Liftoff!" message.
function startCountdown(duration) {
  let remainingTime = duration;
  let countdownInterval = setInterval(() => {
    if (remainingTime > 0) {
      console.log(`Countdown started: ${remainingTime} seconds remaining`);
      remainingTime--;
    } else {
      clearInterval(countdownInterval);
      console.log("Liftoff! Rocket has Launched!!");
    }
  }, 1000);

}
function preLaunchSystemCheck() {
  console.log("Performinng pre-launch system check ...");
}
function finalizeLaunchSequence() {
  console.log("finalizing launch sequnece....");
}

console.log("starting mission timeline ...");
addOneTimeTask(preLaunchSystemCheck, 2000);
addOneTimeTask(finalizeLaunchSequence, 5000);

runOneTimeTasks();

setTimeout(() => {
  console.log("Starting countdown...");
  startCountdown(10);

}, 6000);

setTimeout(() => {
  stopMonitoring();

}, 4000);
