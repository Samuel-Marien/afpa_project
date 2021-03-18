import PageHorizontal from '../components/PageHorizontal';
import CircleIconStudent from '../components/CircleIconStudent';
import SignUpForm from '../components/SignUpForm';

const StudentInscription = (props) => {
  return (
    <PageHorizontal
      title="Student Inscription"
      pageTitle="Sign Up"
      imgUrl="/people-2583442_1920.jpg"
    >
      <CircleIconStudent />
      <SignUpForm />
    </PageHorizontal>
  );
};

export default StudentInscription;
