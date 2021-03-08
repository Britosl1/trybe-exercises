function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

  let dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  
  function createDaysOfTheMonth (){
    let dezDays = document.querySelector('#days');

    for (let i = 0; i < dezDaysList.length; i += 1){
      let days = dezDaysList[i];
      let daysElement = document.createElement('li');
     
      if (days === 24 || days === 31){
        daysElement.className = 'day holiday';
        daysElement.innerHTML = days;
        dezDays.appendChild(daysElement);
    } else if (days === 4 || days === 11 || days === 18){
        daysElement.className = 'day friday';
        daysElement.innerHTML = days;
        dezDays.appendChild(daysElement);
    } else if (days === 25){
        daysElement.className = 'day holiday friday'
        daysElement.innerHTML = days;
        dezDays.appendChild(daysElement);
    } else {
        daysElement.className = 'day';
        daysElement.innerHTML = days;
        dezDays.appendChild(daysElement);
    }
  }
};
createDaysOfTheMonth();

// Exercício 2

function holidayBtn (){
  let btn = document.querySelector('.buttons-container');
  let button = document.createElement('BUTTON');
  button.innerHTML = 'Feriados';
  button.id = 'btn-holiday';
  btn.appendChild(button);
}
holidayBtn();

// Exercício 3

function turnRed (){
  let addClick = document.querySelector('#btn-holiday');
  let red = document.querySelectorAll('.holiday');
  let backgroundColor = 'rgb(238,238,238)';
  let color = 'white';

  addClick.addEventListener('click', turnRed);{
  for (let i = 0; i < red.length; i += 1){
    if (red[i].style.backgroundColor === color){
      red[i].style.backgroundColor = backgroundColor;
    }
    else {
      red[i].style.backgroundColor = color;
    }
  }
}
}
turnRed();