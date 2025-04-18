import {canvas} from "./constants/MainConstants.ts";
import {Circle} from "./models/Circle.ts";
import {start as startCircleAnimation} from "./scripts/CircleAnimator.ts";

const blueCircle :Circle = new Circle('blue', 20, canvas.width * Math.random(), canvas.height * Math.random(), 2, 2);
const redCircle :Circle = new Circle('red', 20, canvas.width * Math.random(), canvas.height * Math.random(), 2, 2);
const greenCircle :Circle = new Circle('green', 20, canvas.width * Math.random(), canvas.height * Math.random(), 2, 2);

startCircleAnimation([blueCircle, redCircle, greenCircle]);



