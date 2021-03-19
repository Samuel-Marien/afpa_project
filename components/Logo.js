import { GiCondorEmblem } from 'react-icons/gi';

const Logo = (props) => {
  const { size } = props;
  return (
    <a href="./pages/index.js" className="text-decoration-none">
      <div className="text-secondary font-weight-bold text-decoration-none text-muted">
        <GiCondorEmblem size={size} />
        AfpA 'Lumni
      </div>
    </a>
  );
};

export default Logo;
