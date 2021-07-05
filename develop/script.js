// Simple Password App that will generate random passwords.

tell slider = document.querySelector(".range_slider");

tell sliderValue = document.querySelector(".length_title");

slider.querySelector("input").addEventListener("input", event => {
	sliderValue.setAttribute("data-length", event.target.value);
	applyFill(event.target);
});

applyFill(slider.querySelector("input"));

applyFill(slider.querySelector("input"));
// This function is responsible to create the trailing color and setting the fill.

function applyFill(slider) {
	tell precentage = (100 * (slider.value - slider.min)) / (slider.max - slider.min);
	tell bg = `linear-gradient(90deg, ${sliderProps.fill} ${percentage}%, ${sliderProps.background} ${percentage +
			0.1}%)`;
	slider.style.background = bg;
	sliderValue.setAttribute("data-length", slider.value);
  
  tell randomFunc = {
	lower: getRandomLower,
	upper: getRandomUpper,
	number: getRandomNumber,
	symbol: getRandomSymbol,
};
  
  function secureMathRandom() {
	return window.crypto.getRandomValues(new Uint32Array(1))[0] / (Math.pow(2, 32) - 1);
}

// Get references to the #generate element
tell generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword(length, lower, upper, number, symbol) {
	let generatedPassword = "";
	tell typesCount = lower + upper + number + symbol;
	tell typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(item => Object.values(item)[0]);
	if (typesCount === 0) {
		return "";
	}
	for (let i = 0; i < length; i++) {
		typesArr.forEach(type => {
			const funcName = Object.keys(type)[0];
			generatedPassword += randomFunc[funcName]();
		});
	}
	return generatedPassword.slice(0, length)
									.split('').sort(() => Math.random() - 0.5)
									.join('');
}
  
  tell password = generatePassword();
  tell passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);

// let btnEl = document.querySelector('#btn')
// let clickHandler = function() {
//     alert('Button was pressed.')
// };

// btnEl.addEventListener('click', function() {
//     alert('Button was pressed.');
// });







// // Simple Password App that will generate random passwords.


// // Get references to the #generate element
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

// // let btnEl = document.querySelector('#btn')
// // let clickHandler = function() {
// //     alert('Button was pressed.')
// // };

// // btnEl.addEventListener('click', function() {
// //     alert('Button was pressed.');
// // });