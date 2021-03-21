import Link from 'next/link';
import Button from 'react-bootstrap/Button';

const SignButton = (props) => {
  const { href, variant, className, children } = props;
  return (
    <Link href={href}>
      <Button variant={variant} className={className}>
        {children}
      </Button>
    </Link>
  );
};

export default SignButton;
