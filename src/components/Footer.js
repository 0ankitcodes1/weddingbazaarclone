import { Link } from "react-router-dom";
import footerLogo from "../assets/footer-logo.png";
import { FiInstagram, FiFacebook, FiYoutube, FiPhoneCall, FiMail, FiCheck, FiTwitter } from "react-icons/fi";

const Footer = () => {
    return (
        <>
              <footer>
        <div className="bg-[#EAEFF2] shadow-md border-b border-t border-white">
          <div className="max-w-screen-xl mx-auto p-4 py-8">
            <h2 className="font-bold text-gray-800 text-xl">
              If you're a Wedding Vendor
            </h2>
            <p className="text-sm text-gray-600 py-4">
              REGISTER & BOOST YOUR BUSINESS 🚀
            </p>
            <div>
              <Link to="/">
                <div className="text-white font-bold px-8 py-2 rounded-full bg-blue-500 inline-block transition-all hover:bg-blue-600">
                  Register Now
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-[#F2EEEF] py-8">
          <div className="max-w-screen-xl mx-auto px-4">
            <img className="w-48" src={footerLogo} alt="logo" />
            <strong className="block text-sm my-2">
              Helps plan your wedding like a loved one
            </strong>
            <p className="text-sm">
              WeddingBazaar is India’s most loved Wedding Planning website!
              Check prices, verified reviews and book best wedding
              photographers, bridal makeup artists, wedding venues, decorators,
              and all other wedding vendors at guaranteed best prices. Get loads
              of latest wedding ideas & inspiration - bridal fashion, makeup and
              skincare tips, wedding planning tips, bachelorette & honeymoon
              ideas from India's largest wedding community & real weddings.
              WeddingBazaar is proud to have been the official wedding planner
              of celebrities like Yuvraj Singh & Bhuvneshwar Kumar. We love what
              we do, and that's how we help plan your wedding like a loved one!
            </p>
            <div className="mt-4">
              <Link to="/service">
                <div className="text-white font-bold px-8 py-2 rounded-full bg-[#FA4A6F] inline-block transition-all hover:bg-blue-600">
                  Hire a Vendor
                </div>
              </Link>
              <Link to="/register-as-vendor" className="ml-2">
                <div className="text-black font-bold px-8 py-2 rounded-full bg-gray-300 inline-block transition-all hover:bg-gray-400">
                  Register as a Vendor
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-[#F2EEEF] py-8 border-t border-b border-white">
          <div className="max-w-screen-xl mx-auto px-4">
            <h3 className="font-bold text-xl">More About Us</h3>
            <div className="mt-3">
              <Link to="/about" className="text-sm text-[#FA4A6F] transition-all hover:underline border-r border-black pr-3">About Us</Link>
              <Link to="/career" className="text-sm text-[#FA4A6F] transition-all hover:underline border-r border-black px-3">Careers</Link>
              <Link to="/contact" className="text-sm text-[#FA4A6F] transition-all hover:underline border-r border-black px-3">Contact Us</Link>
              <Link to="/privacy" className="text-sm text-[#FA4A6F] transition-all hover:underline border-r border-black px-3">Privacy Policy</Link>
              <Link to="/sitemap" className="text-sm text-[#FA4A6F] transition-all hover:underline border-r border-black px-3">Sitemap</Link>
              <Link to="/terms" className="text-sm text-[#FA4A6F] transition-all hover:underline border-r border-black px-3">Terms & Conditions</Link>
              <Link to="/blog" className="text-sm text-[#FA4A6F] transition-all hover:underline pl-3">Weeding Guest Post</Link>
            </div>
            <div className="mt-3 text-sm text-gray-500">
              &copy; Copyright 2022 WeddingBazaar - All Rights Reserved
            </div>
          </div>
        </div>
        <div className="bg-[#F2EEEF] py-8 border-t border-b border-white">
          <div className="max-w-screen-xl mx-auto px-4">
            <h3 className="font-bold text-xl mb-3">Contact Us</h3>
            <div className="flex flex-col md:flex-row justify-between gap-y-4 md:gap-6">
              <div>
                <p>👰 If you are getting married & need help:</p>
                <div className="py-4">
                  <Link to="mailto:care@weddingbazaar.com" className="border border-[#FA4A6F] text-[#FA4A6F] inline-flex items-center gap-1 py-2 px-4 rounded-full transition-all hover:bg-[#FA4A6F] hover:text-white">
                    <FiMail />
                    <span>care@weddingbazaar.com</span>
                  </Link>
                </div>
                <div>
                  <Link to="tel:98143628563" className="border border-[#FA4A6F] text-[#FA4A6F] inline-flex items-center gap-1 py-2 px-4 rounded-full transition-all hover:bg-[#FA4A6F] hover:text-white">
                    <FiPhoneCall />
                    <span>+977-98143628563</span>
                  </Link>
                </div>
              </div>
              <div>
                <p>💼 If you are a weddin vendor & need help:</p>
                <div className="py-4">
                  <Link to="mailto:care@weddingbazaar.com" className="border border-[#FA4A6F] text-[#FA4A6F] inline-flex items-center gap-1 py-2 px-4 rounded-full transition-all hover:bg-[#FA4A6F] hover:text-white">
                    <FiMail />
                    <span>care@weddingbazaar.com</span>
                  </Link>
                </div>
                <div>
                  <Link to="tel:98143628563" className="border border-[#FA4A6F] text-[#FA4A6F] inline-flex items-center gap-1 py-2 px-4 rounded-full transition-all hover:bg-[#FA4A6F] hover:text-white">
                    <FiPhoneCall />
                    <span>+977-98143628563</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#F2EEEF] py-8 border-t border-b border-white">
          <div className="max-w-screen-xl mx-auto px-4">
            <h3 className="font-bold text-xl mb-3">Get Amazing Wedding Ideas</h3>
            <div className="flex flex-col md:flex-row justify-between gap-y-4 md:gap-6">
              <div>
                <p>📲 Get Latest wedding blog updates:</p>
                <div className="flex items-center pt-4">
                  <label>
                    <input className="border-b-2 bg-transparent outline-none border-gray-500 focus:border-gray-900 p-2 text-sm" placeholder="Email Address"  />
                  </label>
                  <button className="p-3 rounded-full bg-[#FA4A6F] text-white transition-all hover:scale-[0.95]">
                    <FiCheck />
                  </button>
                </div>
              </div>
              <div>
                <p>📲 Follow Us on:</p>
                <div className="pt-4">
                  <Link to="/" className="p-3 mr-3 rounded-full bg-blue-400 hover:bg-blue-500 inline-block text-white">
                    <FiFacebook />
                  </Link>
                  <Link to="/" className="p-3 mr-3 rounded-full bg-pink-400 hover:bg-pink-500 inline-block text-white">
                    <FiInstagram />
                  </Link>
                  <Link to="/" className="p-3 mr-3 rounded-full bg-red-400 hover:bg-red-500 inline-block text-white">
                    <FiYoutube />
                  </Link>
                  <Link to="/" className="p-3 rounded-full bg-blue-400 hover:bg-blue-500 inline-block text-white">
                    <FiTwitter />
                  </Link>
                </div>
              </div>
            </div>
            <p className="text-lg mt-3">Most read articles and guides:</p>
            <div className="mt-3">
              <Link to="/blog/category/blog-details" className="text-sm text-[#FA4A6F] transition-all hover:underline border-r border-black pr-3">Wedding Cake Designs</Link>
              <Link to="/blog/category/blog-details" className="text-sm text-[#FA4A6F] transition-all hover:underline border-r border-black px-3">Couple Tattoo Ideas</Link>
              <Link to="/blog/category/blog-details" className="text-sm text-[#FA4A6F] transition-all hover:underline border-r border-black px-3">Happy Marriages</Link>
              <Link to="/blog/category/blog-details" className="text-sm text-[#FA4A6F] transition-all hover:underline border-r border-black px-3">Nepali Wedding Songs</Link>
              <Link to="/blog/category/blog-details" className="text-sm text-[#FA4A6F] transition-all hover:underline border-r border-black px-3">Gifts for Husbands</Link>
              <Link to="/blog/category/blog-details" className="text-sm text-[#FA4A6F] transition-all hover:underline border-r border-black px-3">Simple mehndi design</Link>
              <Link to="/blog/category/blog-details" className="text-sm text-[#FA4A6F] transition-all hover:underline pl-3">Wedding Dresses for Men</Link>
            </div>
          </div>
        </div>
      </footer>
        </>
    );
};

export default Footer;