import "../../../css/slider/CarouselItem/CarouselItem.css";

const CarouselItem = ({ image }) => {
  const { url, name } = image;

  return (
    <div className="carousel-item" style={{ width: "100%" }}>
      <img src={url} alt={name} />
    </div>
  );
};

export default CarouselItem;
