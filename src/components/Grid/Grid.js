import GridItem from "./GridItem/GridItem";

import "../../css/Grid/Grid.css";

const Grid = () => {
  return (
    <section className="grid-wrapper">
      <div className="container">
        <div className="grid">
          <GridItem />
          <GridItem />
          <GridItem />
          <GridItem />
          <GridItem />
        </div>
      </div>
    </section>
  );
};

export default Grid;
