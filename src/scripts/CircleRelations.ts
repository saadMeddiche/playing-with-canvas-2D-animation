import {Circle} from "../models/Circle.ts";

export enum IntersectionType {
    CircleBInsideCircleA,
    CircleAInsideCircleB,
    CirclesIntersectsEachOther,
    CirclesTouchEachOther,
    CirclesDoNotOverlap
}

export function process(circleA :Circle, circleB :Circle) {

    const x1 = circleA.x;
    const y1 = circleA.y;
    const r1 = circleA.radius;

    const x2 = circleB.x;
    const y2 = circleB.y;
    const r2  = circleB.radius;

    const distanceBetweenCenters = Math.sqrt(Math.pow(x1-x2 , 2) * Math.pow(y1-y2 , 2));

    if(distanceBetweenCenters <= r1 - r2) return IntersectionType.CircleBInsideCircleA;

    if(distanceBetweenCenters <= r2 - r1) return IntersectionType.CircleAInsideCircleB;

    if(distanceBetweenCenters < r1 + r2) return IntersectionType.CirclesIntersectsEachOther;

    if(distanceBetweenCenters == r1 + r2) return IntersectionType.CirclesTouchEachOther;

    return IntersectionType.CirclesDoNotOverlap;

}