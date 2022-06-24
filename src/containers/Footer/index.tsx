import React from 'react';
import { Link } from 'react-router-dom';
import { footerData } from './footerData';
import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiFillInstagram,
} from 'react-icons/ai';

const socialIcons = [
  {
    id: 0,
    icons: <AiFillFacebook size={25} />,
    links: 'https://facebook.com',
  },
  {
    id: 1,
    icons: <AiOutlineTwitter size={25} />,
    links: 'https://twitter.com',
  },
  {
    id: 0,
    icons: <AiFillInstagram size={25} />,
    links: 'https://instagram.com',
  },
];
const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary-color color-white">
      <div className="container py-5">
        <div className="row">
          <div className="col-md-4">
            <h6 className="footer__heading__logo">Nova</h6>
          </div>
          {footerData?.map((items) => (
            <div className="col-md-2" key={items?.id}>
              <div className="">
                <h4 className="fw-700 fs-16"> {items?.title} </h4>
                {items?.children?.map((item) => (
                  <Link
                    to={item?.path}
                    key={item?.id}
                    className="fw-400 fs-14 py-2 d-block"
                  >
                    {item?.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
          <div className="col-md-2">
            <h4 className="fw-700 fs-16"> Social Links </h4>
            <div className="flex mt-3">
              {socialIcons?.map((item) => (
                <Link to="/" className="me-2" key={item?.id}>
                  {item?.icons}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
