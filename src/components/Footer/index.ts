import { Link, createWrapper } from '../index';

class Footer {
  private createRssLink() {
    const link = new Link({
      label: '',
      ref: 'https://rs.school/',
    }).render();
    link.target = '_blank';
    link.classList.add('footer__rss');

    return link;
  }

  private createGithubLink() {
    const link = new Link({
      label: 'arteemm',
      ref: 'https://github.com/arteemm',
    }).render();
    link.target = '_blank';
    link.classList.add('footer__link');

    return link;
  }

  private createLinkParagraph() {
    const paragraph = document.createElement('p');
    paragraph.className = 'footer__developer';
    paragraph.textContent = 'App developer:';

    paragraph.append(this.createGithubLink());

    return paragraph;
  }

  private createYearParagraph() {
    const paragraph = document.createElement('p');
    paragraph.className = 'footer__year';
    paragraph.textContent = '2022';

    return paragraph;
  }

  private createFooterContainer() {
    const container = document.createElement('div');
    container.className = 'footer__container';

    container.append(this.createLinkParagraph(), this.createYearParagraph());

    return container;
  }

  private createOwnWrapper() {
    const wrapper = createWrapper();
    wrapper.classList.add('footer__wrapper');

    wrapper.append(this.createRssLink(), this.createFooterContainer());

    return wrapper;
  }

  public render() {
    const footer = document.createElement('footer');
    footer.className = 'footer';

    footer.append(this.createOwnWrapper());

    return footer;
  }
}

export default Footer;
