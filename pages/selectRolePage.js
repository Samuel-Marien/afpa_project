import PageHorizontal from '../components/PageHorizontal';
import { GiSpellBook, GiSuitcase, GiSchoolBag } from 'react-icons/gi';

const SelectRole = (props) => {
  return (
    <PageHorizontal
      title="Select role"
      pageTitle="You are..."
      imgUrl="/compass-2646437_1920.jpg"
    >
      <div className="container d-flex mt-5">
        <div className="d-flex flex-column align-items-center">
          <a href="#">
            <GiSchoolBag
              size="100"
              className="border border-info rounded-circle p-1 mx-5 text-secondary shadow"
            />
          </a>
          <h3 className="mt-2">Student</h3>
        </div>
        <div className="d-flex flex-column align-items-center">
          <a href="#">
            <GiSpellBook
              size="100"
              className="border border-warning rounded-circle p-1 mx-5 text-secondary shadow"
            />
          </a>
          <h3 className="mt-2">Teacher</h3>
        </div>

        <div className="d-flex flex-column align-items-center">
          <a href="#">
            <GiSuitcase
              size="100"
              className="border border-danger rounded-circle p-1 mx-5 text-secondary shadow"
            />
          </a>
          <h3 className="mt-2">Recruiter</h3>
        </div>
      </div>
    </PageHorizontal>
  );
};

export default SelectRole;
