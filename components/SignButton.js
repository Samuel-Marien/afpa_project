import Link from 'next/link';
import Button from 'react-bootstrap/Button';

const SignButton = (props) => {
  const { href, variant, className, onClick, children } = props;
  return (
    <Link href={href}>
      <Button variant={variant} className={className} onClick={onClick}>
        {children}
      </Button>
    </Link>
  );
};

export default SignButton;
