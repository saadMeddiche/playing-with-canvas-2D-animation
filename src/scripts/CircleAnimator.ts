import {Circle} from "../models/Circle.ts";
import {canvas, context2D} from "../constants/MainConstants.ts";
import {IntersectionType, process} from "./CircleRelations.ts";

export function start(circles : Circle[]) {
    requestAnimationFrame(() => start(circles));

    context2D.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < circles.length; i++) {
        const circleA = circles[i];
        for (let j = i + 1; j < circles.length; j++) {
            const circleB = circles[j];

            const result = process(circleA, circleB);

            if (result != IntersectionType.CirclesDoNotOverlap) {
                circleA.xSpeed = -circleA.xSpeed;
                circleA.ySpeed = -circleA.ySpeed;

                circleB.xSpeed = -circleB.xSpeed;
                circleB.ySpeed = -circleB.ySpeed;
            }

        }
    }

    for(const circle of circles) {
        circle.draw();
        circle.move();
    }

}