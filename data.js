export function Rotator() {
            
    this.rotate = function(imageData,radians){

        if(imageData === null){
            throw new Error("Please provide an imageData object");
        }

        // throw error if angle entered is out of range
        if(radians < -6.28 || radians > 6.28) {
            throw new Error("Please enter an acceptable radian value for rotation");
        }

        // general iterators
        var i, j;
        
        // calculated indices in Cartesian coordinates
        var x, y;
        var fDistance, fPolarAngle;

        // record image dimensions
        const iWidth = imageData.width;
        const iHeight = imageData.height;

        // create a source pixel array
        var srcImageData = new Uint32Array(imageData.data.buffer);
        // create a destination pixel array (divide by 4 for rgba)
        var destImageData = new Uint32Array(imageData.data.length/4);
        
        // Rotate the image around the center
        var iCentreX = iWidth / 2;
        var iCentreY = iHeight / 2;
        
        // Angle to rotate by
        var cnAngle = radians;
        
        // Calculate diagonal with extra buffer space
        var cnSizeBuffer = 20;
        var iDiagonal = Math.floor((Math.ceil(Math.sqrt(parseFloat(iWidth * iWidth + iHeight * iHeight))))+cnSizeBuffer);
    
        // pre-populate destination
        for (i = 0; i < iDiagonal; ++i){
            for (j = 0; j < iDiagonal; ++j){
                destImageData[j+i*iWidth] = 255;
            }
        }
    
        // assigning pixels from source image to destination image
        for (i = 0; i < iDiagonal; ++i){
            for (j = 0; j < iDiagonal; ++j){

                // convert matrix coordinates to Cartesian
                x = j - iCentreX;
                y = iCentreY - i;

                // convert Cartesian to polar
                fDistance = Math.sqrt(x * x + y * y);
                fPolarAngle = 0.0;

                if (x === 0) {
                    if (y === 0) {

                        // centre of image, no rotation needed
                        destImageData[j+i*iWidth] = srcImageData[j+i*iWidth];
                        continue;
                
                    }else if (y < 0){
                        fPolarAngle = 1.5 * Math.PI;
                    }else{
                        fPolarAngle = 0.5 * Math.PI;
                    }
                }else{
                    fPolarAngle = Math.atan2(parseFloat(y),parseFloat(x));
                }

                // Add the rotation
                fPolarAngle += cnAngle;

                // convert polar to Cartesian
                x = Math.floor((Math.round(fDistance * Math.cos(fPolarAngle))));
                y = Math.floor((Math.round(fDistance * Math.sin(fPolarAngle))));

                // convert Cartesian to matrix
                x = x + iCentreX;
                y = iCentreY - y;

                // check bounds
                if (x < 0 || x >= iWidth || y < 0 || y >= iHeight) continue;

                destImageData[j + i * iWidth] = srcImageData[x + y * iWidth];
            }
        }

        // set the destination image coordinates against source
        srcImageData.set(destImageData);
        return imageData;
    }
};
