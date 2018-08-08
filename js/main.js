let nameBtn = document.getElementById('name-btn');
let ratingBtn = document.getElementById('rating-btn');
let addressBtn = document.getElementById('address-btn');



  let printNames = () => {
    let paintList = document.getElementById('paint-list');
  //  paintList.insertAdjacentHTML("beforeEnd", namePrint);
  paintList.innerHTML = namePrint;
  }

nameBtn.addEventListener("click", printNames)
