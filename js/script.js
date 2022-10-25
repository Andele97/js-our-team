const team = [
  {
    nome: "Wayne",
    cognome: "Barnet",
    professione: "Founder & CEO",
    immagine: "wayne-barnett-founder-ceo.jpg"
},
  {
    nome: "Angela",
    cognome: "Caroll",
    professione: "Chief Editor",
    immagine: "angela-caroll-chief-editor.jpg"
},
  {
    nome: "Walter",
    cognome: "Gordon",
    professione: "Office Manager",
    immagine: "walter-gordon-office-manager.jpg"
},
  {
    nome: "Angela",
    cognome: "Lopex",
    professione: "Social Media Manager",
    immagine: "angela-lopez-social-media-manager.jpg"
},
  {
    nome: "Scott",
    cognome: "Estrada",
    professione: "Developer",
    immagine: "scott-estrada-developer.jpg"
},
  {
    nome: "Barbara",
    cognome: "Ramos",
    professione: "Graphic Designer",
    immagine: "barbara-ramos-graphic-designer.jpg"
}
];

for(let teams of team){

  let box = `
      <div class="col-3">
        <div class="ap-box">
          <div class="image">
            <img src="${teams.immagine}" alt="foto">
          </div>
          <div class="nome text-center mt-3">
            ${teams.nome} ${teams.cognome}
          </div>
          <div class="professione text-center">
            ${teams.professione}
          </div>
        </div>
      </div>`;
      console.log(teams);
}