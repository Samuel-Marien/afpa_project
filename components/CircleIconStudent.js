import { GiSchoolBag } from 'react-icons/gi';

const CircleIconStudent = (props) => {
  return (
    <div className="d-flex flex-column align-items-center">
      <a href="#">
        <GiSchoolBag
          size="100"
          className="border border-info rounded-circle p-1 mx-5 text-secondary shadow"
        />
      </a>
      <h3 className="mt-2">Student</h3>
    </div>
  );
};

export default CircleIconStudent;
