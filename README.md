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

`<button id="legalResult">Check Weather "click here"</button>`

Button: This is an additional feature, fetching weather information it calls a JavaScript function fetchWeather() that retrieves weather data.

`<div id="result"></div>`

Result Display: This `<div>` will be used to display the outcome of the calculation (i.e., the reduced release date or time saved based on good behavior days).

`<footer>`

Footer Text: Includes a disclaimer note that explains how the calculation is based on the assumption that every 30 days of good behavior results in a reduction.

CSS