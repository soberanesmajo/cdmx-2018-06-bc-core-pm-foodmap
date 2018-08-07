let nameBtn = document.getElementById('name-btn');
let ratingBtn = document.getElementById('rating-btn');
let addressBtn = document.getElementById('address-btn');

// Funcion para pintar la lista de bares en el DOM

nameBtn.addEventListener('click', () =>{
})

const paintDom = (results) => {
  let paintList = document.getElementById('paint-list');

  const olElement = document.createElement('ol');
  const liElement = document.createElement('li');
  const aElement = document.createElement('a');
  aElement.id = nameKey;
  // console.log(nameKey);
  aElement.innerHTML = nameKey;
  olElement.appendChild(aElement);
  paintList.appendChild(olElement);  
} 


