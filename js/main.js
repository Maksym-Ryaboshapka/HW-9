// Task 1

const arr = ["Mango", "Poly", "Ajax"];

function logItems(array) {
  let message = `1 - ${array[0]}`;

  for (let i = 1; i < array.length; i++) {
    message += `, ${i + 1} - ${array[i]}`;
  }

  return message;
}

console.log(logItems(arr));

// Task 2

function calculateEngravingPrice(message, pricePerWord) {
	const arrayMessage = message.split(" ");
	const price = arrayMessage.length * pricePerWord;

	return price;
}

console.log(calculateEngravingPrice('Hello World!', 45));

// Task 3

function findLongestWord(string) {
	const words = string.split(" ");
	let longestWord = words[0];

	for (const word of words) {
		if (longestWord.length < word.length) {
			longestWord = word;
		}
	}

	return longestWord;
}

console.log(findLongestWord("test string abc Hello qwerty"));

// Task 4

function formatString(string) {
  const slicedString = string.slice(0, 40);
  const formatedString = slicedString.padEnd(43, ".");

  return formatedString;
}

console.log(
  formatString(
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam consequuntur repudiandae libero, iste sequi aliquam beatae odio expedita harum repellat."
  )
);

// Task 5

function checkForSpam(message) {
	let result;
	message = message.toLowerCase();

	if (message.includes("spam") || message.includes("sale")) {
		result = true;
	} else {
		result = false;
	}

	return result;
}

console.log(checkForSpam("Sale 50%"));

// Task 6

let input;
const numbers = [];
let totalSum = 0;

do {
  input = prompt("Введіть число");

  if (isNaN(Number(input))) {
    alert("Було введено не число, спробуйте ще раз");
  } else {
    numbers.push(Number(input));
  }
} while (input !== null);

numbers.pop();

for (const number of numbers) {
  totalSum += number;
}

console.log(totalSum);

// Task 7

const logins = ["Maksym", "TestLogin1", "user537", "Hello"];
const userLogin = prompt("Введіть логін");

function isLoginValid(login) {
  let result;

  if (login.length < 4) {
    result = false;
  } else if (login.length > 16) {
    result = false;
  } else {
    result = true;
  }

  return result;
}

function isLoginUnique(allLogins, login) {
  let result;

  if (allLogins.includes(login)) {
    result = false;
  } else {
    result = true;
  }

  return result;
}

function addLogin(allLogins, login) {
  let message;

  if (isLoginValid(userLogin) === false) {
    message = alert("Помилка! Логін повинен бути від 4 до 16 символів");
  } else {
    if (isLoginUnique(logins, userLogin) === false) {
      message = alert("Такий логін уже використовується!");
    } else {
      allLogins.push(login)

      message = alert("Логін успішно доданий!");
    }
  }

  return message;
}

addLogin(logins, userLogin);