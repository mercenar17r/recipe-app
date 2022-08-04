import icons from 'url:../../img/icons.svg';
import View from './View.js';

class addRecipeView extends View {
  _parentElement = document.querySelector('.upload');
  _window = document.querySelector('.add-recipe-window hidden');
  _overlay = document.querySelector('.overlay');
  _btnOpen = document.querySelector('.nav__btn--add-recipe');
  _btnClose = document.querySelector('.btn-close-modal');

  _generateMarkup() {}
}

export default new addRecipeView();
