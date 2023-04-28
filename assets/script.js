let eleList = document.querySelector('.grid');



const myArrName =[
    {
        eleName: 'Wayne Barnett',
        eleWork:'Founder & CEO',
        eleImg: 'wayne-barnett- founder-eco.jpg',
    },

    {
        eleName: 'Angela Caroll',
        eleWork:'Chief Editor',
        eleImg: 'angela-caroll-chief-editor.jpg',
    },

    {
        eleName: 'walter Gordon',
        eleWork:'Office Manager',
        eleImg: 'walter-gordon-office-manager.jpg',

    },

    {
        eleName: 'Angela Lopez',
        eleWork:'Social Media Manager',
        eleImg: 'angela-lopez-social-media-manager',
    },

    {
        eleName: 'Scott Estrada',
        eleWork:'Developer',
        eleImg: 'scott-estrada-developer.jpg',
    },

    {
        eleName: 'Barbara Ramos',
        eleWork:'Grapich Designer',
        eleImg: 'barbara-ramos-graphic-designer.jpg',
    },
]

console.log(myArrName);

for (let element of myArrName){
    console.log(element);
    eleList.innerHTML += (`<li class="member">${element.eleName}, ${element.eleWork}, ${element.eleImg}</li>`);
}





    
 





