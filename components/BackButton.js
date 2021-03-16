const BackButton = (props) => {
  const { buttonTitle } = props;
  return (
    <button className="btn btn-secondary" style={{ fontWeight: 700 }}>
      {buttonTitle}
    </button>
  );
};

export default BackButton;
