import PageHorizontal from '../components/PageHorizontal';
import CircleIconStudent from '../components/CircleIconStudent';
import CircleIconTeacher from '../components/CircleIconTeacher';
import CircleIconRecruiter from '../components/CircleIconRecruiter';

const SelectRole = (props) => {
  return (
    <PageHorizontal
      title="Select role"
      pageTitle="You are..."
      imgUrl="/startup-593341_1920.jpg"
    >
      <div className="container d-flex mt-5">
        <CircleIconStudent />
        <CircleIconTeacher />
        <CircleIconRecruiter />
      </div>
    </PageHorizontal>
  );
};

export default SelectRole;
