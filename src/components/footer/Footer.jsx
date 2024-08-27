import { Link } from "react-router-dom";
import { TbSend2 } from "react-icons/tb";
import { FaFacebookF } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { images } from "../../assets/images";

const Footer = () => {
  return (
    <footer className="footer bg-black px-20 pt-20 pb-5 text-white">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8">
        <div className="footer-column">
          <h3 className="mb-7 text-[24px] font-[700]">Exclusive</h3>
          <p className="text-[20px] mb-5">Subscribe</p>
          <p className="text-[#FAFAFA]">Get 10% off your first order</p>
          <div className="footer-search w-[215px] flex items-center justify-between mt-4 p-2 border-[2px] border-[#FAFAFA] rounded">
            <input
              className="inputSearch outline-none bg-transparent text-white w-[130px]"
              type="email"
              placeholder="Enter your email"
            />
            <Link to="/">
              <TbSend2 className="text-[20px]" />
            </Link>
          </div>
        </div>

        <div className="footer-column">
          <h3 className="mb-7 text-[20px] font-[500]">Support</h3>
          <p className="text-[#FAFAFA] mb-1">111 Bijoy sarani, Dhaka,</p>
          <p className="text-[#FAFAFA]">DH 1515, Bangladesh.</p>
          <p className="text-[#FAFAFA] mt-3 mb-1">
            <Link to="mailto:exclusive@gmail.com">exclusive@gmail.com</Link>
          </p>
          <p className="text-[#FAFAFA]">
            <Link to="tel:+88015-88888-9999">+88015-88888-9999</Link>
          </p>
        </div>

        <div className="footer-column">
          <h3 className="mb-7 text-[20px] font-[500]">Account</h3>
          <ul className="flex flex-col gap-5">
            <li>
              <Link to="/">My Account</Link>{" "}
            </li>
            <li>
              <Link to="/">Login / Register</Link>
            </li>
            <li>
              <Link to="/">Cart</Link>
            </li>
            <li>
              <Link to="/">Wishlist</Link>
            </li>
            <li>
              <Link to="/">Shop</Link>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h3 className="mb-7 text-[20px] font-[500]">Quick Link</h3>
          <ul className="flex flex-col gap-5">
            <li>
              <Link to="/">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/">Terms Of Use</Link>
            </li>
            <li>
              <Link to="/">FAQ</Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h3 className="mb-7 text-[20px] font-[500]">Download App</h3>
          <p className="text-[#FAFAFA]">Save $3 with App New User Only</p>
          <div className="flex items-center gap-1 mt-3 mb-5">
            <img src={images.qrCode} alt="" />
            <div className="word-play flex flex-col gap-1">
              <a>
                <img src={images.appleStore} alt="App Store" />
              </a>
              <a>
                <img src={images.googlePlay} alt="App Store" />
              </a>
            </div>
          </div>
          <div className="social flex items-center gap-8">
            <a className="text-[20px]" href="/">
              <FaFacebookF />
            </a>
            <a className="text-[20px]" href="/">
              <CiTwitter />
            </a>
            <a className="text-[20px]" href="/">
              <FaInstagram />
            </a>
            <a className="text-[20px]" href="/">
              <CiLinkedin />
            </a>
          </div>
        </div>
      </div>
      <div className="copyright text-center mt-16 text-[#FFFFFF]">
        <p>&copy; Copyright Rimel 2024. All right reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
