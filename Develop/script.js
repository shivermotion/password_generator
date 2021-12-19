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
	let passwordArray = [];

	//prompts
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
			console.log(regEx);
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
		} else {
			console.log(regEx);
			generateString();
		}
	};

	//generates string from options user inputs
	generateString = () => {
		// Get random index from array of options
		for (let i = 0; i < length; i++) {
			let randomIndex = Math.floor(
				Math.random() * regEx.length
			);

			passwordArray.push(regEx[randomIndex]);
			console.log(passwordArray.toString());
		}

		//initiate
		writePassword();
	};
	//writes password to HTML element
	writePassword = () => {
		alert("click ok to see your newly generated password!");
		let password = passwordArray.join("");
		let passwordText = document.querySelector("#password");
		passwordText.value = password;
	};

	// initiate 1st prompt
	promptPassLength();
};

// button html hooks
let generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
