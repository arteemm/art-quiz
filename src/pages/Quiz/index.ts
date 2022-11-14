import { createWrapper, CategoriesCard } from '../../components';
import { MainPage } from '../index';

class Quiz extends MainPage {
  constructor() {
    super();
  }

  private createQuizWrapper() {
    const wrapper = createWrapper();
    wrapper.classList.add('categories');
    for (let i = 1; i <= 12; i++) {
      const imageNum = this.typeQuiz === 'artist' ? i : i + 12;
      const categoriesCard = new CategoriesCard(imageNum);
      wrapper.append(categoriesCard.render());
    }

    return wrapper;
  }

  public renderSelectCategories() {
    document.body.classList.remove('main-background');
    const section = document.createElement('main');
    section.className = 'main';
    section.append(this.createQuizWrapper());

    return section;
  }
}

export default Quiz;
