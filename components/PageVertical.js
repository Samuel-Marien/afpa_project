import Head from 'next/head';

import NavBar from './NavBar';
import Carousel from './Carousel';
import ContentTitle from './ContentTitle';
import JumberRole from './JumberRole';
import JumberHero from './JumberHero';

const PageVertical = (props) => {
  const { title } = props;
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>

      <NavBar />
      <Carousel />
      <ContentTitle />
      <JumberRole />
      <JumberHero src={'/businessmen.jpg'} alt={'cooperation picture'} />
    </div>
  );
};
export default PageVertical;
