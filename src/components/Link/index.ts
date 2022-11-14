interface LinkProps {
  label: string;
  ref: string;
  onClick?: () => void;
}

class Link {
  private readonly label: string = '';
  private readonly ref: string = '';
  private onClick: (() => void) | null;

  constructor(props: LinkProps) {
    this.label = props.label;
    this.ref = props.ref;
    this.onClick = props.onClick || null;
  }

  public render() {
    const component = document.createElement('a');
    component.textContent = this.label;
    component.href = this.ref;
    component.className = 'link';

    if (this.onClick) {
      component.onclick = this.onClick;
    }

    return component;
  }
}

export default Link;
