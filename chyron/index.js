const textArray = [
	'First text',
	'Second text',
	'Third text',
	// Add more text items as needed
];

let currentIndex = 0;

function displayText() {
	if (currentIndex < textArray.length) {
		console.log(textArray[currentIndex]);
		currentIndex++;
		setTimeout(displayText, 20000); // 20 seconds in milliseconds
	}
}

displayText(); // Start displaying texts
