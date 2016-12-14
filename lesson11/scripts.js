'use strict';
//(() => {
//    const lighter = document.querySelector('.lighter-wrapper');
//    const circles = Array.prototype.slice.call(lighter.querySelectorAll('.circle'));
//    let interval = null;
//    let counter = 0;
//
//    function switchOn(el) {
//        el.classList.add('active');
//    }
//
//    function switchOff() {
//        circles.forEach((item) => {
//            item.classList.remove('active');
//        });
//    }
//
//    function _setInterval() {
//        interval = setInterval(function () {
//            if (counter < circles.length-1) {
//                counter++
//            } else {
//                counter = 0;
//            }
//
//            changeColor(circles[counter]);
//        }, 1000)
//    }
//
//    function handleEvents() {
//        circles.forEach((item, i) => {
//            item.addEventListener('click', function () {
//                counter = i;
//                changeColor(this);
//            });
//        });
//
//        lighter.addEventListener('mouseenter', () => {
//            killInterval();
//        });
//
//        lighter.addEventListener('mouseleave', () => {
//            console.log("Mouse leave");
//            _setInterval();
//        });
//        lighter.addEventListener('mouseout', () => {
//            console.log("Mouse out");
//        });
//    }
//
//    function changeColor(el) {
//        switchOff();
//        switchOn(el);
//    }
//
//    function killInterval() {
//        clearInterval(interval);
//    }
//
//    handleEvents();
//    _setInterval();
//})();
