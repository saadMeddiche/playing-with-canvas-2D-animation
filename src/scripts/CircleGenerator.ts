import {Circle} from "../models/Circle.ts";
import {canvas} from "../constants/MainConstants.ts";

export class CircleGenerator {

    public static generateCircles(numberOfCircles :number): Circle[] {
        const circles: Circle[] = [];
        for (let i = 0; i < numberOfCircles; i++) {
            const radius = Math.random() * 20 + 5;
            const x = Math.random() * (canvas.width - radius * 2) + radius;
            const y = Math.random() * (canvas.height - radius * 2) + radius;
            const xSpeed = Math.random() * 4 - 2;
            const ySpeed = Math.random() * 4 - 2;
            const color = `hsl(${Math.random() * 360}, 100%, 50%)`;
            circles.push(new Circle(color, radius, x, y, xSpeed, ySpeed));
        }
        return circles;
    }

}