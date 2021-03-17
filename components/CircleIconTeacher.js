import { GiSpellBook } from 'react-icons/gi';

const CircleIconTeacher = (props) => {
  return (
    <div className="d-flex flex-column align-items-center">
      <a href="#">
        <GiSpellBook
          size="100"
          className="border border-warning rounded-circle p-1 mx-5 text-secondary shadow"
        />
      </a>
      <h3 className="mt-2">Teacher</h3>
    </div>
  );
};

export default CircleIconTeacher;
