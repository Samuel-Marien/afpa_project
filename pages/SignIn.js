import PageHorizontal from '../components/PageHorizontal';
import ConnectForm from '../components/ConnectForm';

const TestPage = () => {
  return (
    <div>
      <PageHorizontal
        title="Sign In"
        pageTitle="Sign in"
        imgUrl="/influencer-4081842_1920.jpg"
      >
        <ConnectForm />
      </PageHorizontal>
    </div>
  );
};
export default TestPage;
