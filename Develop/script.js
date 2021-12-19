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
	let length = [];

	promptPassLength = () => {
		let passLength = parseInt(
			prompt(
				"character length of password?",
				"minimum of 8 required, maximum of 128"
			)
		);

		if (passLength >= 8 && passLength < 128) {
			length.push(passLength);
			console.log(length);
			promptHasLowerCase();
		} else {
			alert(
				"must be minimum of 8 and no more than 128 characters in length"
			);
		}
	};

	promptHasLowerCase = () => {
		let hasLowerCase = confirm(
			"will it include lowercase letters?"
		);

		if (hasLowerCase === true) {
			//push lowercase letters into regEx array
			regEx.push(...lowerLetters);
			console.log(regEx);
			promptHasUpperCase();
		} else {
			console.log(regEx);
			promptHasUpperCase();
		}
	};

	promptHasUpperCase = () => {
		let hasUpperCase = confirm(
			" will it include uppercase letters?"
		);

		if (hasUpperCase === true) {
			regEx.push(...upperLetters);
			console.log(regEx);
			promptHasNumbers();
		} else {
			promptHasNumbers();
			console.log(regEx);
		}
	};

	promptHasNumbers = () => {
		let hasNumbers = confirm("will it include numbers?");

		if (hasNumbers === true) {
			regEx.push(...validNum);
			//log
			console.log(regEx);
			promptHasSpecChar();
		} else {
			promptHasSpecChar();
		}
	};

	promptHasSpecChar = () => {
		let hasSpecChar = confirm(
			" will it include special characters?"
		);

		if (hasSpecChar === true) {
			regEx.push(...specChar);
			console.log(regEx);
			generateString();
		}
	};

	generateString = () => {
		let password = [];
		// Get random index from array of options
		for (let i = 0; i < length; i++) {
			let randomIndex = Math.floor(
				Math.random() * regEx.length
			);

			password.push(regEx[randomIndex]);
			console.log(password.toString());
		}

		return password.toString();
	};
	// initiate 1st prompt
	promptPassLength();
};
// Assignment Code
let generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);

// Write password to the #password input
function writePassword() {
	let password = generatePassword();
	let passwordText = document.querySelector("#password");

	passwordText.value = password;
}
// let hasUpperCase = confirm(" will it include uppercase letters?");
// let hasNumbers = confirm("will it include numbers?");
// let hasSpecChar = confirm(" will it include special characters?");

// // function generatePassword() {
// // 	//Password length prompt and 1st prompt
// // 	let passLength = parseInt(
// // 		prompt(
// // 			"character length of password?",
// // 			"minimum of 8 required, maximum of 128"
// // 		)
// // 	);
// // 	// if input is valid

// // 	if (passLength >= 8 && passLength < 128) {
// // 		//push password length into finalChoices array
// // 		finalChoices.push(passLength);
// // 		console.log(finalChoices);
// // 		lowerCasePrompt();
// // 	} else {
// // 		alert(
// // 			"must be minimum of 8 and no more than 128 characters in length"
// // 		);
// // 	}
// // }
// // //Lowercase prompt
// // lowerCasePrompt = () => {
// // 	let isLowerCase = confirm("will it include lowercase letters?");

// // 	//(push next prompt no matter the answer)
// // 	if (isLowerCase === true) {
// // 		//push lowercase letters into finalChoices array
// // 		finalChoices.push(...lowerLetters);
// // 		console.log(finalChoices);
// // 		isUpperCasePrompt();
// // 	} else {
// // 		isUpperCasePrompt();
// // 		console.log(finalChoices);
// // 	}
// // };

// // // Uppercase prompt
// // isUpperCasePrompt = () => {
// // 	let isUpperCase = confirm(" will it include uppercase letters?");
// // 	//push next prompt no matter the answer
// // 	if (isUpperCase === true) {
// // 		//push upperletters
// // 		finalChoices.push(...upperLetters);
// // 		console.log(finalChoices);
// // 		hasNumbersPrompt();
// // 	} else {
// // 		hasNumbersPrompt();
// // 		console.log(finalChoices);
// // 	}
// // };

// // //numbers prompt
// // hasNumbersPrompt = () => {
// // 	let hasNumbers = confirm("will it include numbers?");
// // 	//push next prompt no matter the answer
// // 	if (hasNumbers === true) {
// // 		finalChoices.push(...validNum);
// // 		//log
// // 		console.log(finalChoices);
// // 		hasSpecCharPrompt();
// // 	} else {
// // 		hasSpecCharPrompt();
// // 	}
// // };

// // hasSpecCharPrompt = () => {
// // 	let hasSpecChar = confirm(" will it include special characters?");

// // 	if (hasSpecChar === true) {
// // 		finalChoices.push(...specChar);
// // 		console.log(finalChoices);
// // 	}
// // 	generatePassword();
// // };

// let passArray = [];

// // Get random index from array of options
// for (let i = 0; i < finalChoices[0]; i++) {
// 	let randomIndex = Math.floor(Math.random() * finalChoices.length);
// 	passArray.push(randomIndex);
// 	console.log(passArray);
// }

// // let randomizer = function (arr) {
// // 	let randomIndex = Math.floor(Math.random() * arr);
// // 	let rndEl = arr[randomIndex];
// // 	console.log(arr[randomIndex]);
// // 	return rndEl;
// // };

// // generateString = (finalChoices) => {
// // 	let length = finalChoices[0];
// // 	let passArray = [];
// // 	for (let i = 0; i < length; i++) {
// // 		let selectedChar = randomizer(finalChoices);
// // 		console.log(finalChoices);
// // 		passArray.push(selectedChar);
// // 	}
// // 	let password = passArray.join("");
// // 	console.log(password);
// // 	let passwordText = document.querySelector("#password");

// // 	passwordText.value = password;
// // };

// // // Assignment Code
// // let generateBtn = document.querySelector("#generate");

// // // // Write password to the #password input
// // // function writePassword() {
// // // 	let password = generateString();

// // // 	let passwordText = document.querySelector("#password");

// // // 	passwordText.value = password;
// // // }

// // // Add event listener to generate button
// // generateBtn.addEventListener("click", (event) => {
// // 	event.preventDefault();
// // 	generatePassword();
// // });
