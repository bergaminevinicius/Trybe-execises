let num1 = 5;
let num2 = 2;
let num3 = 8;

if (num1 > num2 && num1 > num3){
    console.log('O maior número é: ' +num1);
} else if (num2 > num1 && num2 > num3) {
    console.log('O maior número é: ' + num2);
} else if (num3 > num1 && num3 > num2){
    console.log('O maior número é: ' +num3);
} else {
    console.log('IIHH, tem números iguais!');
};