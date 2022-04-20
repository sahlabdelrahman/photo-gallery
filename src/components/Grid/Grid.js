import { useSelector } from "react-redux";

import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import ErrorComponent from "../Error/ErrorComponent";
import GridItem from "./GridItem/GridItem";

import "../../css/Grid/Grid.css";

const Grid = () => {
  const { images, loading, error } = useSelector((state) => state.images);

  return (
    <section className="grid-wrapper">
      <div className="container">
        {loading && <LoadingSpinner />}
        {error && <ErrorComponent error={error} />}
        {images && (
          <div className="grid">
            {images.map((image, index) => (
              <GridItem key={image.uuid} image={image} index={index} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Grid;
