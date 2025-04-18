import {canvas, context2D} from "../constants/MainConstants.ts";

export class Circle {

    private color :string;
    private radius :number;
    private x :number;
    private y :number;
    private xSpeed :number;
    private ySpeed :number;

    constructor(color :string, radius :number, x :number, y :number, xSpeed :number , ySpeed :number) {
        this.color = color;
        this.radius = radius;
        this.x = x;
        this.y = y;
        this.xSpeed = xSpeed;
        this.ySpeed = ySpeed;
    }

     public updateMovement = () => {

        context2D.beginPath();
        context2D.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        context2D.fillStyle = this.color;
        context2D.fill();
        context2D.closePath();

        if (this.x + this.radius > canvas.width || this.x - this.radius < 0) this.xSpeed = -this.xSpeed;
        if (this.y + this.radius > canvas.height || this.y - this.radius < 0) this.ySpeed = -this.ySpeed;

        this.x += this.xSpeed;
        this.y += this.ySpeed;
    }

}