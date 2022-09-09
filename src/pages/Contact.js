/* eslint-disable jsx-a11y/alt-text */
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <section className="border-b">
        <nav className="max-w-screen-xl px-4 mx-auto py-2">
          <ul className="flex items-center">
            <li>
              <Link to="/">
                <div className="flex items-center text-gray-500 hover:text-gray-800">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                  </svg>
                  Home
                </div>
              </Link>
            </li>
            <li>
              <div className="flex items-center text-gray-500">
                <svg
                  className="w-6 h-6 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Contact
              </div>
            </li>
          </ul>
        </nav>
      </section>
      <section className="max-w-screen-xl mx-auto px-4 py-12">
        <div>
          <h1 className="text-2xl font-bold text-black mb-8">Contact Us</h1>
          <p>WeddingBazaar.com</p>
          <p>A Unit of Matrimony.com Group</p>
          <p>Arihant E-Park, LB Rd, Adyar, Chennai, Tamil Nadu 600020</p>
          <div className="mt-10">
            <Link to="mailto:care@weddingbazaar.com"
              className="mr-3 border inline-block rounded-full text-red-500 font-bold border-red-600 px-5 py-2 transition-all hover:bg-red-500 hover:text-white"
            >
              ✉ care@weddingbazaar.com
            </Link>
            <Link to="tel:1234567890"
              className="border inline-block rounded-full text-red-500 font-bold border-red-600 px-5 py-2 transition-all hover:bg-red-500 hover:text-white"
            >
              📞 1234567890
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
