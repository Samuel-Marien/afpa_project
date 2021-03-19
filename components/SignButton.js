import Link from 'next/link';
import Button from 'react-bootstrap/Button';

const SignButton = (props) => {
  const { href, variant, children } = props;
  return (
    <Link href={href}>
      <Button variant={variant} className="mr-3 p-1">
        {children}
      </Button>
    </Link>
  );
};

export default SignButton;
