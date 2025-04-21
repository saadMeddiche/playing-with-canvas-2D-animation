import {Circle} from "../models/Circle.ts";
import {canvas, context2D} from "../constants/MainConstants.ts";
import {IntersectionType, process} from "./CircleRelations.ts";

export function start(circles : Circle[]) {
    context2D.clearRect(0, 0, canvas.width, canvas.height);

    let alreadyProcessed :string[] = [];

    for (let i = 0; i < circles.length; i++) {
        for (let j = 0; j < circles.length; j++) {

            if(i == j) continue;

            if(alreadyProcessed.includes(`${i}-${j}`)) continue;

            const circleA = circles[i];
            const circleB = circles[j];

            const result = process(circleA, circleB);

            if (result != IntersectionType.CirclesDoNotOverlap) {
                circleA.xSpeed = -circleA.xSpeed;
                circleA.ySpeed = -circleA.ySpeed;

                circleB.xSpeed = -circleB.xSpeed;
                circleB.ySpeed = -circleB.ySpeed;
            }

            alreadyProcessed.push(`${i}-${j}`)
            alreadyProcessed.push(`${j}-${i}`)

        }
    }

    for(const circle of circles) {
        circle.draw();
        circle.move();
    }

    requestAnimationFrame(() => start(circles));
}