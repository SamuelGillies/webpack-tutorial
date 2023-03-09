import _ from 'lodash';
import myName from './myName.js'; 

function component() {
  const element = document.createElement('div');

  // Lodash, now imported by this script - removed for Odin Project part 2 of tutorial, importing own module
  // element.innerHTML = _.join(['Hello', 'webpack'], ' '); 

  // use your function! 
  element.textContent = myName('Cody'); 

  return element;
}

document.body.appendChild(component());