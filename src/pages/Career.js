import hero from "../assets/hero-img.jpg";
import { Link } from "react-router-dom";

const Career = () => {
  return (
    <>
      <header>
        <div className="relative">
          <img
            className="w-full h-[400px] object-cover"
            src={hero}
            alt=""
          />
          <div className="absolute z-20 top-[50%] translate-y-[-50%] max-w-screen-xl left-4 md:left-10 xl:left-40">
            <h1 className="text-4xl font-bold text-white mb-4">Join us in</h1>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Bringing dream weddings to life!
            </h1>
          </div>
        </div>
      </header>

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
                Career
              </div>
            </li>
          </ul>
        </nav>
      </section>

      <section className="border-b">
        <div className="prose max-w-screen-xl mx-auto p-4 py-12">
          <h2>Why WeddingBazaar ?</h2>
          <p>
            WeddingBazaar is on a spree to make wedding planning in India
            exciting and hassle-free. With a millennial army of wedding
            fanatics, WeddingBazaar aims to aid wedding blues of every new-age
            couple across the country.
          </p>
          <p>
            We’re a driven team of wedding enthusiasts working to build a new
            way of wedding planning through delightful products and amazing
            customer service.
          </p>
          <p>
            We’ve always aimed to do things a little differently at
            WeddingBazaar. Since the early days, we’ve had a focus on building
            one of the most unique and fulfilling workplaces by rethinking a lot
            of traditional practices.
          </p>
          <p>
            A commitment to supporting our team and our customers has helped
            WeddingBazaar grow from humble beginnings to now serving more than
            10,000 couples every month & sustaining an ecosystem of over 60,000
            wedding vendors. Our passion for making meaningful connections flows
            through everything we do.
          </p>
          <p>
            We care about building a quality product, trusted relationships with
            our customers, and a sense of community that connects our customers
            and team with one another.
          </p>
          <div>
            <a
              href="#jointeam"
              className="inline-block text-center bg-gradient-to-r from-red-500 to-red-600 py-3 px-8 rounded-full text-gray-100 text-lg font-bold transition-all hover:rotate-[1deg]"
            >
              Join our team
            </a>
          </div>
        </div>
      </section>

      <section id="jointeam">
        <div className="max-w-screen-xl mx-auto p-4 py-12">
          <h2 className="text-3xl font-bold mb-4">Current Openings</h2>
          <div className="mb-6">
            <Link to="">
              <div className="inline-block rounded-full text-sm bg-red-500 px-4 py-2 text-white no-underline">
                ALL
              </div>
            </Link>
            <Link to="">
              <div className="ml-3 inline-block rounded-full text-sm border border-red-500 px-4 py-2 text-red-500 no-underline hover:bg-red-500 hover:text-gray-100">
                Technology
              </div>
            </Link>
          </div>

          <div className="border py-4 px-8 rounded-lg inline-block">
            <h3 className="text-xl font-bold">Technical Lead</h3>
            <div className="my-4">
              <span>🗺 Remote</span>
              <span>🧑 Technology</span>
              <span>💼 Full-time</span>
            </div>
            <div>
              <Link to="/career/career-details">
                <div className="inline-block rounded-full text-sm bg-red-500 px-4 py-2 text-white no-underline  transition-all hover:rotate-[2deg]">
                  Apply
                </div>
              </Link>
              <Link to="/career/career-details">
                <div className="inline-block ml-3 rounded-full text-sm bg-gray-500 px-4 py-2 text-white no-underline transition-all hover:rotate-[2deg]">
                  Read Details
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Career;
