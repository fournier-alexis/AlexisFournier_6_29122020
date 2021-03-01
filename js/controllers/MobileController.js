import LightboxController from "./LightboxController";

export default class MobileController {

    constructor(photographer) {
        this._photographer = photographer;
        this.xDown = null;
        this.yDown = null;

        this.registerListeners();
        MobileController._instance = this;
    }

    registerListeners() {
        document.getElementById("lightbox").addEventListener('touchstart', this.touchStart.bind(this));
        document.getElementById("lightbox").addEventListener('touchmove', this.touchMove.bind(this));
    }

    getTouches(event) {
        return event.touches;
    }

    touchStart(event) {
        const firstTouch = this.getTouches(event)[0];
        this.xDown = firstTouch.clientX;
        this.yDown = firstTouch.clientY;
    }

    touchMove(event) {
        if (this.xDown && this.yDown) {
            const lightboxController = new LightboxController(this._photographer);

            const xUp = event.touches[0].clientX;
            const yUp = event.touches[0].clientY;

            const xDiff = this.xDown - xUp;
            const yDiff = this.yDown - yUp;

            if (Math.abs(xDiff) > Math.abs(yDiff)) {
                if (xDiff > 0) {
                    /* left swipe */
                    lightboxController.switchMediaTo("right");
                } else {
                    /* right swipe */
                    lightboxController.switchMediaTo("left");
                }
            }
            /* reset values */
            this.xDown = null;
            this.yDown = null;
        }
    }
}