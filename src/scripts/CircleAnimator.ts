import {Circle} from "../models/Circle.ts";
import {canvas, context2D} from "../constants/MainConstants.ts";

export function start(circles : Circle[]) {
    context2D.clearRect(0, 0, canvas.width, canvas.height);

    for(const circle of circles) {
        circle.updateMovement();
    }

    requestAnimationFrame(() => start(circles));
}