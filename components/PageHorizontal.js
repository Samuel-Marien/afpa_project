import Head from 'next/head';

import BackButton from './BackButton';
import Logo from './Logo';

const PageHorizontal = (props) => {
  const { title, pageTitle, imgUrl, children } = props;
  return (
    <div
      className="text-secondary"
      style={{
        backgroundImage: `url(${imgUrl})`,
        height: '100vh',
      }}
    >
      <Head>
        <title>{title}</title>
      </Head>
      <div className="container d-flex flex-column align-items-center float-right">
        <div className="align-self-end mt-3">
          <BackButton buttonTitle="retour" />
        </div>
        <div>
          <Logo size="50" />
        </div>
        <div>
          <h1 className="mt-3 font-weight-light">{pageTitle}</h1>
        </div>
        <div className="mt-2">{children}</div>
      </div>
    </div>
  );
};

export default PageHorizontal;
