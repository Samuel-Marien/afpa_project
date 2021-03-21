import Image from 'next/image';

const CircleIconEg = (props) => {
  const { src, type, txt } = props;
  return (
    <div className="w-25 mx-4">
      <Image
        src={src}
        className="w-75 rounded-circle"
        width={150}
        height={150}
      />
      <p className="font-weight-bold">{type}</p>
      <p className="font-weight-light" style={{ fontSize: '.8rem' }}>
        {txt}
      </p>
    </div>
  );
};

export default CircleIconEg;
