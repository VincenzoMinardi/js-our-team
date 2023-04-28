let eleList = document.querySelector('.grid');



const myArrName =[
    {
        eleName: 'Wayne Barnett',
        eleWork:'Founder & CEO',
        eleImg: `<img src="img/wayne-barnett-founder-ceo.jpg" alt="">`,
    },

    {
        eleName: 'Angela Caroll',
        eleWork:'Chief Editor',
        eleImg: `<img src="img/angela-caroll-chief-editor.jpg" alt="">`,
    },

    {
        eleName: 'walter Gordon',
        eleWork:'Office Manager',
        eleImg:`<img src="img/walter-gordon-office-manager.jpg" alt="">`,

    },

    {
        eleName: 'Angela Lopez',
        eleWork:'Social Media Manager',
        eleImg: `<img src="img/angela-lopez-social-media-manager.jpg" alt="">`,
    },

    {
        eleName: 'Scott Estrada',
        eleWork:'Developer',
        eleImg: `<img src="img/scott-estrada-developer.jpg" alt="">`,
    },

    {
        eleName: 'Barbara Ramos',
        eleWork:'Grapich Designer',
        eleImg: ` <img src="img/barbara-ramos-graphic-designer.jpg" alt="">`,
    },
]

console.log(myArrName);

for (let element of myArrName){
    console.log(element);
    eleList.innerHTML += (`<div class="member">${element.eleName}, ${element.eleWork}, ${element.eleImg}</div>`);
}





    
 





