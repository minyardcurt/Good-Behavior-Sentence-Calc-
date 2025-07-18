
Good Behavior Sentence Reduction Calculator
This is a simple web-based tool designed to help users estimate a revised prison/jail release date based on "good behavior" sentence reductions. It is intended for use by anyone who may benifit from the estimates given.

**** Overview ****
The Good Behavior Sentence Reduction Calculator allows users to input today's date and a projected release date. It then calculates a revised release date by simulating the accrual of good behavior credits, which deducts the amount of Good Behavior days the user puts in for every month served. The calculation continues month-by-month until the adjusted release date equals or falls before the original.

This project was created by Curt Minyard, with JavaScript functions, implementing the date logic, and a good amount of CSS to liven up the feel of the app.

**** How It Works  ****
Input Fields:
Today's Date: The current date as a starting point, on that first click at the right end of the input field a soft piano solo "The Sick Doll", written by a famous composer Tchailkovsky, starts and plays in the background and a drop down calendar comes out for user friendly input, or the user can type the date in manually if desired by clicking over the preset example.

Current Release Date: Enter the originally scheduled release date by the user clicking at the right end of the input field the same instuctions apply as for the Today's Date input.

Good Behavior Days per Month: based on user input the user can go to the right end of the input field and click up or down on the appearing arrows or they can click on the left of the field and manually type that information in .

Buttons:
Calculate: Triggers the JavaScript function that calculates the new projected release date by subtracting the users input variable for days per month served.

Reset: Clears the form inputs and the displayed output/answer at the bottom.

Click Here Button that bring a drop down input field that the user can type city/county into and click OK and recieve the conditions and temprature.

Output:
Result Display: Shows the revised release date and how many months of good behavior were simulated.

**** Code Structure ****

HTML

`<label for="today"> & <input type="date" id="today">`

Label: Prompts the user to input today's date.

Input Field: Allows the user to select the current date from a date picker.

`<audio id="bachAudio" src="assets/bach.mp3" preload="auto"></audio>`

Audio Element: Preloads an audio file (Bach.mp3) for playback.

`<label for="release"> & <input type="date" id="release">`

Label: Prompts the user to input the current release date.

Input Field: Allows the user to select the release date from a date picker.

`<label for="goodBehaviorDays"> & <input type="number" id="goodBehaviorDays" value="16" min="1">`

Label: Prompts the user to input the number of good behavior days per month (used to calculate sentence reduction).

Input Field: A numeric input field where the user can specify the number of good behavior days per month, with a default value of 16.

`<button id="calculateBtn">Calculate</button>`

Button: When clicked, it triggers the calculation of the sentence reduction based on the input values. (JavaScript functionality expected to be linked).

`<button id="resetBtn">Reset</button>`

Button: Resets all the input fields to their default values, allowing the user to start a new calculation.

`<button id="weatherResult">Check Weather "click here"</button>`

Button: This button is an additional feature, fetching weather information it calls the Java Script function fetchWeather() that retrives weather data.

`<div id="result"></div>`

Result Display: This `<div>` will be used to display the outcome of the calculation (i.e., the reduced release date or time saved based on good behavior days)and the weather information.

`<footer>`

Footer Text: Includes a disclaimer note that explains how the calculation is based on the assumption that every 30 days of good behavior results in a reduction.

CSS

Basic styling for layout and accessibility.

Distinct color themes for calculate (red) and reset (blue) buttons.

A simulated fence background and a translucent rainbow colored container around the form itself to add flare to the aesthedics of the form.

JavaScript

Event Listeners:

`document.getElementById('calculateBtn').addEventListener('click', calculateRealGoodTime);: When the "calculateBtn" button is clicked, it triggers the calculateRealGoodTime()` function.

`document.getElementById('resetBtn').addEventListener('click', resetForm);`: When the "resetBtn" button is clicked, it triggers the resetForm() function to clear the form.

`document.getElementById('legalResult').addEventListener('click', fetchWeather);`: When the "legalResult" element is clicked, it triggers the fetchWeather() function to fetch weather data.

Audio Setup:

The Bach audio is looped and set to a volume of 0.4. It’s set to play when the user focuses on the "today" input field (i.e., clicks or taps on it).

The music will play continuously unless blocked by the browser.

Functionality of calculateRealGoodTime:

This function calculates a new "release date" based on the input values:

todayVal: The current date (today).

releaseVal: The original release date.

goodBehaviorDaysVal: The number of days credited for good behavior.

The function ensures that both dates are valid and that the release date is in the future.

It calculates the total number of days remaining until the release date, adjusts for good behavior days, and adds the "good behavior days" to reduce the release time, outputting the new release date.

Functionality of resetForm:

This function clears all form fields (date inputs and the result text).

Functionality of fetchWeather:

This function fetches weather data from an API (OpenWeather) based on the city entered by the user.

It asks the user for a city name via prompt(), makes a GET request to the weather API, and displays the current weather in the page’s result section.

If the city is not found or there’s an error, it displays an error message.

Reset Button:

Clears input values and the result area.

**** Disclaimer ****
The accuracy of this calculator can vary depending on exact application policies for good behavior credits.

The simulated calculation of up to 30 days per month by user input.

Use this tool as an estimate only.