import Head from 'next/head';
import styled from '@emotion/styled';
import Image from 'next/image';
import BackButton from './BackButton';
import { IoPeopleCircle } from 'react-icons/io5';
import { GiCondorEmblem } from 'react-icons/gi';

const PageHorizontal = (props) => {
  const { title, pageTitle, imgUrl, children } = props;
  return (
    <div>
      <Head>
        <title>{title}</title>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Bitter:ital,wght@0,200;0,500;0,700;0,900;1,200;1,500;1,700;1,900&family=Roboto:wght@100&display=swap');
        </style>
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
            <h1
              fontFamily="Bitter"
              style={{ fontWeight: 700 }}
              className="mt-5"
            >
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
