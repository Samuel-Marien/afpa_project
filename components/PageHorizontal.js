import Head from 'next/head';
import Image from 'next/image';
import BackButton from './BackButton';
import { GiCondorEmblem } from 'react-icons/gi';

const PageHorizontal = (props) => {
  const { title, pageTitle, imgUrl, children } = props;
  return (
    <div className="text-secondary">
      <Head>
        <title>{title}</title>
      </Head>
      <div className="d-flex">
        <div>
          <Image src={imgUrl} width="500px" height="1000px" />
        </div>

        <div className="container w-100 d-flex flex-column align-items-center">
          <div className="align-self-end mt-3">
            <BackButton buttonTitle="retour" />
          </div>
          <div>
            <h1 className="mt-5 text-secondary font-weight-bold">
              <GiCondorEmblem size="70" />
              AfpA 'Lumni
            </h1>
          </div>
          <div>
            <h1 className="mt-5">{pageTitle}</h1>
          </div>
          <div className="mt-2">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default PageHorizontal;
