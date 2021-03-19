import Head from 'next/head';

import NavBar from './NavBar';

const PageVertical = (props) => {
  const { title } = props;
  return (
    <div>
      <div>
        <Head>{title}</Head>
      </div>
      <NavBar />
    </div>
  );
};
export default PageVertical;
