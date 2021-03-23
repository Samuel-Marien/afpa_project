import { GiCondorEmblem } from 'react-icons/gi';
import Link from 'next/link';

const Logo = (props) => {
  const { size, titleStyle } = props;

  return (
    <Link href="/">
      <a className="text-decoration-none">
        <div className="text-secondary font-weight-bold text-decoration-none text-muted">
          <GiCondorEmblem size={size} />
          <span className={titleStyle}>AfpA 'Lumni</span>
        </div>
      </a>
    </Link>
  );
};

export default Logo;
