import { Link } from "react-router-dom";

const Career = () => {
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
              <Link to="/career">
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
                Career Details
              </div>
            </li>
          </ul>
        </nav>
      </section>

      <section className="border-b">
      <div className="prose max-w-screen-xl mx-auto p-4 py-12">
        <h1>Job Title Goes here !</h1>
        <div className="my-4">
          <span>🗺 Remote</span>
          <span>🧑 Technology</span>
          <span>💼 Full-time</span>
        </div>
        <div>
          <a href="#jointeam"
            className="inline-block text-center bg-gradient-to-r from-red-500 to-red-600 py-3 px-8 rounded-full text-gray-100 text-lg font-bold transition-all hover:rotate-[1deg] no-underline"
            >Apply For Job</a>
        </div>
        <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, amet?</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, repellendus consequuntur. Culpa quod ut ipsum totam dolores, quo explicabo aliquid. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, repellendus consequuntur. Culpa quod ut ipsum totam dolores, quo explicabo aliquid. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, repellendus consequuntur. Culpa quod ut ipsum totam dolores, quo explicabo aliquid. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, repellendus consequuntur. Culpa quod ut ipsum totam dolores, quo explicabo aliquid.</p>
        <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, amet?</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, repellendus consequuntur. Culpa quod ut ipsum totam dolores, quo explicabo aliquid. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, repellendus consequuntur. Culpa quod ut ipsum totam dolores, quo explicabo aliquid. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, repellendus consequuntur. Culpa quod ut ipsum totam dolores, quo explicabo aliquid. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, repellendus consequuntur. Culpa quod ut ipsum totam dolores, quo explicabo aliquid.</p>
        <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, amet?</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, repellendus consequuntur. Culpa quod ut ipsum totam dolores, quo explicabo aliquid. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, repellendus consequuntur. Culpa quod ut ipsum totam dolores, quo explicabo aliquid. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, repellendus consequuntur. Culpa quod ut ipsum totam dolores, quo explicabo aliquid. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, repellendus consequuntur. Culpa quod ut ipsum totam dolores, quo explicabo aliquid.</p>
      </div>
    </section>

    <section id="jointeam">
      <div className="max-w-screen-xl mx-auto p-4 py-12">
        <h2 className="text-3xl font-bold mb-4">Apply for this position</h2>
        <form action="" className="mt-12">
            <div className="mb-6">
                <label className="w-full">
                    <div className="text-lg font-bold mb-3">Full Name</div>
                    <input
                      className="w-full px-6 py-3 rounded-full outline-none border-gray-300 transition-all focus:scale-[1.03] border"
                      type="text"
                      placeholder="Enter your full name"
                    />
                  </label>
            </div>
            <div className="mb-6">
                <label className="w-full">
                    <div className="text-lg font-bold mb-3">Email Address</div>
                    <input
                      className="w-full px-6 py-3 rounded-full outline-none border-gray-300 transition-all focus:scale-[1.03] border"
                      type="email"
                      placeholder="Enter your email address"
                    />
                  </label>
            </div>
            <div className="mb-6">
                <label className="w-full">
                    <div className="text-lg font-bold mb-3">Contact Number</div>
                    <input
                      className="w-full px-6 py-3 rounded-full outline-none border-gray-300 transition-all focus:scale-[1.03] border"
                      type="text"
                      placeholder="Enter your Contact number"
                    />
                  </label>
            </div>
            <div className="mb-6">
                <label className="w-full">
                    <div className="text-lg font-bold mb-3">Current CTC in Rs. (annual)</div>
                    <input
                      className="w-full px-6 py-3 rounded-full outline-none border-gray-300 transition-all focus:scale-[1.03] border"
                      type="text"
                    />
                  </label>
            </div>
            <div className="mb-6">
                <label className="w-full">
                    <div className="text-lg font-bold mb-3">Notice Period (in days)</div>
                    <input
                      className="w-full px-6 py-3 rounded-full outline-none border-gray-300 transition-all focus:scale-[1.03] border"
                      type="text"
                    />
                  </label>
            </div>
            <div className="mb-6">
                <label className="w-full">
                    <div className="text-lg font-bold mb-3">Current Location</div>
                    <input
                      className="w-full px-6 py-3 rounded-full outline-none border-gray-300 transition-all focus:scale-[1.03] border"
                      type="text"
                    />
                  </label>
            </div>
            <div className="mb-6">
                <label className="w-full">
                    <div className="text-lg font-bold mb-3">UPLOAD YOUR RESUME (.DOC or .PDF)</div>
                    <input
                      className="w-full px-6 py-3 rounded-full outline-none border-gray-300 transition-all focus:scale-[1.03] border"
                      type="file"
                    />
                  </label>
            </div>
            <div>
                <button type="submit" className="inline-block text-center bg-gradient-to-r from-red-500 to-red-600 py-3 px-8 rounded-full text-gray-100 text-lg font-bold transition-all hover:rotate-[1deg] no-underline">Apply Now</button>
            </div>
        </form>
      </div>
    </section>
    </>
  );
};

export default Career;
