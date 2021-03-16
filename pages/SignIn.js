import PageHorizontal from '../components/PageHorizontal';
import ConnectForm from '../components/ConnectForm';
import Button from 'react-bootstrap/Button';

const SignInPage = () => {
  return (
    <PageHorizontal
      title="Sign In"
      pageTitle="Sign in"
      imgUrl="/influencer-4081842_1920.jpg"
    >
      <ConnectForm />
      <div className="mt-5 text-center bg-light p-3 shadow rounded">
        <h5>I have no client space</h5>
        <p>
          Create your customer area in just a few clicks... and come to your
          home
        </p>
        <Button
          variant="secondary"
          type="submit"
          className="w-100 rounded-pill "
        >
          Create a customer area
        </Button>
      </div>
    </PageHorizontal>
  );
};
export default SignInPage;
