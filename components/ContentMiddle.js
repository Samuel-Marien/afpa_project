const ContentMiddle = (props) => {
  const { title, txt1, txt2, option } = props;
  return (
    <div className="mx-auto my-5 d-flex flex-column w-75 align-items-center">
      <h1 className="font-weight-bold align-self-center m-1">{title}</h1>
      <p className="w-50 mt-5 pl-5">{txt1}</p>
      <p className="w-50 mt-5 pl-5">{txt2}</p>
      {option}
    </div>
  );
};

export default ContentMiddle;
