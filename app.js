// This app.js file can be used to access the Rotator class and rotate method
// radians and imageData will have to be provided as input.
import { Rotator } from './data.js';

var radians = 1.57;
var rotator = new Rotator();
var imageDataResult = rotator.rotate(imageData, radians);