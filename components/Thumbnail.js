import Link from 'next/link';

import Card from 'react-bootstrap/Card';

import { IoIosMail, IoIosEye } from 'react-icons/io';

const Thumbnail = (props) => {
  const { src, role, title, txt1, txt2, children } = props;
  return (
    <Card style={{ width: '16rem' }} className="shadow bg-dark text-light mx-4">
      <Card.Img
        variant="top"
        src={src}
        style={{ height: '230px', width: 'auto' }}
      />
      <Card.ImgOverlay className="p-2">
        <div className="d-flex justify-content-between">
          <Link href="/">
            <a className="text-secondary shadow">
              <div
                className=" px-2 rounded shadow bg-light"
                style={{ opacity: '.6' }}
              >
                <IoIosMail size={25} />
              </div>
            </a>
          </Link>
          <Link href="/">
            <a className="text-secondary">
              <div
                className="px-2 ml-3 rounded shadow bg-light"
                style={{ opacity: '.6' }}
              >
                <IoIosEye size={25} />
              </div>
            </a>
          </Link>
        </div>
      </Card.ImgOverlay>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">I'm {role}</Card.Subtitle>
        <Card.Text>{txt1}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Thumbnail;
