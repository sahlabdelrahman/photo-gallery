import { useFetch } from "../../hooks/useFetch";

import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import ErrorComponent from "../Error/ErrorComponent";
import GridItem from "./GridItem/GridItem";

import "../../css/Grid/Grid.css";

const Grid = () => {
  const { data, error, loading } = useFetch(
    "https://scaleflex.cloudimg.io/v7/0.fe_task_static/pictures.json?vh=7a646d&func=proxy"
  );

  return (
    <section className="grid-wrapper">
      <div className="container">
        {loading && <LoadingSpinner />}
        {error && <ErrorComponent error={error} />}
        {data && (
          <div className="grid">
            {data.map((image) => (
              <GridItem key={image.uuid} image={image} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Grid;

/* 
  {images.length <= 0 ? (
          <LoadingSpinner />
        ) : (
          <div className="grid">
            { {images.map((image) => (
              <GridItem key={image.uuid} image={image} />
            ))} }
          </div>
        )}

*/
