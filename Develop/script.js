



generatePassword = () => {
	let regEx = [];
	let validNum = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
	let lowerLetters = [
		"a",
		"b",
		"c",
		"d",
		"e",
		"f",
		"g",
		"h",
		"i",
		"j",
		"k",
		"l",
		"m",
		"n",
		"o",
		"p",
		"q",
		"r",
		"s",
		"t",
		"u",
		"v",
		"w",
		"x",
		"y",
		"z",
	];
	let upperLetters = [
		"A",
		"B",
		"C",
		"D",
		"E",
		"F",
		"G",
		"H",
		"I",
		"J",
		"K",
		"L",
		"M",
		"N",
		"O",
		"P",
		"Q",
		"R",
		"S",
		"T",
		"U",
		"V",
		"W",
		"X",
		"Y",
		"Z",
	];
	let specChar = ["!", "@", "#", "$", "%", "^", "&", "*"];

	let passLength = parseInt( prompt(
	"character length of password?",
	"minimum of 8 required, maximum of 128"
	));
	
	if (passLength >= 8 && passLength < 128) {
		console.log(passLength);
		prompthasLowerCase();
	} else {
		alert(
		"must be minimum of 8 and no more than 128 characters in length"
		);
	}

	hasLowerCase = () => { 
		confirm("will it include lowercase letters?");
			if (isLowerCase === true) {
		//push lowercase letters into finalChoices array
		finalChoices.push(...lowerLetters);
		console.log(finalChoices);
		isUpperCasePrompt();
	} else {
		hasUpperCase();
		console.log(finalChoices);
	}
	
	}

	let hasUpperCase = confirm(" will it include uppercase letters?");
	let hasNumbers = confirm("will it include numbers?");
	let hasSpecChar = confirm(" will it include special characters?");

	












// function generatePassword() {
// 	//Password length prompt and 1st prompt
// 	let passLength = parseInt(
// 		prompt(
// 			"character length of password?",
// 			"minimum of 8 required, maximum of 128"
// 		)
// 	);
// 	// if input is valid

// 	if (passLength >= 8 && passLength < 128) {
// 		//push password length into finalChoices array
// 		finalChoices.push(passLength);
// 		console.log(finalChoices);
// 		lowerCasePrompt();
// 	} else {
// 		alert(
// 			"must be minimum of 8 and no more than 128 characters in length"
// 		);
// 	}
// }
// //Lowercase prompt
// lowerCasePrompt = () => {
// 	let isLowerCase = confirm("will it include lowercase letters?");

// 	//(push next prompt no matter the answer)
// 	if (isLowerCase === true) {
// 		//push lowercase letters into finalChoices array
// 		finalChoices.push(...lowerLetters);
// 		console.log(finalChoices);
// 		isUpperCasePrompt();
// 	} else {
// 		isUpperCasePrompt();
// 		console.log(finalChoices);
// 	}
// };

// // Uppercase prompt
// isUpperCasePrompt = () => {
// 	let isUpperCase = confirm(" will it include uppercase letters?");
// 	//push next prompt no matter the answer
// 	if (isUpperCase === true) {
// 		//push upperletters
// 		finalChoices.push(...upperLetters);
// 		console.log(finalChoices);
// 		hasNumbersPrompt();
// 	} else {
// 		hasNumbersPrompt();
// 		console.log(finalChoices);
// 	}
// };

// //numbers prompt
// hasNumbersPrompt = () => {
// 	let hasNumbers = confirm("will it include numbers?");
// 	//push next prompt no matter the answer
// 	if (hasNumbers === true) {
// 		finalChoices.push(...validNum);
// 		//log
// 		console.log(finalChoices);
// 		hasSpecCharPrompt();
// 	} else {
// 		hasSpecCharPrompt();
// 	}
// };

// hasSpecCharPrompt = () => {
// 	let hasSpecChar = confirm(" will it include special characters?");

// 	if (hasSpecChar === true) {
// 		finalChoices.push(...specChar);
// 		console.log(finalChoices);
// 	}
// 	generatePassword();
// };


	let passArray = [];

	// Get random index from array of options
	for (let i = 0; i < finalChoices[0]; i++) {
		let randomIndex = Math.floor(
			Math.random() * finalChoices.length
		);
		passArray.push(randomIndex);
		console.log(passArray);
	}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
	var password = generatePassword();
	var passwordText = document.querySelector("#password");

	passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// let randomizer = function (arr) {
// 	let randomIndex = Math.floor(Math.random() * arr);
// 	let rndEl = arr[randomIndex];
// 	console.log(arr[randomIndex]);
// 	return rndEl;
// };

// generateString = (finalChoices) => {
// 	let length = finalChoices[0];
// 	let passArray = [];
// 	for (let i = 0; i < length; i++) {
// 		let selectedChar = randomizer(finalChoices);
// 		console.log(finalChoices);
// 		passArray.push(selectedChar);
// 	}
// 	let password = passArray.join("");
// 	console.log(password);
// 	let passwordText = document.querySelector("#password");

// 	passwordText.value = password;
// };

// // Assignment Code
// let generateBtn = document.querySelector("#generate");

// // // Write password to the #password input
// // function writePassword() {
// // 	let password = generateString();

// // 	let passwordText = document.querySelector("#password");

// // 	passwordText.value = password;
// // }

// // Add event listener to generate button
// generateBtn.addEventListener("click", (event) => {
// 	event.preventDefault();
// 	generatePassword();
// });
