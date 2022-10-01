import { Link, createWrapper } from '../index';

class Header {
  private createSettingsLink() {
    const link = new Link({
      label: '',
      ref: '/settings',
    }).render();
    link.classList.add('header__settings');

    return link;
  }

  private createOwnWrapper() {
    const wrapper = createWrapper();
    wrapper.classList.add('header__wrapper');

    wrapper.append(this.createSettingsLink());

    return wrapper;
  }

  public render() {
    const header = document.createElement('header');
    header.className = 'header';

    header.append(this.createOwnWrapper());

    return header;
  }
}

export default Header;
