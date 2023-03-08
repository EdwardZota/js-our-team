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

    for(let key in people) {
        console.log(key +' '+ people[key]);
        containerDom.innerHTML+=`<div class="box"><span>${key}</span> <span>${people[key]}</span></div>`;

    }
     
}