// Hardcoded //
// Emulazione di dati presi da una API //

const data = [
  {
    name: 'Sara Connor',
    age: 42,
    gender: 'Female',
    assotiation: 'Anonymous for the Voiceless',
    location: 'California',
    image: 'https://randomuser.me/api/portraits/women/64.jpg'
  },

  {
    name: 'Bryan Fury',
    age: 47,
    gender: 'Male',
    assotiation: 'Animal Equality',
    location: 'California',
    image: 'https://randomuser.me/api/portraits/men/22.jpg'
  },

  {
    name: 'Kim Woo',
    age: 32,
    gender: 'Female',
    assotiation: 'Animal Save',
    location: 'California',
    image: 'https://randomuser.me/api/portraits/women/60.jpg'
  },

  {
    name: 'Jonny Cage',
    age: 37,
    gender: 'Male',
    assotiation: 'Essere Animali',
    location: 'California',
    image: 'https://randomuser.me/api/portraits/men/60.jpg'
  },

  {
    name: 'Sonya Blade',
    age: 24,
    gender: 'Female',
    assotiation: 'Essere Animali',
    location: 'California',
    image: 'https://randomuser.me/api/portraits/women/59.jpg'
  },

  {
    name: 'Leon Kennedy',
    age: 27,
    gender: 'Male',
    assotiation: 'Anonymous for the Voiceless',
    location: 'California',
    image: 'https://randomuser.me/api/portraits/men/11.jpg'
  },
]

const profili = interatoreProfili(data);


// Chiama il primo profilo nella pagina iniziale
prossimoProfilo();


// Evento per visualizzare il prossimo profilo
document.getElementById('next').addEventListener('click', prossimoProfilo);


// Visualizza prossimo Profilo

function prossimoProfilo() {
  const profiloCorrente = profili.next().value;

  if(profiloCorrente === undefined) {
    window.location.reload();
  }

  document.getElementById('profileDisplay').innerHTML =
  `<ul class="list-group">
    <li class="list-group-item"> Name: ${profiloCorrente.name} </li>
    <li class="list-group-item"> Age: ${profiloCorrente.age} </li>
    <li class="list-group-item"> Gender: ${profiloCorrente.gender} </li>
    <li class="list-group-item"> Association: ${profiloCorrente.assotiation} </li>
    <li class="list-group-item"> Location: ${profiloCorrente.location} </li>
  </ul>
  `;

  document.getElementById('imageDisplay').innerHTML = 
  `<img src="${profiloCorrente.image}">`;

}

 
// Interatore Profili

function interatoreProfili(profili) {
  let selettoreProfilo = 0;

  return {
    next: function() {
      return selettoreProfilo < profili.length ?
      { value: profili[selettoreProfilo++], done: false } :
      { done: true }
    }
  };
}

