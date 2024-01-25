/* 						👀 Expected output:

							Bart
							Lisa
							Maggie
							Result: ✅ SUCCESS
*/

const simpsons = [{ name: 'Bart', age: 12 }, { name: 'Lisa', age: 10 }, { name: 'Maggie', age: 1 }];

function outputName(simpson) {
	console.log(simpson.name);
}

simpsons.forEach((simpson) =>{
	outputName(simpson)
})

var result = 0;

function computeInput(input) {
	if (input.age === getInputAge(input)) {
		result += 1; 
	}
}

simpsons.forEach((simpson) => {
	computeInput(simpson)
})

// ⛔🚫 STOP TIDYING! You're done ✅

// ⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️
// ⚠️ DO NOT MODIFY BELOW  ⚠️
// ⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️

// PRINT SUCCESS IF EXACTLY 2 INPUTS MATCH
console.log(`Result: ${result === 2 ? '✅ SUCCESS' : '❌ FAIL'}`);

function getInputAge(person) {
	switch (person.name) {
		case 'Bart':
			return 12;
		case 'Lisa':
			return 10;
		case 'Maggie':
			return '1'; // she's a baby, she's allowed to get this type wrong!
		default:
			return 0;
	}
}
