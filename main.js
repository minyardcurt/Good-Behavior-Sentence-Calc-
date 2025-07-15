document.getElementById('calculateBtn').addEventListener('click', calculateRealGoodTime);
document.getElementById('resetBtn').addEventListener('click', resetForm);
document.getElementById('fetchWeather').addEventListener('click', fetchWeather);

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

function resetForm()  {
  document.getElementById('today').value = '';
  document.getElementById('release').value = '';
  document.getElementById('goodBehaviorDays').value = "";
  document.getElementById('result').textContent = '';
  document.getElementById('fetchWeather').innerHTML = '';
}

async function fetchWeather() {
  const city = prompt("Enter a city name:");
  if (!city) return; 

const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=imperial`;

  try {
   const response = await fetch(url);
    if (!response.ok) throw new Error("City not found");

    const data = 
 }
}