const row = document.querySelector(".row");

const team = [
  {
    nome: "Wayne",
    cognome: "Barnet",
    professione: "Founder & CEO",
    immagine: "assets/img/wayne-barnett-founder-ceo.jpg"
},
  {
    nome: "Angela",
    cognome: "Caroll",
    professione: "Chief Editor",
    immagine: "assets/img/angela-caroll-chief-editor.jpg"
},
  {
    nome: "Walter",
    cognome: "Gordon",
    professione: "Office Manager",
    immagine: "assets/img/walter-gordon-office-manager.jpg"
},
  {
    nome: "Angela",
    cognome: "Lopex",
    professione: "Social Media Manager",
    immagine: "assets/img/angela-lopez-social-media-manager.jpg"
},
  {
    nome: "Scott",
    cognome: "Estrada",
    professione: "Developer",
    immagine: "assets/img/scott-estrada-developer.jpg"
},
  {
    nome: "Barbara",
    cognome: "Ramos",
    professione: "Graphic Designer",
    immagine: "assets/img/barbara-ramos-graphic-designer.jpg"
}
];

for(let teams of team){

  let box = `
      <div class="col-4 d-flex justify-content-center ">
        <div class="ap-box">
          <div class="image">
            <img src="${teams.immagine}" alt="foto">
          </div>
          <div class="nome text-center mt-3 fw-bold">
            ${teams.nome} ${teams.cognome}
          </div>
          <div class="professione text-center mt-1">
            ${teams.professione}
          </div>
        </div>
      </div>`;

      row.innerHTML += box;
}