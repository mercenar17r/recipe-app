import icons from 'url:../../img/icons.svg';
import View from './View.js';

class addRecipeView extends View {
  _parentElement = document.querySelector('.upload');
  _window = document.querySelector('.add-recipe-window hidden');
  _overlay = document.querySelector('.overlay');

  _generateMarkup() {}
}

export default new addRecipeView();
