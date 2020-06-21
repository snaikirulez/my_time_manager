import {createBoardTemplate} from './components/board.js';
import {createSiteFilterTemplate} from './components/filter.js';
import {createLoadMoreButtonTemplate} from './components/load-more-button.js';
import {createTaskEditTemplate} from './components/site-menu.js';
import {createTaskTemplate} from './components/task-edit.js';
import {createSiteMenuTemplate} from './components/task.js';

const NUBMER_CREATE_TASK = 3;


let renderHTMLElementTemplate = (element, conatainer, where = `beforeend`) => {
  conatainer.insertAdjacentHTML(where, element());
};

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);

// Отрисовка меню, фильтра,задач
renderHTMLElementTemplate(createSiteMenuTemplate, siteHeaderElement);
renderHTMLElementTemplate(createSiteFilterTemplate, siteMainElement);
renderHTMLElementTemplate(createBoardTemplate, siteMainElement);

const boardTasksElement = siteMainElement.querySelector(`.board__tasks`);
renderHTMLElementTemplate(createTaskEditTemplate, boardTasksElement);
for (let i = 0; i <= NUBMER_CREATE_TASK; i++) {
  renderHTMLElementTemplate(createTaskTemplate, boardTasksElement);
}


const boardElement = siteMainElement.querySelector(`.board`);
renderHTMLElementTemplate(createLoadMoreButtonTemplate, boardElement);
