# RotateRepo

# Program:

This is a program written in JavaScript which takes input of an imageData object and an angle of rotation and will return a rotated version of the input imageData, by the amount of radians specified.

This program will work for an arbitrary angle of radians.

# Implementation:

Linear interpolation was used to calculate the new rotation points.

# Future work:

Future improvements which I would have liked to have made to the program are listed below:

# 1. Improve image quality

I applied linear interpolation to calculate the image rotation, however for smoother image quality I believe that bilinear or bicubic interpolation would have been more effective.

# 2. Clipped image

The resulting image is unfortunately clipped at the edges.
Efforts were made to lessen this effect, such as drawing the canvas to a size greater than the calculated diagonal of the image, so that the rotated image produced would fit inside the new boundary.

# Files:

Please find 3 .js files and 1 .html file in this repository.

# Node Instructions:

data.js contains the Rotator 'class', with the rotate function declared inside.
The Rotator function is exported for use outside of the file.

The rotate method takes in two parameters, an imageData object and a rotation angle, in radians.

app.js is provided for convenience as it contains an import of the exported Rotator class.
Parameters will have to be provided for the rotate method here.

To run in node, first download and install node on your machine, and navigated to the directory where app.js, data.js and start.js are.

Node.js does not support import-export functionality by default, so, we need a babel transpiler to get it working.
Firstly, generate the package.json by entering the following in the Node cmd prompt:

npm init -y

Then, install the following two packages:

npm install babel-register babel-preset-env --save-dev

Then, execute the following command to run:

node start.js


# Browser Instructions:

Rotation.html, when opened in Chrome, Firefox or Microsoft Edge, displays two images with the image on the right the rotated version.
The Rotator function is exported in this file also.

The angle of rotation is specified in the script tags of the html page, and an image is drawn on the canvas as the source image.
