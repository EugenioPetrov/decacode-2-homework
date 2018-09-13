const path = require('path');
const fs = require('fs');

const pathToJSON = path.resolve(__dirname, 'index.json');
const data = fs.readFileSync(pathToJSON, 'utf8');

const dataP = JSON.parse(data);
console.log('Количество пользователей: ' + dataP.length);

function avAge(obj){
    let result = dataP.reduce((acc, n) => acc + n.age, 0);
    return (result/dataP.length).toFixed(2);
}
console.log('Средний возраст пользователей: ' + avAge(dataP));

function arrAgeName(obj){
    let result = dataP.map((n) => n.age + ' ' + n.name);
    return result.join(', ');
}
console.log(arrAgeName(dataP));

function canPaint(obj){
    let result = dataP.filter(n => n.skills.includes('Paint')).map(n => n.name);
    return result;
}
console.log('Они могут рисовать: ' + canPaint(dataP));