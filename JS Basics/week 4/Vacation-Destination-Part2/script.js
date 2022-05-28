(function(){
    "use strict"
    const detailsForm = document.getElementById('destination_details_form');
    detailsForm.addEventListener('submit', handleFormSubmit);
    function handleFormSubmit (event){
        event.preventDefault();
        const destName = event.target.elements['name'].value;
        const destLocation = event.target.elements['location'].value;
        const destPhoto = event.target.elements['photo'].value;
        const destDesc = event.target.elements['description'].value;

        for(let i=0; i< detailsForm.length ; i++){
            detailsForm.elements[i].value = "";
        }

        //create a card
        const destCard = createDestinationCard(destName, destLocation, destPhoto, destDesc);


        const wishlistContainer = document.getElementById('destinations_container');

        if(wishlistContainer.children.length === 0){
            document.getElementById('title').innerHTML = "My Wish List";
        }
        //add the card
        document.querySelector('#destinations_container').appendChild(destCard);
}

function createDestinationCard (name, location, photoURL, desc ){
    const card = document.createElement('div');
    card.className = 'card';

    const img = document.createElement('img');
    img.setAttribute('alt',name);

    const constantPhotoURL = "images/signpost.jpg";

    if(photoURL.length === 0){
        img.setAttribute('src', constantPhotoURL); 
    }
    else{
        img.setAttribute('src',photoURL);
    }
    card.appendChild(img);

    const cardBody = document.createElement('div');
    cardBody.className = "card-body";

    const cardTitle = document.createElement('h3');
    cardTitle.innerText = name;
    cardBody.appendChild(cardTitle);

    const cardSubTitle = document.createElement('h4');
    cardSubTitle.innerText = location;
    cardBody.appendChild(cardSubTitle);

    if(desc.length !==0){
        const cardText = document.createElement('p');
        cardText.innerText = desc;
        cardBody.appendChild(cardText);
    }

    const cardRemovebtn = document.createElement('button');
    cardRemovebtn.innerText = "Remove";
    cardRemovebtn.addEventListener('click', removeDestination);

    cardBody.appendChild(cardRemovebtn);

    card.appendChild(cardBody);
    return card;
}

function removeDestination(event){
  const card = event.target.parentElement.parentElement;
  card.remove();
}


})();
