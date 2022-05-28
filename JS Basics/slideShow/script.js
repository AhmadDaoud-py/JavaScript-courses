(function(){
    "use strict";
        const images = ["image1.jpg", "image2.jpg","image3.jpg", "image4.jpg", "image5.jpg"];
        let currentImage = 0;
        document.getElementById('next').onclick  = nexPicture;
        function nexPicture(){
            currentImage++;
            if(currentImage > images.length -1){ currentImage = 0;}
            document.getElementById('myimage').src = images[currentImage];
        };
        document.getElementById('previous').onclick  = previousPicture;
        function previousPicture(){
            currentImage--;
            if(currentImage < 0){ currentImage = images.length -1;}
            document.getElementById('myimage').src = images[currentImage];
        };
})();