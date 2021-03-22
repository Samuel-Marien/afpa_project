import Thumbnail from './Thumbnail';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { CardDeck } from 'react-bootstrap';

const ContentCards = (props) => {
  return (
    <Jumbotron className=" mt-5 px-5">
      <CardDeck className="d-flex px-5 justify-content-between">
        <Thumbnail
          src={'/personaFemale.jpg'}
          title={'John Doe'}
          role={'Recruiter'}
          txt1={`Lorem Ipsum is simply dummy text of the printing and typesetting industry.`}
        ></Thumbnail>
        <Thumbnail
          src={'/personaTeacher.jpg'}
          title={'John Doe'}
          role={'Teacher'}
          txt1={`Lorem Ipsum is simply dummy text of the printing and typesetting industry.`}
        />
        <Thumbnail
          src={'/personaFemale3.jpg'}
          title={'John Doe'}
          role={'Student'}
          txt1={
            'Hello, graduated from AFPA, I am a NodeJS / HTML developer available in Nantes'
          }
        />
        <Thumbnail
          src={'/personaFemale.jpg'}
          title={'John Doe'}
          role={'Recruiter'}
          txt1={`Lorem Ipsum is simply dummy text of the printing and typesetting industry.`}
        ></Thumbnail>
        <Thumbnail
          src={'/personaTeacher.jpg'}
          title={'John Doe'}
          role={'Teacher'}
          txt1={`Lorem Ipsum is simply dummy text of the printing and typesetting industry.`}
        />
        <Thumbnail
          src={'/personaFemale3.jpg'}
          title={'John Doe'}
          role={'Student'}
          txt1={
            'Hello, graduated from AFPA, I am a NodeJS / HTML developer available in Nantes'
          }
        />
      </CardDeck>
    </Jumbotron>
  );
};

export default ContentCards;
