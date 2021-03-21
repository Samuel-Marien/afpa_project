import SignButton from './SignButton';

const ContentTitle = (props) => {
  return (
    <div className="container text-center mt-5">
      <h1 className="font-weight-bold">Let's build the network together</h1>
      <p>
        So that the alumni network meets your aspirations and your convictions,
        it is with you that we are building it.
      </p>
      <p>
        So that the Afpa community can act on the world, let's get involved
        together!
      </p>
      <div inline className="mt-5">
        <SignButton
          href={'/selectRolePage'}
          variant={'outline-info'}
          className={'px-5 mr-5 shadow'}
        >
          Sign Up
        </SignButton>
        <SignButton
          href={'/SignIn'}
          variant={'outline-secondary'}
          className={'px-5 shadow'}
        >
          Sign In
        </SignButton>
      </div>
    </div>
  );
};

export default ContentTitle;
