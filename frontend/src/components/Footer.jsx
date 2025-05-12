import { IoLocation } from "react-icons/io5";
import { FaLinkedin, FaPhone, FaYoutube } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import footerlogo from "../assets/logo.png";
import { FaFacebook } from "react-icons/fa6";


const Footer = () => {
  return (
    <div className="px-[5%]">
      <footer className="footer md:footer-horizontal text-base-content py-10">
        <nav className="flex-1">
          <h6 className="footer-title">Contact</h6>
          <a
            className="link link-hover flex items-center gap-5 mb-1"
            target="_blank"
            href="https://maps.app.goo.gl/S8e5qJ23bh4uTXyP6"
          >
            <IoLocation size={25} />
            <span>
              জলিল বিশ্বাস পয়েন্ট (৪র্থ তলা) <br />
              জিরো পয়েন্ট বড় মসজিদের পশ্চিম পাশে <br />
              সাহেব বাজার, রাজশাহী, বাংলাদেশ
            </span>
          </a>
          <a
            className="link link-hover flex items-center gap-5 mb-1"
            target="_blank"
            href="tel:01766385772"
          >
            <FaPhone size={20} />
            <span className="ms-1">01766-358772</span>
          </a>
          <a
            className="link link-hover flex items-center gap-5"
            target="_blank"
            href="mailto:info@ramitbd.com"
          >
            <CiMail size={25} />
            <span>info@ramitbd.com</span>
          </a>
        </nav>
        <nav className="flex-1 flex-wrap">
          <h6 className="footer-title">Important Links</h6>
          <a className="link link-hover mb-2" href="/notices" target="_blank">
            Notices
          </a>
          <a
            className="link link-hover mb-2"
            href="https://www.fiverr.com/"
            target="_blank"
          >
            Fiverr
          </a>
          <a
            className="link link-hover mb-2"
            href="https://www.upwork.com/"
            target="_blank"
          >
            Upwork
          </a>
          <a
            className="link link-hover"
            href="https://www.freelancer.com/ramitbd"
          >
            Freelancer
          </a>
        </nav>
        <nav className="flex-1 flex-wrap">
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover mb-2">Documents</a>
          <a className="link link-hover mb-2">Terms of use</a>
          <a className="link link-hover mb-2">Privacy policy</a>
          <a className="link link-hover mb-2">Cookie policy</a>
        </nav>
        <form className="flex-1 flex-wrap">
          <h6 className="footer-title">Newsletter</h6>
          <fieldset className="w-100">
            <label className="font-bold">Join with us</label> <br />
            <div>
              <input
                type="text"
                placeholder="Your Phone Number or Gmail"
                className="input input-bordered join-item mt-2"
              />
              <button className="btn btn-primary join-item mt-2">
                Subscribe
              </button>
            </div>
          </fieldset>
        </form>
      </footer>
      <section className="lowerfooter py-3 lg:flex items-center justify-between border-t-1 border-t-white-700">
        <div>
          <img src={footerlogo} alt="Footer Logo" className="h-6 text-center" />
        </div>
        <div className="copyright mt-4 lg:mt-0">
          <p>
            © 2017 - {new Date().getFullYear()} | All rights reserved by RAM IT
            BD
          </p>
        </div>
        <div className="social flex items-center mt-4 lg:mt-0">
          <h2 className="me-2">Our Social Links:</h2>
          <nav>
            <div className="flex gap-4">
              <a>
                <FaFacebook />
              </a>
              <a>
                <FaLinkedin></FaLinkedin>
              </a>
              <a>
                <FaYoutube></FaYoutube>
              </a>
            </div>
          </nav>
        </div>
      </section>
    </div>
  );
};

export default Footer;
