/**
 * Created by rastych on 12/11/16.
 */
class Lighter {
    constructor(rootElement, isOn) {
        this.baseElement = document.querySelector(rootElement);
        this.circles = Array.prototype.slice.call(this.baseElement.querySelectorAll('.circle'));
        this.switcher = this.baseElement.querySelector('.switcher');
        this.enabled = isOn;

        if(this.enabled) {
            this.baseElement.classList.add('isEnabled');
        } else {
            this.baseElement.classList.remove('isEnabled');
        }
        this.handleEvents()
    }

    switchOn(el) {
        el.classList.add('active');
    }

    switchOff() {
        this.circles.forEach((item, i) => {
            item.classList.remove('active');
        })
    }

    handleEvents() {
        this.circles.forEach((item) => {
            item.addEventListener('click', () => {
                if (this.enabled) {
                    this.switchOff();
                    this.switchOn(item)
                }
            });
            //Потеря контекста
            // item.addEventListener('click', function (event) {
            //     console.dir(self);
            //     console.dir(this);
            //     self.switchOn(this);
            //     // this.switchOn(event.target)
            // });
        });
        this.switcher.addEventListener('click', () => {
            this.enabled = !this.enabled;
            this.baseElement.classList.toggle('isEnabled');
            this.switchOff();
            console.log(this.enabled );
        })
    }
}

const lighter = new Lighter('.first', true);
const lighter2 = new Lighter('.second', false);
const lighter3 = new Lighter('.third', true);