const BackButton = (props) => {
  const { buttonTitle } = props;
  return (
    <button className="btn btn-secondary font-weight-bold">
      {buttonTitle}
    </button>
  );
};

export default BackButton;
