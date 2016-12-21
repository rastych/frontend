/**
 * Created by IlyaLitvinov on 11.12.16.
 */
/**
 * @param {String} rootElement . || #
 * */
class Lighter {
    constructor(rootElement, isOn) {
        this.baseElement = document.querySelector(rootElement);
        this.circles = Array.prototype.slice.call(this.baseElement.querySelectorAll('.circle'));
        this.switcher = this.baseElement.querySelector('.switcher');
        this.enabled = isOn;
        if (this.enabled) {
            this.switcher.innerHTML = "On";
            this.switcher.style.background = "green";
            this.startTimer();
        } else {
            this.switcher.innerHTML = "Off";
            this.switcher.style.background = "red";
        }
        this.handleEvents();
    }

    switchOn(el) {
        el.classList.add('active');
    }

    switchOff() {
        this.circles.forEach((item) => {
            item.classList.remove('active');
        })
    }

    startTimer() {
        this.timer = setInterval(() => {
            if (this.counter < this.circles.length - 1) {
                this.counter++
            } else {
                this.counter = 0;
            }
            this.changeColor(this.circles[this.counter]);
        }, 1000);
    }

    stopTimer() {
        clearInterval(this.timer);
    }

    changeColor(el) {
        this.switchOff();
        this.switchOn(el);
    }

    handleEvents() {
        this.circles.forEach((item) => {
            item.addEventListener('click', () => {
                if (this.enabled) {
                    this.switchOff();
                    this.switchOn(item);
                }
            });
            item.addEventListener('mouseenter', () => {
                this.stopTimer();
            });
            item.addEventListener('mouseleave', () => {
                if (this.enabled) {
                    this.stopTimer();
                    this.startTimer();
                }
            });
        });
        this.switcher.addEventListener('click', () => {
            this.enabled = !this.enabled;
            if (this.enabled) {
                this.switcher.innerHTML = "On";
                this.switcher.style.background = "green";
                this.startTimer();
                this.handleEvents();
            } else {
                this.switcher.innerHTML = "Off";
                this.switcher.style.background = "red";
                this.switchOff();
                this.stopTimer();
            }
        });
    }
}

const lighter = new Lighter('.first', true);
const lighter2 = new Lighter('.second', false);