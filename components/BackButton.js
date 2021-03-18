import Link from 'next/link';

const BackButton = (props) => {
  const { buttonTitle } = props;
  return (
    <Link href="/">
      <a>
        <button className="btn btn-secondary">{buttonTitle}</button>
      </a>
    </Link>
  );
};

export default BackButton;
