/* eslint-disable jsx-a11y/alt-text */
import hero from "../assets/hero-img.jpg";
import thumbnail from "../assets/wedding-bazaar-og.jpg";
import { Link } from "react-router-dom";

const Blog = () => {
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
            <h1 className="text-4xl font-bold text-white mb-4">
              WeddingBazaar Wedding Blog
            </h1>
            <p className="text-lg text-white">
              Best Nepal Wedding Planning Ideas & Practical Advice
            </p>
          </div>
        </div>
      </header>

      <section>
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
                Blog
              </div>
            </li>
          </ul>
        </nav>
      </section>

      <section>
        <div className="max-w-screen-xl mx-auto px-4">
          <ul className="flex overflow-x-scroll p-4 gap-8 shadow-lg rounded-lg">
            <li>
              <Link to="/blog/category">
                <div>
                  <div className="bg-pink-200 shadow-lg border w-[80px] h-[80px] flex items-center justify-center rounded-full text-2xl">
                    <img
                      className="w-full h-full object-cover rounded-full"
                      src={thumbnail}
                      alt=""
                    />
                  </div>
                  <span className="text-xs">Bridal Fashion</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/blog/category">
                <div>
                  <div className="bg-pink-200 shadow-lg border w-[80px] h-[80px] flex items-center justify-center rounded-full text-2xl">
                    <img
                      className="w-full h-full object-cover rounded-full"
                      src={thumbnail}
                      alt=""
                    />
                  </div>
                  <span className="text-xs">Bridal Fashion</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/blog/category">
                <div>
                  <div className="bg-pink-200 shadow-lg border w-[80px] h-[80px] flex items-center justify-center rounded-full text-2xl">
                    <img
                      className="w-full h-full object-cover rounded-full"
                      src={thumbnail}
                      alt=""
                    />
                  </div>
                  <span className="text-xs">Bridal Fashion</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/blog/category">
                <div>
                  <div className="bg-pink-200 shadow-lg border w-[80px] h-[80px] flex items-center justify-center rounded-full text-2xl">
                    <img
                      className="w-full h-full object-cover rounded-full"
                      src={thumbnail}
                      alt=""
                    />
                  </div>
                  <span className="text-xs">Bridal Fashion</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/blog/category">
                <div>
                  <div className="bg-pink-200 shadow-lg border w-[80px] h-[80px] flex items-center justify-center rounded-full text-2xl">
                    <img
                      className="w-full h-full object-cover rounded-full"
                      src={thumbnail}
                      alt=""
                    />
                  </div>
                  <span className="text-xs">Bridal Fashion</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/blog/category">
                <div>
                  <div className="bg-pink-200 shadow-lg border w-[80px] h-[80px] flex items-center justify-center rounded-full text-2xl">
                    <img
                      className="w-full h-full object-cover rounded-full"
                      src={thumbnail}
                      alt=""
                    />
                  </div>
                  <span className="text-xs">Bridal Fashion</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/blog/category">
                <div>
                  <div className="bg-pink-200 shadow-lg border w-[80px] h-[80px] flex items-center justify-center rounded-full text-2xl">
                    <img
                      className="w-full h-full object-cover rounded-full"
                      src={thumbnail}
                      alt=""
                    />
                  </div>
                  <span className="text-xs">Bridal Fashion</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/blog/category">
                <div>
                  <div className="bg-pink-200 shadow-lg border w-[80px] h-[80px] flex items-center justify-center rounded-full text-2xl">
                    <img
                      className="w-full h-full object-cover rounded-full"
                      src={thumbnail}
                      alt=""
                    />
                  </div>
                  <span className="text-xs">Bridal Fashion</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/blog">
                <div>
                  <div className="bg-pink-200 shadow-lg border w-[80px] h-[80px] flex items-center justify-center rounded-full text-2xl">
                    <img
                      className="w-full h-full object-cover rounded-full"
                      src={thumbnail}
                      alt=""
                    />
                  </div>
                  <span className="text-xs">Bridal Fashion</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/blog/category">
                <div>
                  <div className="bg-pink-200 shadow-lg border w-[80px] h-[80px] flex items-center justify-center rounded-full text-2xl">
                    <img
                      className="w-full h-full object-cover rounded-full"
                      src={thumbnail}
                      alt=""
                    />
                  </div>
                  <span className="text-xs">Bridal Fashion</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/blog/category">
                <div>
                  <div className="bg-pink-200 shadow-lg border w-[80px] h-[80px] flex items-center justify-center rounded-full text-2xl">
                    <img
                      className="w-full h-full object-cover rounded-full"
                      src={thumbnail}
                      alt=""
                    />
                  </div>
                  <span className="text-xs">Bridal Fashion</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/blog/category">
                <div>
                  <div className="bg-pink-200 shadow-lg border w-[80px] h-[80px] flex items-center justify-center rounded-full text-2xl">
                    <img
                      className="w-full h-full object-cover rounded-full"
                      src={thumbnail}
                      alt=""
                    />
                  </div>
                  <span className="text-xs">Bridal Fashion</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/blog/category">
                <div>
                  <div className="bg-pink-200 shadow-lg border w-[80px] h-[80px] flex items-center justify-center rounded-full text-2xl">
                    <img
                      className="w-full h-full object-cover rounded-full"
                      src={thumbnail}
                      alt=""
                    />
                  </div>
                  <span className="text-xs">Bridal Fashion</span>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <section>
        <div className="max-w-screen-xl px-4 mx-auto">
          <div className="grid grid-cols-12 gap-6 mt-12">
            <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3">
              <Link to="/blog/category/blog-details"
              >
                <div className="block rounded-lg shadow-lg border transition-all hover:rotate-[1deg]">
                <img
                  className="rounded-tl-lg rounded-tr-lg h-[210px] w-full object-cover"
                  src={thumbnail}
                />
                <div className="p-3">
                  <h3 className="text-lg">
                    Planning To Shop For Your Wedding In Rajouri Garden? Here's
                    Your
                  </h3>
                  <h3 className="text-lg">#WBShoppingGuid!</h3>
                  <span className="text-sm text-gray-400">
                    PRE WEDDING PLANNING
                  </span>
                  <span className="text-sm text-gray-400">5 SEP</span>
                </div>
                </div>
              </Link>
            </div>
            <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3">
              <Link to="/blog/category/blog-details"
              >
                <div className="block rounded-lg shadow-lg border transition-all hover:rotate-[1deg]">
                <img
                  className="rounded-tl-lg rounded-tr-lg h-[210px] w-full object-cover"
                  src={thumbnail}
                />
                <div className="p-3">
                  <h3 className="text-lg">
                    Planning To Shop For Your Wedding In Rajouri Garden? Here's
                    Your
                  </h3>
                  <h3 className="text-lg">#WBShoppingGuid!</h3>
                  <span className="text-sm text-gray-400">
                    PRE WEDDING PLANNING
                  </span>
                  <span className="text-sm text-gray-400">5 SEP</span>
                </div>
                </div>
              </Link>
            </div>
            <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3">
              <Link to="/blog/category/blog-details"
              >
                <div className="block rounded-lg shadow-lg border transition-all hover:rotate-[1deg]">
                <img
                  className="rounded-tl-lg rounded-tr-lg h-[210px] w-full object-cover"
                  src={thumbnail}
                />
                <div className="p-3">
                  <h3 className="text-lg">
                    Planning To Shop For Your Wedding In Rajouri Garden? Here's
                    Your
                  </h3>
                  <h3 className="text-lg">#WBShoppingGuid!</h3>
                  <span className="text-sm text-gray-400">
                    PRE WEDDING PLANNING
                  </span>
                  <span className="text-sm text-gray-400">5 SEP</span>
                </div>
                </div>
              </Link>
            </div>
            <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3">
              <Link to="/blog/category/blog-details"
              >
                <div className="block rounded-lg shadow-lg border transition-all hover:rotate-[1deg]">
                <img
                  className="rounded-tl-lg rounded-tr-lg h-[210px] w-full object-cover"
                  src={thumbnail}
                />
                <div className="p-3">
                  <h3 className="text-lg">
                    Planning To Shop For Your Wedding In Rajouri Garden? Here's
                    Your
                  </h3>
                  <h3 className="text-lg">#WBShoppingGuid!</h3>
                  <span className="text-sm text-gray-400">
                    PRE WEDDING PLANNING
                  </span>
                  <span className="text-sm text-gray-400">5 SEP</span>
                </div>
                </div>
              </Link>
            </div>
            <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3">
              <Link to="/blog/category/blog-details"
              >
                <div className="block rounded-lg shadow-lg border transition-all hover:rotate-[1deg]">
                <img
                  className="rounded-tl-lg rounded-tr-lg h-[210px] w-full object-cover"
                  src={thumbnail}
                />
                <div className="p-3">
                  <h3 className="text-lg">
                    Planning To Shop For Your Wedding In Rajouri Garden? Here's
                    Your
                  </h3>
                  <h3 className="text-lg">#WBShoppingGuid!</h3>
                  <span className="text-sm text-gray-400">
                    PRE WEDDING PLANNING
                  </span>
                  <span className="text-sm text-gray-400">5 SEP</span>
                </div>
                </div>
              </Link>
            </div>
            <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3">
              <Link to="/blog/category/blog-details"
              >
                <div className="block rounded-lg shadow-lg border transition-all hover:rotate-[1deg]">
                <img
                  className="rounded-tl-lg rounded-tr-lg h-[210px] w-full object-cover"
                  src={thumbnail}
                />
                <div className="p-3">
                  <h3 className="text-lg">
                    Planning To Shop For Your Wedding In Rajouri Garden? Here's
                    Your
                  </h3>
                  <h3 className="text-lg">#WBShoppingGuid!</h3>
                  <span className="text-sm text-gray-400">
                    PRE WEDDING PLANNING
                  </span>
                  <span className="text-sm text-gray-400">5 SEP</span>
                </div>
                </div>
              </Link>
            </div>
            <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3">
              <Link to="/blog/category/blog-details"
              >
                <div className="block rounded-lg shadow-lg border transition-all hover:rotate-[1deg]">
                <img
                  className="rounded-tl-lg rounded-tr-lg h-[210px] w-full object-cover"
                  src={thumbnail}
                />
                <div className="p-3">
                  <h3 className="text-lg">
                    Planning To Shop For Your Wedding In Rajouri Garden? Here's
                    Your
                  </h3>
                  <h3 className="text-lg">#WBShoppingGuid!</h3>
                  <span className="text-sm text-gray-400">
                    PRE WEDDING PLANNING
                  </span>
                  <span className="text-sm text-gray-400">5 SEP</span>
                </div>
                </div>
              </Link>
            </div>
            <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3">
              <Link to="/blog/category/blog-details"
              >
                <div className="block rounded-lg shadow-lg border transition-all hover:rotate-[1deg]">
                <img
                  className="rounded-tl-lg rounded-tr-lg h-[210px] w-full object-cover"
                  src={thumbnail}
                />
                <div className="p-3">
                  <h3 className="text-lg">
                    Planning To Shop For Your Wedding In Rajouri Garden? Here's
                    Your
                  </h3>
                  <h3 className="text-lg">#WBShoppingGuid!</h3>
                  <span className="text-sm text-gray-400">
                    PRE WEDDING PLANNING
                  </span>
                  <span className="text-sm text-gray-400">5 SEP</span>
                </div>
                </div>
              </Link>
            </div>
            <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3">
              <Link to="/blog/category/blog-details"
              >
                <div className="block rounded-lg shadow-lg border transition-all hover:rotate-[1deg]">
                <img
                  className="rounded-tl-lg rounded-tr-lg h-[210px] w-full object-cover"
                  src={thumbnail}
                />
                <div className="p-3">
                  <h3 className="text-lg">
                    Planning To Shop For Your Wedding In Rajouri Garden? Here's
                    Your
                  </h3>
                  <h3 className="text-lg">#WBShoppingGuid!</h3>
                  <span className="text-sm text-gray-400">
                    PRE WEDDING PLANNING
                  </span>
                  <span className="text-sm text-gray-400">5 SEP</span>
                </div>
                </div>
              </Link>
            </div>
            <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3">
              <Link to="/blog/category/blog-details"
              >
                <div className="block rounded-lg shadow-lg border transition-all hover:rotate-[1deg]">
                <img
                  className="rounded-tl-lg rounded-tr-lg h-[210px] w-full object-cover"
                  src={thumbnail}
                />
                <div className="p-3">
                  <h3 className="text-lg">
                    Planning To Shop For Your Wedding In Rajouri Garden? Here's
                    Your
                  </h3>
                  <h3 className="text-lg">#WBShoppingGuid!</h3>
                  <span className="text-sm text-gray-400">
                    PRE WEDDING PLANNING
                  </span>
                  <span className="text-sm text-gray-400">5 SEP</span>
                </div>
                </div>
              </Link>
            </div>
            <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3">
              <Link to="/blog/category/blog-details"
              >
                <div className="block rounded-lg shadow-lg border transition-all hover:rotate-[1deg]">
                <img
                  className="rounded-tl-lg rounded-tr-lg h-[210px] w-full object-cover"
                  src={thumbnail}
                />
                <div className="p-3">
                  <h3 className="text-lg">
                    Planning To Shop For Your Wedding In Rajouri Garden? Here's
                    Your
                  </h3>
                  <h3 className="text-lg">#WBShoppingGuid!</h3>
                  <span className="text-sm text-gray-400">
                    PRE WEDDING PLANNING
                  </span>
                  <span className="text-sm text-gray-400">5 SEP</span>
                </div>
                </div>
              </Link>
            </div>
            <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3">
              <Link to="/blog/category/blog-details"
              >
                <div className="block rounded-lg shadow-lg border transition-all hover:rotate-[1deg]">
                <img
                  className="rounded-tl-lg rounded-tr-lg h-[210px] w-full object-cover"
                  src={thumbnail}
                />
                <div className="p-3">
                  <h3 className="text-lg">
                    Planning To Shop For Your Wedding In Rajouri Garden? Here's
                    Your
                  </h3>
                  <h3 className="text-lg">#WBShoppingGuid!</h3>
                  <span className="text-sm text-gray-400">
                    PRE WEDDING PLANNING
                  </span>
                  <span className="text-sm text-gray-400">5 SEP</span>
                </div>
                </div>
              </Link>
            </div>
            <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3">
              <Link to="/blog/category/blog-details"
              >
                <div className="block rounded-lg shadow-lg border transition-all hover:rotate-[1deg]">
                <img
                  className="rounded-tl-lg rounded-tr-lg h-[210px] w-full object-cover"
                  src={thumbnail}
                />
                <div className="p-3">
                  <h3 className="text-lg">
                    Planning To Shop For Your Wedding In Rajouri Garden? Here's
                    Your
                  </h3>
                  <h3 className="text-lg">#WBShoppingGuid!</h3>
                  <span className="text-sm text-gray-400">
                    PRE WEDDING PLANNING
                  </span>
                  <span className="text-sm text-gray-400">5 SEP</span>
                </div>
                </div>
              </Link>
            </div>
            <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3">
              <Link to="/blog/category/blog-details"
              >
                <div className="block rounded-lg shadow-lg border transition-all hover:rotate-[1deg]">
                <img
                  className="rounded-tl-lg rounded-tr-lg h-[210px] w-full object-cover"
                  src={thumbnail}
                />
                <div className="p-3">
                  <h3 className="text-lg">
                    Planning To Shop For Your Wedding In Rajouri Garden? Here's
                    Your
                  </h3>
                  <h3 className="text-lg">#WBShoppingGuid!</h3>
                  <span className="text-sm text-gray-400">
                    PRE WEDDING PLANNING
                  </span>
                  <span className="text-sm text-gray-400">5 SEP</span>
                </div>
                </div>
              </Link>
            </div>
            <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3">
              <Link to="/blog/category/blog-details"
              >
                <div className="block rounded-lg shadow-lg border transition-all hover:rotate-[1deg]">
                <img
                  className="rounded-tl-lg rounded-tr-lg h-[210px] w-full object-cover"
                  src={thumbnail}
                />
                <div className="p-3">
                  <h3 className="text-lg">
                    Planning To Shop For Your Wedding In Rajouri Garden? Here's
                    Your
                  </h3>
                  <h3 className="text-lg">#WBShoppingGuid!</h3>
                  <span className="text-sm text-gray-400">
                    PRE WEDDING PLANNING
                  </span>
                  <span className="text-sm text-gray-400">5 SEP</span>
                </div>
                </div>
              </Link>
            </div>
            <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3">
              <Link to="/blog/category/blog-details"
              >
                <div className="block rounded-lg shadow-lg border transition-all hover:rotate-[1deg]">
                <img
                  className="rounded-tl-lg rounded-tr-lg h-[210px] w-full object-cover"
                  src={thumbnail}
                />
                <div className="p-3">
                  <h3 className="text-lg">
                    Planning To Shop For Your Wedding In Rajouri Garden? Here's
                    Your
                  </h3>
                  <h3 className="text-lg">#WBShoppingGuid!</h3>
                  <span className="text-sm text-gray-400">
                    PRE WEDDING PLANNING
                  </span>
                  <span className="text-sm text-gray-400">5 SEP</span>
                </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="text-center my-12">
            <span className="font-bold text-gray-600 text-lg">Loading ...</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
