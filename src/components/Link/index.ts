interface LinkProps {
  label: string;
  ref: string;
}

class Link {
  private readonly label: string = '';
  private readonly ref: string = '';

  constructor(props: LinkProps) {
    this.label = props.label;
    this.ref = props.ref;
  }

  public render() {
    const component = document.createElement('a');
    component.textContent = this.label;
    component.href = this.ref;
    component.className = 'link';

    return component;
  }
}

export default Link;
