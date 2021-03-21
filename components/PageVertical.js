import Head from 'next/head';

import NavBar from './NavBar';
import Carousel from './Carousel';
import ContentTitle from './ContentTitle';

const PageVertical = (props) => {
  const { title } = props;
  return (
    <div>
      <div>
        <Head>{title}</Head>
      </div>
      <NavBar />
      <Carousel />
      <ContentTitle />
    </div>
  );
};
export default PageVertical;
