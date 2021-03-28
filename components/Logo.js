import Link from 'next/link';

import { GiCondorEmblem } from 'react-icons/gi';

const Logo = (props) => {
  const { size, titleStyle } = props;

  return (
    <Link href="/">
      <a className="text-decoration-none">
        <div className="text-secondary font-weight-bold text-decoration-none text-muted d-flex align-items-center">
          <GiCondorEmblem size={size} />
          <span className={titleStyle}>AfpA 'Lumni</span>
        </div>
      </a>
    </Link>
  );
};

export default Logo;
