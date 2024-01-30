// 1
const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index]);
};

// 2
const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;

for (let index = 0; index < numbers.length; index += 1) {
    result += numbers[index];
};

console.log(result);

// 3
const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;

for (let index = 0; index < numbers.length; index += 1) {
 sum += numbers[index];
};

let average = sum / numbers.length;

console.log(average);

// 4
const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;

for (let index = 0; index < numbers.length; index += 1) {
    result += numbers[index];
};

result = result / numbers.length;

if (result > 20) {
    console.log('O valor da média aritmética é maior que 20');
} else {
    console.log('O valor da média aritmética é menor ou igual a 20')
};

// 5
const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let higherNumber = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
    if (numbers[index] > higherNumber) {
        higherNumber = numbers[index];
    }
};

console.log(higherNumber);

// 6
const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 !== 0) {
        result += 1;
    }
};

if (result === 0) {
    console.log('nenhum valor ímpar encontrado');
} else {
    console.log(result);
};

// fatorial
let fatorial = 1;

for (let index = 10; index > 0; index -= 1) {
    fatorial *= index;
};

console.log(fatorial);

// inverter palavra
let word = 'tryber';
let reverseWord = '';

reverseWord = word.split('').reverse().join('');

console.log(reverseWord);

// asteriscos 1
let n = 5;
let symbol = '*';
let inputLine = '';

for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
    inputLine = inputLine + symbol;
};

for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
    console.log(inputLine);
};

// piramide asteriscos
let size = 5;
let symbol = '*';
let inputline = '';

for (let lineIndex = 0; lineIndex <= size; lineIndex += 1) {
    inputLine = inputLine + symbol;
    };
    console.log(inputLine);