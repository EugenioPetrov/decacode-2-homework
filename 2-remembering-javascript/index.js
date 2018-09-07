const numbers = process.argv.slice(2);

let numbersArrayInteger = [];
for (let i = 0; i<numbers.length; i++){
    numbersArrayInteger.push(parseInt(numbers[i]));
}
console.log(numbersArrayInteger);

let sumOfNumbers = 0;
for (let i = 0; i < numbersArrayInteger.length; i++) {
    sumOfNumbers += numbersArrayInteger[i];
}
console.log('Сумма: ' + sumOfNumbers);

let average = sumOfNumbers / (numbersArrayInteger.length);
console.log('Среднее арифметическое: ' + average);