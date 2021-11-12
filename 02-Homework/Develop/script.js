//Prompt
promptWindow = window.alert(
	"click the red button to generate a password. Password can be between 8-128 characters in length. A-Z,0-9, and including special characters"
);

// Assignment Code

let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
	let password = generatePassword();
	let passwordText = document.querySelector("#password");

	passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

let generatePassword = function () {
	let array =
		"1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM !#$%&'()*+,-./:;<=>?@[^_`{|}~";
	array.split("");
	console.log(array.split(""));

	for (let i = 0; i < 8; i++) {
		console.log(i);
		let password = [];
		password += array[i];
	}
	return password.toString();
};
