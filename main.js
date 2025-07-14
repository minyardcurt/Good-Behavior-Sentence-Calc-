//I have been working on the calculateRealGoodTime function on spare time for since berfore I started your class. 
  // I revised it many times but this is the first time it has been fully functional and correct.
// the first proto type only calculated 16 days good time a month, but this version is controled by user input.

document.getElementById('calculateBtn').addEventListener('click', calculateRealGoodTime);

function calculateRealGoodTime() {
  const todayVal = document.getElementById('today').value;
  const releaseVal = document.getElementById('release').value;
  const goodBehaviorDaysVal = document.getElementById('goodBehaviorDays').value;
  const result = document.getElementById('result');
  
  const goodBehaviorDays = parseInt(goodBehaviorDaysVal, 10);
  if (isNaN(goodBehaviorDays) || goodBehaviorDays <= 0) {
    result.textContent = "Please enter a valid number for Good Behavior Days.";
    return;
  }

  const today = new Date(todayVal);
  const originalRelease = new Date(releaseVal);

  if (isNaN(today.getTime()) || isNaN(originalRelease.getTime()) || originalRelease <= today) {
    result.textContent = "Please enter a valid future release date.";
    return;
  }

  let currentDate = new Date(today);
  let totalTimeRemaining = Math.floor((originalRelease - today) / (1000 * 60 * 60 * 24));
  let monthsServed = 0;

  while (totalTimeRemaining > 0) {
    if (totalTimeRemaining <= 30) {
      currentDate.setDate(currentDate.getDate() + totalTimeRemaining);
      monthsServed++;
      break;
    }

    monthsServed++;
    currentDate.setDate(currentDate.getDate() + 30);
    totalTimeRemaining -= 30;
    totalTimeRemaining -= goodBehaviorDays;
  }

  result.textContent = `New Release Date: ${currentDate.toDateString()} (after serving ${monthsServed} month${monthsServed > 1 ? 's' : ''} and earning ${goodBehaviorDays} day${goodBehaviorDays > 1 ? 's' : ''}/month of good behavior credit)`;
}
