import { createWrapper } from '../../components';

class ErrorPage {
  private createMessage() {
    const message = document.createElement('p');
    message.textContent = '404 Page not found';

    return message;
  }

  private createOwnWrapper() {
    const wrapper = createWrapper();

    wrapper.append(this.createMessage());

    return wrapper;
  }

  public render() {
    const section = document.createElement('main');
    section.className = 'main';

    section.append(this.createOwnWrapper());

    return section;
  }
}

export default ErrorPage;
