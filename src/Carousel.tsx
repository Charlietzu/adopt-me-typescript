import { Component, MouseEvent, ReactNode } from "react";

interface ICarouselProps {
  images: string[];
}

interface ICarouselState {
  active: number;
}

class Carousel extends Component<ICarouselProps, ICarouselState> {
  state: ICarouselState = {
    active: 0,
  };

  static defaultProps: ICarouselProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };

  handleIndexClick = (event: MouseEvent<HTMLElement>): void => {
    const target = event.target as HTMLElement;
    if (!target || !target.dataset || !target.dataset.index) {
      return;
    }
    this.setState({
      active: +target.dataset.index,
    });
  };

  render(): ReactNode {
    const { active } = this.state;
    const { images } = this.props;
    return (
      <div className="carousel">
        <img src={images[active]} alt="animal" />
        <div className="carousel-smaller">
          {images.map((photo, index) => (
            // eslint-disable-next-line
            <img
              key={photo}
              src={photo}
              onClick={this.handleIndexClick}
              data-index={index}
              className={index === active ? "active" : ""}
              alt="animal thumbnail"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
