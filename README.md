# RotateRepo

# Program:

This is a program written in JavaScript which takes input of an imageData object and an angle of rotation and will return a rotated version of the input imageData, by the amount of radians specified.

This program will work for an arbitrary angle of radians.

# Implementation:

Linear interpolation was used to calculate the new rotation points.

# Files:

Please find 3 .js files and 1 .html file in this repository.

# Browser Instructions:

data.js contains the Rotator 'class', with the rotate function declared inside.
The Rotator function is exported for use outside of the file.

The rotate method takes in two parameters, an imageData object and a rotation angle, in radians.


Rotation.html, when opened in Chrome, Firefox or Microsoft Edge, displays two images with the image on the right the rotated version.
The Rotator function is exported in this file also.

The angle of rotation is specified in the script tags of the html page, and an image is drawn on the canvas as the source image.
