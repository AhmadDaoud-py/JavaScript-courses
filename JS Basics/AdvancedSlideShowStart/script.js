(function(){
    "use strict";
        let currentimg = 0;
        const photos = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg"];
        const container = document.getElementById('content');
        const btnNext = document.getElementById('next');
        const btnPrev = document.getElementById('previous');

        function swap(){
            const newslide = document.createElement('img');
            newslide.src = `slides/${photos[currentimg]}`;
            newslide.className = "fadeinimg";
            container.appendChild(newslide);
            if(container.children.length >2){
                container.removeChild(container.children[0]);
            }

        }
        

        btnNext.addEventListener('click', function(event){
            event.preventDefault();
            currentimg++;
            if(currentimg > photos.length -1){ currentimg = 0;}
            swap();

        });
        btnPrev.addEventListener('click', function(event){
            event.preventDefault();
            currentimg--;
            if(currentimg < 0){ currentimg = photos.length -1;}
            swap();
        });
})();