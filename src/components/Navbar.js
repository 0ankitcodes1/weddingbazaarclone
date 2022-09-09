import { Link } from "react-router-dom";
import logo from "../assets/logo.gif";
import footerLogo from "../assets/footer-logo.png";

function toggleMenu() {
    document
      .querySelector("#sidenavbar-container")
      .classList.toggle("hidden");
}
function enableSearch() {
  document.querySelector("#search-container").classList.toggle("hidden");
}

const Navbar = () => {
  return (
    <>
      <nav>
        <div>
          <div className="bg-yellow-500 text-center text-sm py-2">
            Welcome to our new identity. Welcome to WeddingBazaar!
          </div>
          <div className="bg-[#FA4A6F]">
            <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-between">
              <div>
                <Link to="/">
                  <img className="w-44" src={logo} alt="" />
                </Link>
              </div>
              <ul className="flex gap-4 text-sm items-center">
                <li className="hidden md:block group relative">
                  <Link to="/service">
                    <span className="block p-3 transition-all hover:bg-[#FF7D88] rounded-lg text-white">
                      VENDOR
                    </span>
                  </Link>
                  <div className="absolute z-40 right-[50%] top-10 translate-x-[50%] hidden group-hover:block p-2">
                    <ul className="bg-white border shadow-lg w-[500px] grid grid-cols-12 p-4">
                      <li className="col-span-6">
                        <Link to="/service">
                          <span className="inline-block p-3 hover:bg-gray-200">
                            📷 Wedding Photographers
                          </span>
                        </Link>
                      </li>
                      <li className="col-span-6">
                        <Link to="/service">
                          <span className="inline-block p-3 hover:bg-gray-200">
                            📷 Wedding Photographers
                          </span>
                        </Link>
                      </li>
                      <li className="col-span-6">
                        <Link to="/service">
                          <span className="inline-block p-3 hover:bg-gray-200">
                            📷 Wedding Photographers
                          </span>
                        </Link>
                      </li>
                      <li className="col-span-6">
                        <Link to="/service">
                          <span className="inline-block p-3 hover:bg-gray-200">
                            📷 Wedding Photographers
                          </span>
                        </Link>
                      </li>
                      <li className="col-span-6">
                        <Link to="/service">
                          <span className="inline-block p-3 hover:bg-gray-200">
                            📷 Wedding Photographers
                          </span>
                        </Link>
                      </li>
                      <li className="col-span-6">
                        <Link to="/service">
                          <span className="inline-block p-3 hover:bg-gray-200">
                            📷 Wedding Photographers
                          </span>
                        </Link>
                      </li>
                      <li className="col-span-6">
                        <Link to="/service">
                          <span className="inline-block p-3 hover:bg-gray-200">
                            📷 Wedding Photographers
                          </span>
                        </Link>
                      </li>
                      <li className="col-span-6">
                        <Link to="/service">
                          <span className="inline-block p-3 hover:bg-gray-200">
                            📷 Wedding Photographers
                          </span>
                        </Link>
                      </li>
                      <li className="col-span-6">
                        <Link to="/service">
                          <span className="inline-block p-3 hover:bg-gray-200">
                            📷 Wedding Photographers
                          </span>
                        </Link>
                      </li>
                      <li className="col-span-6">
                        <Link to="/service">
                          <span className="inline-block p-3 hover:bg-gray-200">
                            📷 Wedding Photographers
                          </span>
                        </Link>
                      </li>
                      <li className="col-span-6">
                        <Link to="/service">
                          <span className="inline-block p-3 hover:bg-gray-200">
                            📷 Wedding Photographers
                          </span>
                        </Link>
                      </li>
                      <li className="col-span-6">
                        <Link to="/service">
                          <span className="inline-block p-3 hover:bg-gray-200">
                            📷 Wedding Photographers
                          </span>
                        </Link>
                      </li>
                      <li className="col-span-6">
                        <Link to="/service">
                          <span className="inline-block p-3 hover:bg-gray-200">
                            📷 Wedding Photographers
                          </span>
                        </Link>
                      </li>
                      <li className="col-span-6">
                        <Link to="/service">
                          <span className="inline-block p-3 hover:bg-gray-200">
                            📷 Wedding Photographers
                          </span>
                        </Link>
                      </li>
                      <li className="col-span-12">
                        <hr className="my-3" />
                        <div>
                          <span className="mr-2">I'm a Vendor</span>
                          <Link to="/register-as-vendor">
                            <span className="border rounded-full px-4 py-2 hover:bg-gray-600 hover:text-white transition-all inline-block">
                              Register Now
                            </span>
                          </Link>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <Link to="/blog">
                    <span className="hidden md:block p-3 transition-all hover:bg-[#FF7D88] rounded-lg text-white">
                      BLOG
                    </span>
                  </Link>
                </li>
                <li>
                  <button
                    onClick={enableSearch}
                    className="p-3 flex gap-1 items-center transition-all hover:bg-[#FF7D88] rounded-lg text-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                      />
                    </svg>
                    <span className="hidden md:block">SEARCH</span>
                  </button>
                </li>
                <li className="hidden md:block">
                  <Link to="/login">
                    <span className="block p-3 transition-all hover:bg-[#FF7D88] rounded-lg text-white">
                      LOGIN
                    </span>
                  </Link>
                </li>
                <li className="md:hidden">
                  <button
                    onClick={toggleMenu}
                    className="p-3 flex gap-1 items-center transition-all hover:bg-[#FF7D88] rounded-lg text-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                      />
                    </svg>
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div id="search-container" className="hidden">
            <form className="max-w-screen-xl mx-auto px-4">
              <div className="border rounded-full border-gray-400 flex my-2">
                <input
                  className="border-0 px-4 rounded-tl-full outline-none rounded-bl-full w-full"
                  type="text"
                  placeholder="Search for wedding vendors..."
                />
                <button className="px-3 py-2 hover:bg-gray-200 rounded-br-full rounded-tr-full">
                  SEARCH
                </button>
              </div>
            </form>
          </div>

          <div id="sidenavbar-container" className="hidden md:hidden">
            <ul className="absolute top-0 z-50 bg-white w-56 h-screen border-r shadow-lg p-4">
              <li>
                <Link to="/">
                  <img className="mb-2" src={footerLogo} alt="" />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <span className="block p-2 hover:bg-gray-200 rounded-lg">
                    HOME
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/about">
                  <span className="block p-2 hover:bg-gray-200 rounded-lg">
                    ABOUT US
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/service">
                  <span className="block p-2 hover:bg-gray-200 rounded-lg">
                    VENDOR
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/blog">
                  <span className="block p-2 hover:bg-gray-200 rounded-lg">
                    BLOG
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/login">
                  <span className="block p-2 hover:bg-gray-200 rounded-lg">
                    LOGIN
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/register">
                  <span className="block p-2 hover:bg-gray-200 rounded-lg">
                    REGISTER
                  </span>
                </Link>
              </li>
            </ul>
            <button
              onClick={toggleMenu}
              className="absolute top-0 z-50 left-[224px] bg-white p-2 transition-all hover:scale-[1.1]"
            >
              ❌
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
