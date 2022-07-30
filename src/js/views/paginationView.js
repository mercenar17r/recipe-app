import icons from 'url:../../img/icons.svg';
import View from './View.js';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');
  _generateMarkup() {
    const curPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    console.log(numPages);
    //Page 1, and there are other pages
    if (curPage === 1 && numPages > 1) {
      return 'page 1,others';
    }
    //Last page
    if (curPage === numPages && numPages > 1) {
      return `
        <button class="btn--inline pagination__btn--prev">
        <svg class="search__icon">
            <use href="src/img/icons.svg#icon-arrow-left"></use>
        </svg>
        <span>Page ${curPage - 1}</span>
        </button>
        `;
    }
    //Other page
    if (curPage < numPages) {
      return 'other page';
    }
    //Page 1, and there are NO other pages
    return `only 1 page`;
  }
}

export default new PaginationView();
