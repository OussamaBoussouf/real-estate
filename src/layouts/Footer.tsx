import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__top">
        <div className='footer__left'>
          <Link to="/" className="footer__logo">
            .Doorza
          </Link>
          <p className="fs-xxs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            voluptatem unde obcaecati voluptatum deleniti eius a. Ratione
            expedita quo aliquid!
          </p>
        </div>
        <nav className='footer__nav' aria-label="Product">
          <h3 className="footer__title">Product</h3>
          <ul className="footer__section">
            <li>
              <Link to="#" className="footer__link">
                Overview
              </Link>
            </li>
            <li>
              <Link to="#" className="footer__link">
                Q&amp;A
              </Link>
            </li>
          </ul>
        </nav>
        <nav className='footer__nav' aria-label="Company">
          <h3 className="footer__title">Company</h3>
          <ul className="footer__section">
            <li>
              <Link to="#" className="footer__link">
                About us
              </Link>
            </li>
            <li>
              <Link to="#" className="footer__link">
                Why us
              </Link>
            </li>
          </ul>
        </nav>
        <nav className='footer__nav' aria-label="Policies">
          <h3 className="footer__title">Policies</h3>
          <ul className="footer__section">
            <li>
              <Link to="#" className="footer__link">
                Contact
              </Link>
            </li>
            <li>
              <Link to="#" className="footer__link">
                Privacy
              </Link>
            </li>
            <li>
              <Link to="#" className="footer__link">
                Terms
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="footer__divider" />
      <div className="container footer__bottom">
        <p className="footer__copyright">© 2026 .Doorza</p>
        <div className="footer__socials">
          <Link to="https://www.facebook.com" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.5em"
              height="1.5em"
              viewBox="0 0 24 24"
            >
              <title>facebook</title>
              <path
                fill="white"
                d="M20.9 2H3.1A1.1 1.1 0 0 0 2 3.1v17.8A1.1 1.1 0 0 0 3.1 22h9.58v-7.75h-2.6v-3h2.6V9a3.64 3.64 0 0 1 3.88-4a20 20 0 0 1 2.33.12v2.7H17.3c-1.26 0-1.5.6-1.5 1.47v1.93h3l-.39 3H15.8V22h5.1a1.1 1.1 0 0 0 1.1-1.1V3.1A1.1 1.1 0 0 0 20.9 2"
              />
            </svg>
          </Link>
          <Link to="https://www.x.com" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.5em"
              height="1.5em"
              viewBox="0 0 24 24"
            >
              <title>x-solid</title>
              <path
                fill="white"
                d="M13.795 10.533L20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22zm-2.38 2.95L9.97 11.464L4.36 3.627h2.31l4.528 6.317l1.443 2.02l6.018 8.409h-2.31z"
              />
            </svg>
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
