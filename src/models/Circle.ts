import {canvas, context2D} from "../constants/MainConstants.ts";

export class Circle {

    private _color :string;
    private _radius :number;
    private _x :number;
    private _y :number;
    private _xSpeed :number;
    private _ySpeed :number;

    constructor(color :string, radius :number, x :number, y :number, xSpeed :number , ySpeed :number) {
        this._color = color;
        this._radius = radius;
        this._x = x;
        this._y = y;
        this._xSpeed = xSpeed;
        this._ySpeed = ySpeed;
    }

    public draw = () => {

        context2D.beginPath();
        context2D.arc(this._x, this._y, this._radius, 0, Math.PI * 2);
        context2D.fillStyle = this._color;
        context2D.fill();
        context2D.closePath();

    }

    public move = () => {
        if (this._x + this._radius > canvas.width || this._x - this._radius < 0) this._xSpeed = -this._xSpeed;
        if (this._y + this._radius > canvas.height || this._y - this._radius < 0) this._ySpeed = -this._ySpeed;

        this._x += this._xSpeed;
        this._y += this._ySpeed;
    }

    get color(): string {
        return this._color;
    }

    set color(value: string) {
        this._color = value;
    }

    get radius(): number {
        return this._radius;
    }

    set radius(value: number) {
        this._radius = value;
    }

    get x(): number {
        return this._x;
    }

    set x(value: number) {
        this._x = value;
    }

    get y(): number {
        return this._y;
    }

    set y(value: number) {
        this._y = value;
    }

    get xSpeed(): number {
        return this._xSpeed;
    }

    set xSpeed(value: number) {
        this._xSpeed = value;
    }

    get ySpeed(): number {
        return this._ySpeed;
    }

    set ySpeed(value: number) {
        this._ySpeed = value;
    }


}