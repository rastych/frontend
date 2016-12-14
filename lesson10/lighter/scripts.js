'use strict';
(function () {
    var light = document.querySelectorAll('.light'),
        red = document.getElementById('red'),
        yellow = document.getElementById('yellow'),
        green = document.getElementById('green'),
        i;

    for(i = 0; i < light.length; i++) {
        light[i].addEventListener('click', function () {
            red.style.background = '';
            yellow.style.background = '';
            green.style.background = '';
            switch(this.id) {
                case 'red':
                    red.style.background = 'red';
                    break;
                case 'yellow':
                    yellow.style.background = 'yellow';
                    break;
                case 'green':
                    green.style.background = 'green';
                    break;
            }
        });
    }
})();