/**
 * Created by rastych on 11/28/16.
 */
'use strict';
(function () {
    var lighter = document.querySelector('.lighter'),
        topDisplay = lighter.querySelector('.top'),
        bottomDisplay = lighter.querySelector('.bottom'),
        btns = lighter.querySelectorAll('.btn'),
        operator = [0],
        a,
        i;

    for(i = 0; i < btns.length; i++) {
        btns[i].addEventListener('click', function () {
            bottomDisplay.value += this.innerHTML;
            if(this.innerHTML === "+" || this.innerHTML === "-" || this.innerHTML === "*" || this.innerHTML === "/" || this.innerHTML === "%") { //отрубаю ввод операнда
                operator.push(this.innerHTML); //знак операции сохраняю;
                if (topDisplay.value === '') {
                    topDisplay.value = bottomDisplay.value;
                    bottomDisplay.value = '';
                } else {
                    operator.shift();
                    console.log(operator);
                    topDisplay.value = calc(parseFloat(topDisplay.value), parseFloat(bottomDisplay.value), operator[0]);
                    bottomDisplay.value = '';
                }
            }
            else if (this.innerHTML === "=") {
                operator.shift();
                console.log(operator);
                bottomDisplay.value = calc(parseFloat(topDisplay.value), parseFloat(bottomDisplay.value), operator[0]);
                topDisplay.value = '';
                console.log(operator);
            }
            else if (this.innerHTML === "C") {
                topDisplay.value = '';
                bottomDisplay.value = '';
                operator = [];
            }
        });
        function calc(a, input, operator) {
            switch(operator) {
                case "+":
                    return a + input;
                    break;
                case "-":
                    return a - input;
                    break;
                case "*":
                    return a * input;
                    break;
                case "/":
                    return a / input;
                    break;
                case "%":
                    return a * 0.01 * input;
                    break;
            }
        }
    }
})();