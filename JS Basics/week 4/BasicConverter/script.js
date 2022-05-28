(function(){
    "use strict"
    document.getElementById('convert').addEventListener('submit', function(event){
        event.preventDefault();
        const distance = parseFloat(document.getElementById('distance').value);
        const answer = document.getElementById('answer');
        if(distance){
            //convert and disolay
            const conversion = distance * 1.609344;
            const roundedConversion = (Math.round(conversion*100))/100;
            //var roundedConversion = conversion.toFixed(3); another way

            answer.innerHTML = `<h2>the ${distance} miles is rqual to ${roundedConversion} kilometer</h2>`;

        }
        else{
            //display error
            answer.innerHTML = `<h2>Error you have to enter a number, please try again</h2>`;
        }
    });
})();