import { staticData } from "../../data/static-data";

import "../../css/Header/Header.css";

const Header = () => {
  return (
    <header>
      <div className="container">
        <h2>{staticData.titleOfHeader}</h2>
      </div>
    </header>
  );
};

export default Header;
