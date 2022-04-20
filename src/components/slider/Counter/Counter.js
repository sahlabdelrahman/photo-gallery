import { useSelector } from "react-redux";
import "../../../css/slider/Counter/Counter.css";

const Counter = () => {
  const { totalImages, activeImage } = useSelector((state) => state.images);

  return (
    <div className="counter">
      <p>
        {activeImage + 1} / {totalImages}
      </p>
    </div>
  );
};

export default Counter;
