const ourTeam = [
    {
        'nome':'Wayne Barnett',
        'ruolo':'Founder & CEO',
        'foto':'wayne-barnett-founder-ceo.jpg'
    },
    {
        'nome':'Angela Caroll',
        'ruolo':'Chief Editor',
        'foto':'angela-caroll-chief-editor.jpg'
    },
    {
        'nome':'Walter Gordon',
        'ruolo':'Office Manager',
        'foto':'walter-gordon-office-manager.jpg'
    },
    {
        'nome':'Angela Lopez',
        'ruolo':'Social Media Manager',
        'foto':'angela-lopez-social-media-manager.jpg'
    },
    {
        'nome':'Scott Estrada',
        'ruolo':'Developer',
        'foto':'scott-estrada-developer.jpg'
    },
    {
        'nome':'Barbara Ramos',
        'ruolo':'Graphic Designer',
        'foto':'barbara-ramos-graphic-designer.jpg'
    }
];

const containerDom = document.getElementById('container');

const memberDom = document.getElementsByClassName('member');


for(let i = 0 ; i < ourTeam.length; i++){
    const people = ourTeam[i];
    
    const card = createCard();


    for(let key in people) {
        console.log(key +' '+ people[key]);
        const cardInfo = createSpan();
        cardInfo.innerHTML=key +' '+ people[key];
        card.append(cardInfo);
    }
     containerDom.append(card);
}

function createCard(){
    const card = document.createElement('div');
    card.classList.add('card');
    return card;
}

function createSpan(){
    const cardInfo = document.createElement('div');
    cardInfo.classList.add('card-info');
    return cardInfo;
}