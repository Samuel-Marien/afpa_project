import Head from 'next/head';

import NavBar from './NavBar';
import Carousel from './Carousel';

const PageVertical = (props) => {
  const { title } = props;
  return (
    <div>
      <div>
        <Head>{title}</Head>
      </div>
      <NavBar />
      <Carousel />
    </div>
  );
};
export default PageVertical;
