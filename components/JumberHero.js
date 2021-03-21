import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

const JumberHero = (props) => {
  const { src, alt } = props;
  return (
    <Jumbotron fluid>
      <Image src={src} alt={alt} />
    </Jumbotron>
  );
};

export default JumberHero;
