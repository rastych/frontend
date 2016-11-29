/**
 * Created by rastych on 11/28/16.
 */
'use strict';
(function () {
    var lighter = document.querySelector('.lighter'),
        topDisplay = lighter.querySelector('.top'),
        bottomDisplay = lighter.querySelector('.bottom'),
        btns = lighter.querySelectorAll('.btn'),
        operator,
        a,
        i;

    for(i = 0; i < btns.length; i++) {
        btns[i].addEventListener('click', function () {
            bottomDisplay.value += this.innerHTML;
            if(this.innerHTML === "+" || this.innerHTML === "-" || this.innerHTML === "*" || this.innerHTML === "/" || this.innerHTML === "%" || this.innerHTML ==="=") { //отрубаю ввод операнда
                operator = bottomDisplay.value.slice(-1); //знак операции сохраняю;
                if (topDisplay.value === '') {
                    topDisplay.value = parseFloat(bottomDisplay.value);
                    bottomDisplay.value = '';
                } else {
                    console.log(this.innerHTML)
                    a = parseFloat(bottomDisplay.value);
                    topDisplay.value = calc(parseFloat(topDisplay.value), a, operator);
                    bottomDisplay.value = '';
                }
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