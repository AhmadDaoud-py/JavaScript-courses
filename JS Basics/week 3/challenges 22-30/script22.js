(function(){
    "use strict";
        const par = document.querySelector('p');
        const btn = document.querySelector('button');
        btn.onclick = function(){
            par.style.color = "green";
        }
})();