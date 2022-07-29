import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

const controlRecipes = async function () {
  try {
    const query = searchView.getQuery();
    if (!query) return;
    const id = window.location.hash.slice(1);

    if (!id) return;

    recipeView.renderSpinner();
    //1.Loading the recipe
    await model.loadRecipe(id);

    //2.Rendering the recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    recipeView.renderError();
  }
};

const controllSearchResults = async function () {
  try {
    await model.loadSearchResults('pizza');
    console.log(model.state.search.results);
  } catch (err) {
    console.log(err);
  }
};

controllSearchResults();
const init = function () {
  recipeView.addHandlerRender(controlRecipes);
};
init();
