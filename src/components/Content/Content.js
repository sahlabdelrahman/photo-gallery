import { staticData } from "../../data/static-data";

import "../../css/Content/Content.css";

const Header = () => {
  return (
    <section className="content-wrapper">
      <div className="container">
        <div className="info">
          <h3>{staticData.titleOfContentSection}</h3>
          <p>{staticData.textOfContentSection}</p>
        </div>
      </div>
    </section>
  );
};

export default Header;
