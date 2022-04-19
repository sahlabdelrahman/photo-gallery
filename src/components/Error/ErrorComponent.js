import "../../css/Error/ErrorComponent.css";

const ErrorComponent = (error) => {
  console.log(error);
  return (
    <div className="error-wrapper">
      <p>{error?.error?.message}</p>
    </div>
  );
};

export default ErrorComponent;
