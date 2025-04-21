import {start as startCircleAnimation} from "./scripts/CircleAnimator.ts";
import {CircleGenerator} from "./scripts/CircleGenerator.ts";

const circles = CircleGenerator .generateCircles(10)

startCircleAnimation(circles);



