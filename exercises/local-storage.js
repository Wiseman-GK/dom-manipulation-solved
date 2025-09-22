/**
 * LOCAL STORAGE AND DOM MANIPULATION
 * In this task you will write some functions to let the browser save
 * some of your actions results and retrieve them when the page is reloaded.
 * You will be working with the localStorage.
 * Make sure to read the following exercise-info file/files before you start
 * * 03 LocalStorage.md
 * * 04 EventDelegation.md
 * Local Storage might be shortened to "LS" in the comments beneath.
 * @requirement
 * Event delegation MUST be used
 */

/**
 * @task
 * Implement the 'click' event that solves several tasks by the item click:
 * * If the item is NOT in favorites LS and has white background color
 * * * Changes the color of the box to red
 * * * Add the item's id to the local storage
 * * Else if the box is in favorites LS and has white red color
 * * * Changes the color of the box to white
 * * * Add the item's id to the local storage
 * * Make all the items that are listed in the favorites LS save the red background color when the page is reloaded
 */

/**
 * @hint
 * Here is a plan of how you can structure your code. You can follow it or choose your own way to go
 * * Select the container that holds all the items
 * * Create a function that sets the background to be red for the item with an id listed in favorites LS
 * * Run this function
 * * Create a function that adds an id to favorites LS by id passed as an argument
 * * Create a function that deletes an id from favorites LS by id passed as an argument
 * * Create a callback function that updates the element background color and does the
 * * /~/ action with the item's id depending on if it is in LS or not. The function should
 * * /~/ do that to a specific item that has a specific class value
 * * add the event listener to the container, pass the callback.
 */

// Your code goes here...
localStorage.setItem('favorites', 0)
const container = document.querySelector('.cardsContainer');
const callbackFn = (e) => {
  const item = e.target;
  const check = localStorage.getItem('favorites').split('');
  if (Array.from(item.classList).includes('card')) {
    if (check.includes(item.id)) {
      removeFav(item.id);
    } else {
      addFav(item.id);
    }
  }
  colorId()
};
if(container){
  container.addEventListener('click', callbackFn);
};
const addFav = (input) => {
  let temp = localStorage.getItem('favorites');
  temp += input;
  localStorage.setItem('favorites', temp)
}
const removeFav = (input) => {
  let temp = localStorage.getItem('favorites').split('');
  temp.splice(temp.indexOf(input), 1);
  const update = temp.join(',').replace(/,/g,'');
  localStorage.setItem('favorites', update);
}
function colorId (){
  const div = document.getElementsByClassName('cardsContainer');
  let compare;
  for(const elem of div){
    compare = elem.querySelectorAll('*');
  }
  const ids = [];
  compare.forEach(element => {ids.push(element.id);});
  const check = localStorage.getItem('favorites').split('');
  const favs = ids.filter(element => check.includes(element));
  const notFavs = ids.filter(element => !check.includes(element));
  change(favs, notFavs);
}
const change = (f, n) => {
  console.log(f, n);
  if(f.length > 0){
    for (let g = 0; g < f.length; g++){
      const div = document.getElementById(f[g]);
      div.style.backgroundColor = 'red';
    }
  }
  if(n.length > 0){
    for (let g = 0; g < n.length; g++){
      const div = document.getElementById(n[g]);
      div.style.backgroundColor = 'white';
    }
  }
}
colorId();