import normalize from './Utils.mjs';

export class RotatingShape {
    shape;

    constructor(shape) {
        this.shape = shape;
    }

    rotateRight() {
        
        return new RotatingShape();
    }

    toString() {
        return normalize(this.shape);
    }
}