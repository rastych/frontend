/**
 * Created by rastych on 11/28/16.
 */
'use strict';
(function () {
    var lighter = document.querySelector('.lighter'),
        input = lighter.querySelector('input'),
        btns = lighter.querySelectorAll('.btn'),
        operator,
        a = 0,
        i;

    for(i = 0; i < btns.length; i++) {
        btns[i].addEventListener('click', function () {
            input.value += this.innerHTML;
            if(this.innerHTML === "+" || this.innerHTML === "-" || this.innerHTML === "*" || this.innerHTML === "/" || this.innerHTML === "%") { //отрубаю ввод операнда
                operator = input.value.slice(-1); //знак операции сохраняю
                a = parseFloat(input.value.slice(0, -1)); //кладу операнд в "карман"
                input.value = '';
            }
            else if(this.innerHTML ==="=") {
                input.value = calc(a, parseFloat(input.value.slice(0, -1)), operator); //выполняю операцию карман и текущий инпут
            }
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
                    default:
                        return input; //если нажать '=' сразу после ввода значения - вывожу его
                        break;
                }
            }
        });
    }
})();