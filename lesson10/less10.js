/**
 * Created by rastych on 11/28/16.
 */
'use strict';
(function () {
    var lighter = document.querySelector('.lighter'),
        topDisplay = document.querySelector('.top'),
        bottomDisplay = document.querySelector('.bottom'),
        btns = lighter.querySelectorAll('.btn'),
        operator = [0],
        i;
        function calc(a, b, operator) {
            debugger;
            a = +a;
            b = +b;
            switch(operator) {
                case "+":
                    return a + b;
                    break;
                case "-":
                    return a - b;
                    break;
                case "*":
                    return a * b;
                    break;
                case "/":
                    return a / b;
                    break;
                case "%":
                    return a * 0.01 * b;
                    break;
            }
        }
    for(i = 0; i < btns.length; i++) {
        btns[i].addEventListener('click', function () {
            bottomDisplay.value += this.innerHTML;
            console.log(bottomDisplay.value);
            if(this.innerHTML === "+" || this.innerHTML === "-" || this.innerHTML === "*" || this.innerHTML === "/" || this.innerHTML === "%") { //отрубаю ввод операнда
                operator.push(this.innerHTML); //знак операции сохраняю;
                if (topDisplay.value === '') {
                    topDisplay.value = bottomDisplay.value;
                    bottomDisplay.value = '';
                } else {
                    debugger;
                    operator.shift();
                    topDisplay.value = calc(parseFloat(topDisplay.value), parseFloat(bottomDisplay.value), operator[0]);
                    bottomDisplay.value = '';
                }
            }
            else if (this.innerHTML === "=") {
                operator.shift();
                bottomDisplay.value = calc(parseFloat(topDisplay.value), parseFloat(bottomDisplay.value), operator[0]);
                topDisplay.value = '';
            }
            else if (this.innerHTML === "AC") {
                topDisplay.value = '';
                bottomDisplay.value = '';
                operator = [0];
            }
        });
    }
})();