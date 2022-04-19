import { useState } from "react";

import Header from "../../components/Header/Header";
import Content from "../../components/Content/Content";
import Grid from "../../components/Grid/Grid";
import Modal from "../../components/Modal/Modal";

const Home = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div>
      <Header />
      <Content />
      <main>
        <Grid setSelectedImg={setSelectedImg} />
      </main>
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
};

export default Home;
