class SlideHandler {
    constructor() {
        document.addEventListener('touchstart', this.handleTouchStart.bind(this), false);
        document.addEventListener('touchmove', this.handleTouchMove.bind(this), false);

        this.xDown = null;
        this.yDown = null;
    }


    getTouches(evt) {
        return evt.touches ||             // browser API
            evt.originalEvent.touches; // jQuery
    }


    handleTouchStart(evt) {

        this.xDown = this.getTouches(evt)[0].clientX;
        this.yDown = this.getTouches(evt)[0].clientY;
    };


    handleTouchMove(evt) {
        if (!this.xDown || !this.yDown) {
            return;
        }

        let xUp = evt.touches[0].clientX;
        let yUp = evt.touches[0].clientY;

        let xDiff = this.xDown - xUp;
        let yDiff = this.yDown - yUp;

        if (Math.abs(xDiff) > Math.abs(yDiff)) {
            if (xDiff > 0) {
                this.slideLeft()
            }
            else {
                this.slideRight()
            }
        }
        else {
            if (yDiff > 0) {
                this.slideUp()
            }
            else {
               this.slideDown()
            }
        }
        /* reset values */
        this.xDown = null;
        this.yDown = null;
    }

    slideLeft(){

    }

    slideRight(){

    }

    slideUp(){

    }

    slideDown(){

    }

    setSlideLeftEvent($event){
        this.slideLeft = $event;
    }

    setSlideRightEvent($event) {
        this.slideRight = $event;
    }

    setSlideUpEvent($event) {
        this.slideUp = $event;
    }

    setSlideDownEvent($event) {
        this.slideDown = $event;
    }
}

window.SlideHandler = SlideHandler;
