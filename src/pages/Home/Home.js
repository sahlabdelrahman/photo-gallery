import { useDispatch, useSelector } from "react-redux";
import { fetchImages } from "../../store/actions/actions";

import Header from "../../components/Header/Header";
import Content from "../../components/Content/Content";
import Grid from "../../components/Grid/Grid";
import Modal from "../../components/Modal/Modal";

const Home = () => {
  const selectedImage = useSelector((state) => state.images.selectedImage);

  const dispatch = useDispatch();

  dispatch(fetchImages());

  return (
    <div>
      <Header />
      <Content />
      <main>
        <Grid />
      </main>
      {selectedImage && <Modal selectedImage={selectedImage} />}
    </div>
  );
};

export default Home;
