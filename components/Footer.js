import Link from 'next/link';

import Logo from './Logo';

const MyLi = (props) => {
  const { href, nameLink } = props;
  return (
    <li
      style={{
        fontSize: '.8rem',
        listStyle: 'none',
      }}
      className="decoration-none"
    >
      <Link href={href}>
        <a className="text-secondary">{nameLink}</a>
      </Link>
    </li>
  );
};

const Footer = (props) => {
  return (
    <div className="bg-dark text-light d-flex justify-content-center p-3">
      <div className="w-75 d-flex justify-content-between border-bottom border-info py-5">
        <Logo size={80} titleStyle="h1 font-weight-bold ml-3" />
        <div className="d-flex justify-content-between">
          <ul className="mr-4 ">
            <h6>Mobile App</h6>
            <MyLi href={'#'} nameLink={'Lorem Ipsum'} />
            <MyLi href={'#'} nameLink={'Lorem Ipsum'} />
            <MyLi href={'#'} nameLink={'Lorem Ipsum'} />
          </ul>
          <ul className="mr-4 ">
            <h6>Communauty</h6>
            <MyLi href={'#'} nameLink={'Lorem Ipsum'} />
            <MyLi href={'#'} nameLink={'Lorem Ipsum'} />
            <MyLi href={'#'} nameLink={'Lorem Ipsum'} />
          </ul>
          <ul className="mr-4 ">
            <h6>Company</h6>
            <MyLi href={'#'} nameLink={'Lorem Ipsum'} />
            <MyLi href={'#'} nameLink={'Lorem Ipsum'} />
            <MyLi href={'#'} nameLink={'Lorem Ipsum'} />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
