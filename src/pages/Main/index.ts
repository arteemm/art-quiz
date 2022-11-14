import { Link, createWrapper } from '../../components';

class MainPage {
  typeQuiz: string;

  constructor() {
    this.typeQuiz = '';
  }

  private createArtistLink() {
    const link = new Link({
      label: 'Artist quiz',
      ref: '#/quiz',
      onClick: () => {
        this.typeQuiz = 'artist';
      },
    }).render();
    link.classList.add('artists-link');

    return link;
  }

  private createPictureLink() {
    const link = new Link({
      label: 'Picture quiz',
      ref: '#/quiz',
      onClick: () => {
        this.typeQuiz = 'picture';
      },
    }).render();
    link.classList.add('pictures-link');

    return link;
  }

  private createLinksContainer() {
    const container = document.createElement('div');
    container.className = 'main__links';

    container.append(this.createPictureLink(), this.createArtistLink());

    return container;
  }

  private createMainTitle() {
    const container = document.createElement('div');
    container.className = 'main__title';

    return container;
  }

  private createOwnWrapper() {
    const wrapper = createWrapper();

    wrapper.append(this.createMainTitle(), this.createLinksContainer());

    return wrapper;
  }

  public render() {
    const section = document.createElement('main');
    section.className = 'main';

    section.append(this.createOwnWrapper());

    return section;
  }
}

export default MainPage;
