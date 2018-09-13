const path = require('path');
const fs = require('fs');

const pathToJSON = path.resolve(__dirname, 'index.json');
const data = fs.readFileSync(pathToJSON, 'utf8');

const dataP = JSON.parse(data);

function averageAge(obj) {
    let totalAge = 0;
    for (let i = 0; i < dataP.length; i++) {
    totalAge += dataP[i].age;}
    let avAge = totalAge/dataP.length;
    return avAge.toFixed(2);
}

function arrAgeName(obj) {
    let arr = [];
    for (let i = 0; i < dataP.length; i++) {
       arr.push(dataP[i].age + ' ' + dataP[i].name) }
    return arr;
}

function canPaint(obj) {
    let arr = [];
    for (let i = 0; i < dataP.length; i++) {
       if(dataP[i].skills.includes("Paint")) {arr.push(dataP[i].name)}
    }
    return arr;
}

console.log('Количество пользователей: ' + dataP.length);
console.log('Средний возраст пользователей: ' + averageAge(dataP));
console.log(arrAgeName(dataP).join(', '));
console.log('Вот кто умеет рисовать: ' + canPaint(dataP));