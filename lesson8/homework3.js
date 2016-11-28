/**
 * Created by rastych on 11/20/16.
 */
var students = ["Илья", "Greg", "Алина"];

for (i = 0; i < students.length; i++) {
    for (j = 0; j < students[i].length; j++) {
        // document.write(students[i].charAt(j) , '=' , students[i].charCodeAt(j) + '<br/>');
        if (students[i].charCodeAt(j) < 1040 || students[i].charCodeAt(j)>1103) {
            document.write('Символ ' + students[i].charAt(j) + ' слова ' + students[i] + ' - не кириллица<br />');
        }
        else {
            document.write("Символ " + students[i].charAt(j) + ' слова ' + students[i] + ' - кириллица <br />');
        }
    }
}
//********************
var countries = ["Украина", "Германия", "США", "Великобритания", "Португалия"];
var population = ["45.4M", "80.6M", "320M", "64.7M", "10.6M"];

for(i = 0; i < countries.length; i++) {
    document.write("Население страны " + countries[i] + " - " + population[i] + "<br />");
}
//*******************************
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var a = prompt("enter a");
var b = prompt("enter b");

function filterRange(arr, a, b) {
    var arrFiltered = [];
    for(i = 0; i < arr.length; i++) {
        if(arr[i] >= a && arr[i] <=b) {
            arrFiltered.push(arr[i]);
        }
    }
    return arrFiltered;
}

arrFiltered = filterRange(arr, a, b);
document.write(arrFiltered + '<br />');

//******************************

str = prompt("enter string");

function camelize(str) {
    var camelArr = str.split('-');

    for (var i = 1; i < camelArr.length; i++) {
        // преобразовать: первый символ с большой буквы
        camelArr[i] = camelArr[i].charAt(0).toUpperCase() + camelArr[i].slice(1);
    }

    return camelArr.join('');
}

camelArr = camelize(str);

document.write(camelArr + '<br />');
//*************
function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
}

document.write('случайное число - ' + randomInteger(5, 10));
//************
var user = {};
user.name = ('Вася');
user.surname = ('Петров');
user.name = ('Сергей');
delete user.name
//****************
function isEmpty(obj) {
    for (var key in obj) {
        return false;
    }
    return true;
}
//*********

var salaries = {"Vasia": 10000, "Petya": 20000, "Kolya": 30000, "Oleg": 25000};

var total = 0;
for (var name in salaries) {
    total += salaries[name];
}

document.write(total);
//****
var maxSalary = 0;
var maxSalaryName = 0;
for (var name in salaries) {
    if (maxSalary < salaries[name]) {
        maxSalary = salaries[name];
        maxSalaryName = name;
    }
}

document.write(maxSalary);
document.write(maxSalaryName);
//******
var menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function multiplyNumeric(obj) {
    for (var key in obj) {
        if (isNumeric(obj[key])) {
            obj[key] *= 2;
        }
    }
}