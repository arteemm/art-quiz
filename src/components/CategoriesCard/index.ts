import images from '../../data/images';

class CategoriesCard {
  imageNum: number;

  constructor(imageNum: number) {
    this.imageNum = imageNum;
  }

  private createCardHeader() {
    const cardHeader = document.createElement('div');
    const cardName = document.createElement('p');
    const cardCount = document.createElement('p');

    cardHeader.className = 'categories__header';
    cardName.className = 'categories__name';
    cardCount.className = 'categories__count';

    cardName.textContent = images[this.imageNum]?.name || '';
    cardCount.textContent = '10/10';

    cardHeader.append(cardName, cardCount);

    return cardHeader;
  }

  private createImageCard() {
    const img = document.createElement('img');
    img.className = 'categories__image';

    img.src = `https://raw.githubusercontent.com/arteemm/image-data/master/img/${this.imageNum}.jpg`;

    return img;
  }

  public render() {
    const card = document.createElement('div');

    card.className = 'categories__card';

    this.createImageCard().onload = () => card.append(this.createCardHeader(), this.createImageCard());

    return card;
  }
}

export default CategoriesCard;
