/*var calc = () => {
    var a = (parseInt(prompt("a"))),
        b = (parseInt(prompt("b"))),
        operator = prompt("operator");

        if (operator === "+") {
            return add(a, b);
        } else if (operator === "-") {
            return a-b;
        } else if (operator === "*") {
            return a*b;
        } else if (operator === "/") {
            return a/b;
        } else {
            throw Error("Not a operator");
        }
};

var add = (a, b) => {
    if(typeof a !== "number" || typeof b !== "number") {
        throw Error ("Not a numbers");
    } else {
        return a+b;
    }
};

var logger = (data, type) => {
    if(type === "console") {
        console.log(data);
    } else {
        document.write(data);
    }
};*/

// logger (calc(), console);

// var counter = function () {
//     var i = 0;
//     return function () {
//         document.write(i);
//         i++;
//     }
// }();
//
// counter();
// counter();
// counter();
// counter();
// counter();

arr = ['bananas', 'apples', 'grape'];

function find(arr, key) {
    for (i = 0; i < arr.length; i++) {
        if (arr[i] === key) {
            return true;
        } else {
            return false;
        }
    }
}

document.write(find(arr, "bananas"));
