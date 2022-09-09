/* eslint-disable jsx-a11y/alt-text */
import hero from "../assets/hero-img.jpg";
import { Link } from "react-router-dom";
import thumbnail from "../assets/wedding-bazaar-og.jpg";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/core";

const Home = () => {
  return (
    <main>
      <header>
        <div className="relative">
          <img className="w-full h-[400px] object-cover" src={hero} alt="" />
          <div className="absolute z-20 top-[50%] translate-y-[-50%] max-w-screen-xl left-4 md:left-10 xl:left-40">
            <h1 className="text-4xl font-bold text-white mb-4">
              Trusted Wedding Services for every Nepal Wedding
            </h1>
            <Link to="/service">
              <span className="inline-block font-bold text-sm text-white bg-[#FA4A6F] transition-all hover:rotate-[1deg] p-4 rounded-full">
                😊 Find Vendors
              </span>
            </Link>
          </div>
        </div>
      </header>

      <section>
        <div className="max-w-screen-xl mx-auto px-4">
          <ul className="flex overflow-x-scroll p-4 gap-8 shadow-lg rounded-lg">
            <li>
              <Link to="/service">
                <div>
                  <div className="bg-pink-200 shadow-lg border w-[80px] h-[80px] flex items-center justify-center rounded-full text-2xl">
                    📸
                  </div>
                  <span className="text-xs">Photographers</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/service">
                <div>
                  <div className="bg-pink-200 shadow-lg border w-[80px] h-[80px] flex items-center justify-center rounded-full text-2xl">
                    📸
                  </div>
                  <span className="text-xs">Photographers</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/service">
                <div>
                  <div className="bg-pink-200 shadow-lg border w-[80px] h-[80px] flex items-center justify-center rounded-full text-2xl">
                    📸
                  </div>
                  <span className="text-xs">Photographers</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/service">
                <div>
                  <div className="bg-pink-200 shadow-lg border w-[80px] h-[80px] flex items-center justify-center rounded-full text-2xl">
                    📸
                  </div>
                  <span className="text-xs">Photographers</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/service">
                <div>
                  <div className="bg-pink-200 shadow-lg border w-[80px] h-[80px] flex items-center justify-center rounded-full text-2xl">
                    📸
                  </div>
                  <span className="text-xs">Photographers</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/service">
                <div>
                  <div className="bg-pink-200 shadow-lg border w-[80px] h-[80px] flex items-center justify-center rounded-full text-2xl">
                    📸
                  </div>
                  <span className="text-xs">Photographers</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/service">
                <div>
                  <div className="bg-pink-200 shadow-lg border w-[80px] h-[80px] flex items-center justify-center rounded-full text-2xl">
                    📸
                  </div>
                  <span className="text-xs">Photographers</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/service">
                <div>
                  <div className="bg-pink-200 shadow-lg border w-[80px] h-[80px] flex items-center justify-center rounded-full text-2xl">
                    📸
                  </div>
                  <span className="text-xs">Photographers</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/service">
                <div>
                  <div className="bg-pink-200 shadow-lg border w-[80px] h-[80px] flex items-center justify-center rounded-full text-2xl">
                    📸
                  </div>
                  <span className="text-xs">Photographers</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/service">
                <div>
                  <div className="bg-pink-200 shadow-lg border w-[80px] h-[80px] flex items-center justify-center rounded-full text-2xl">
                    📸
                  </div>
                  <span className="text-xs">Photographers</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/service">
                <div>
                  <div className="bg-pink-200 shadow-lg border w-[80px] h-[80px] flex items-center justify-center rounded-full text-2xl">
                    📸
                  </div>
                  <span className="text-xs">Photographers</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/service">
                <div>
                  <div className="bg-pink-200 shadow-lg border w-[80px] h-[80px] flex items-center justify-center rounded-full text-2xl">
                    📸
                  </div>
                  <span className="text-xs">Photographers</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/service">
                <div>
                  <div className="bg-pink-200 shadow-lg border w-[80px] h-[80px] flex items-center justify-center rounded-full text-2xl">
                    📸
                  </div>
                  <span className="text-xs">Photographers</span>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <section>
        <div className="max-w-screen-xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold text-black mb-8">
            🔥 Get Insipired from Amazing Wedding Ideas!
          </h2>
          <div>
            <Splide
              options={{
                rewind: true,
                width: "100%",
                perPage: 4,
                gap: "1rem",
                breakpoints: {
                  800: { perPage: 2 },
                },
              }}
              aria-label="Insipired from amazing wedding ideas!"
            >
              <SplideSlide>
                <Link to="/blog/category/blog-details">
                  <div className="block rounded-lg shadow-lg border transition-all hover:rotate-[1deg]">
                    <img
                      className="rounded-tl-lg rounded-tr-lg h-[210px] w-full object-cover"
                      src={thumbnail}
                    />
                    <div className="p-3">
                      <h3 className="text-lg">
                        Planning To Shop For Your Wedding In Rajouri Garden?
                        Here's Your
                      </h3>
                      <h3 className="text-lg">#WBShoppingGuid!</h3>
                      <span className="text-sm text-gray-400">
                        PRE WEDDING PLANNING
                      </span>
                      <span className="text-sm text-gray-400">5 SEP</span>
                    </div>
                  </div>
                </Link>
              </SplideSlide>
              <SplideSlide>
                <Link to="/blog/category/blog-details">
                  <div className="block rounded-lg shadow-lg border transition-all hover:rotate-[1deg]">
                    <img
                      className="rounded-tl-lg rounded-tr-lg h-[210px] w-full object-cover"
                      src={thumbnail}
                    />
                    <div className="p-3">
                      <h3 className="text-lg">
                        Planning To Shop For Your Wedding In Rajouri Garden?
                        Here's Your
                      </h3>
                      <h3 className="text-lg">#WBShoppingGuid!</h3>
                      <span className="text-sm text-gray-400">
                        PRE WEDDING PLANNING
                      </span>
                      <span className="text-sm text-gray-400">5 SEP</span>
                    </div>
                  </div>
                </Link>
              </SplideSlide>
              <SplideSlide>
                <Link to="/blog/category/blog-details">
                  <div className="block rounded-lg shadow-lg border transition-all hover:rotate-[1deg]">
                    <img
                      className="rounded-tl-lg rounded-tr-lg h-[210px] w-full object-cover"
                      src={thumbnail}
                    />
                    <div className="p-3">
                      <h3 className="text-lg">
                        Planning To Shop For Your Wedding In Rajouri Garden?
                        Here's Your
                      </h3>
                      <h3 className="text-lg">#WBShoppingGuid!</h3>
                      <span className="text-sm text-gray-400">
                        PRE WEDDING PLANNING
                      </span>
                      <span className="text-sm text-gray-400">5 SEP</span>
                    </div>
                  </div>
                </Link>
              </SplideSlide>
              <SplideSlide>
                <Link to="/blog/category/blog-details">
                  <div className="block rounded-lg shadow-lg border transition-all hover:rotate-[1deg]">
                    <img
                      className="rounded-tl-lg rounded-tr-lg h-[210px] w-full object-cover"
                      src={thumbnail}
                    />
                    <div className="p-3">
                      <h3 className="text-lg">
                        Planning To Shop For Your Wedding In Rajouri Garden?
                        Here's Your
                      </h3>
                      <h3 className="text-lg">#WBShoppingGuid!</h3>
                      <span className="text-sm text-gray-400">
                        PRE WEDDING PLANNING
                      </span>
                      <span className="text-sm text-gray-400">5 SEP</span>
                    </div>
                  </div>
                </Link>
              </SplideSlide>
            </Splide>
          </div>
        </div>
      </section>

      <section className="bg-[#F2EEEF]">
        <div className="max-w-screen-xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold text-black mb-8">
            👀 All kinds of Inspiration
          </h2>
          <div>
            <Splide
              options={{
                rewind: true,
                width: "100%",
                perPage: 4,
                gap: "1rem",
                breakpoints: {
                  800: { perPage: 2 },
                },
              }}
              aria-label="Insipired from amazing wedding ideas!"
            >
              <SplideSlide>
                <Link to="/service">
                  <div className="relative block rounded-lg shadow-lg border transition-all hover:rotate-[1deg]">
                    <img
                      className="rounded-lg h-[280px] w-full object-cover"
                      src={thumbnail}
                    />
                    <h3 className="font-bold text-white absolute z-20 bottom-4 text-center w-full">
                      Bridal Fashion
                    </h3>
                  </div>
                </Link>
              </SplideSlide>
              <SplideSlide>
                <Link to="/service">
                  <div className="relative block rounded-lg shadow-lg border transition-all hover:rotate-[1deg]">
                    <img
                      className="rounded-lg h-[280px] w-full object-cover"
                      src={thumbnail}
                    />
                    <h3 className="font-bold text-white absolute z-20 bottom-4 text-center w-full">
                      Bridal Fashion
                    </h3>
                  </div>
                </Link>
              </SplideSlide>
              <SplideSlide>
                <Link to="/service">
                  <div className="relative block rounded-lg shadow-lg border transition-all hover:rotate-[1deg]">
                    <img
                      className="rounded-lg h-[280px] w-full object-cover"
                      src={thumbnail}
                    />
                    <h3 className="font-bold text-white absolute z-20 bottom-4 text-center w-full">
                      Bridal Fashion
                    </h3>
                  </div>
                </Link>
              </SplideSlide>
              <SplideSlide>
                <Link to="/service">
                  <div className="relative block rounded-lg shadow-lg border transition-all hover:rotate-[1deg]">
                    <img
                      className="rounded-lg h-[280px] w-full object-cover"
                      src={thumbnail}
                    />
                    <h3 className="font-bold text-white absolute z-20 bottom-4 text-center w-full">
                      Bridal Fashion
                    </h3>
                  </div>
                </Link>
              </SplideSlide>
            </Splide>
          </div>
        </div>
      </section>

      <section className="bg-[#000000]">
        <div className="max-w-screen-xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold text-white mb-2">
            Find Trusted Vendors
          </h2>
          <p className="text-lg text-gray-500">
            WHO FULFILL YOUR REQUIREMENTS ✅
          </p>
          <p className="text-lg text-gray-500 mb-8">WITHIN YOUR BUDGET 💰</p>
          <div>
            <Splide
              options={{
                rewind: true,
                width: "100%",
                perPage: 4,
                gap: "1rem",
                breakpoints: {
                  800: { perPage: 2 },
                },
              }}
              aria-label="Insipired from amazing wedding ideas!"
            >
              <SplideSlide>
                <Link to="/service">
                  <div className="relative block rounded-lg shadow-lg border border-gray-900 transition-all hover:rotate-[1deg]">
                    <img
                      className="rounded-lg h-[150px] w-full object-cover"
                      src={thumbnail}
                    />
                    <h3 className="font-bold text-white p-3 bg-black rounded-bl-lg rounded-br-lg text-center w-full">
                      Bridal Fashion
                    </h3>
                  </div>
                </Link>
              </SplideSlide>
              <SplideSlide>
                <Link to="/service">
                  <div className="relative block rounded-lg shadow-lg border border-gray-900 transition-all hover:rotate-[1deg]">
                    <img
                      className="rounded-lg h-[150px] w-full object-cover"
                      src={thumbnail}
                    />
                    <h3 className="font-bold text-white p-3 bg-black rounded-bl-lg rounded-br-lg text-center w-full">
                      Bridal Fashion
                    </h3>
                  </div>
                </Link>
              </SplideSlide>
              <SplideSlide>
                <Link to="/service">
                  <div className="relative block rounded-lg shadow-lg border border-gray-900 transition-all hover:rotate-[1deg]">
                    <img
                      className="rounded-lg h-[150px] w-full object-cover"
                      src={thumbnail}
                    />
                    <h3 className="font-bold text-white p-3 bg-black rounded-bl-lg rounded-br-lg text-center w-full">
                      Bridal Fashion
                    </h3>
                  </div>
                </Link>
              </SplideSlide>
              <SplideSlide>
                <Link to="/service">
                  <div className="relative block rounded-lg shadow-lg border border-gray-900 transition-all hover:rotate-[1deg]">
                    <img
                      className="rounded-lg h-[150px] w-full object-cover"
                      src={thumbnail}
                    />
                    <h3 className="font-bold text-white p-3 bg-black rounded-bl-lg rounded-br-lg text-center w-full">
                      Bridal Fashion
                    </h3>
                  </div>
                </Link>
              </SplideSlide>
              <SplideSlide>
                <Link to="/service">
                  <div className="relative block rounded-lg shadow-lg border border-gray-900 transition-all hover:rotate-[1deg]">
                    <img
                      className="rounded-lg h-[150px] w-full object-cover"
                      src={thumbnail}
                    />
                    <h3 className="font-bold text-white p-3 bg-black rounded-bl-lg rounded-br-lg text-center w-full">
                      Bridal Fashion
                    </h3>
                  </div>
                </Link>
              </SplideSlide>
              <SplideSlide>
                <Link to="/service">
                  <div className="relative block rounded-lg shadow-lg border border-gray-900 transition-all hover:rotate-[1deg]">
                    <img
                      className="rounded-lg h-[150px] w-full object-cover"
                      src={thumbnail}
                    />
                    <h3 className="font-bold text-white p-3 bg-black rounded-bl-lg rounded-br-lg text-center w-full">
                      Bridal Fashion
                    </h3>
                  </div>
                </Link>
              </SplideSlide>
              <SplideSlide>
                <Link to="/service">
                  <div className="relative block rounded-lg shadow-lg border border-gray-900 transition-all hover:rotate-[1deg]">
                    <img
                      className="rounded-lg h-[150px] w-full object-cover"
                      src={thumbnail}
                    />
                    <h3 className="font-bold text-white p-3 bg-black rounded-bl-lg rounded-br-lg text-center w-full">
                      Bridal Fashion
                    </h3>
                  </div>
                </Link>
              </SplideSlide>
            </Splide>
          </div>
        </div>
      </section>

      <section className="bg-[#F2EEEF]">
        <div className="max-w-screen-xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold text-black mb-2">
            Browse Real Wedding Stories ♥
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            FROM IDEAS TO VENDORS. SEE HOW THEY DID IT.
          </p>
          <div>
            <Splide
              options={{
                rewind: true,
                width: "100%",
                perPage: 4,
                gap: "1rem",
                breakpoints: {
                  800: { perPage: 2 },
                },
              }}
              aria-label="Insipired from amazing wedding ideas!"
            >
              <SplideSlide>
                <Link to="/blog/category/blog-details">
                  <div className="block rounded-lg shadow-lg border transition-all hover:rotate-[1deg]">
                    <img
                      className="rounded-tl-lg rounded-tr-lg h-[210px] w-full object-cover"
                      src={thumbnail}
                    />
                    <div className="p-3">
                      <h3 className="text-lg">
                        Planning To Shop For Your Wedding In Rajouri Garden?
                        Here's Your
                      </h3>
                      <h3 className="text-lg">#WBShoppingGuid!</h3>
                      <span className="text-sm text-gray-400">
                        PRE WEDDING PLANNING
                      </span>
                      <span className="text-sm text-gray-400">5 SEP</span>
                    </div>
                  </div>
                </Link>
              </SplideSlide>
              <SplideSlide>
                <Link to="/blog/category/blog-details">
                  <div className="block rounded-lg shadow-lg border transition-all hover:rotate-[1deg]">
                    <img
                      className="rounded-tl-lg rounded-tr-lg h-[210px] w-full object-cover"
                      src={thumbnail}
                    />
                    <div className="p-3">
                      <h3 className="text-lg">
                        Planning To Shop For Your Wedding In Rajouri Garden?
                        Here's Your
                      </h3>
                      <h3 className="text-lg">#WBShoppingGuid!</h3>
                      <span className="text-sm text-gray-400">
                        PRE WEDDING PLANNING
                      </span>
                      <span className="text-sm text-gray-400">5 SEP</span>
                    </div>
                  </div>
                </Link>
              </SplideSlide>
              <SplideSlide>
                <Link to="/blog/category/blog-details">
                  <div className="block rounded-lg shadow-lg border transition-all hover:rotate-[1deg]">
                    <img
                      className="rounded-tl-lg rounded-tr-lg h-[210px] w-full object-cover"
                      src={thumbnail}
                    />
                    <div className="p-3">
                      <h3 className="text-lg">
                        Planning To Shop For Your Wedding In Rajouri Garden?
                        Here's Your
                      </h3>
                      <h3 className="text-lg">#WBShoppingGuid!</h3>
                      <span className="text-sm text-gray-400">
                        PRE WEDDING PLANNING
                      </span>
                      <span className="text-sm text-gray-400">5 SEP</span>
                    </div>
                  </div>
                </Link>
              </SplideSlide>
              <SplideSlide>
                <Link to="/blog/category/blog-details">
                  <div className="block rounded-lg shadow-lg border transition-all hover:rotate-[1deg]">
                    <img
                      className="rounded-tl-lg rounded-tr-lg h-[210px] w-full object-cover"
                      src={thumbnail}
                    />
                    <div className="p-3">
                      <h3 className="text-lg">
                        Planning To Shop For Your Wedding In Rajouri Garden?
                        Here's Your
                      </h3>
                      <h3 className="text-lg">#WBShoppingGuid!</h3>
                      <span className="text-sm text-gray-400">
                        PRE WEDDING PLANNING
                      </span>
                      <span className="text-sm text-gray-400">5 SEP</span>
                    </div>
                  </div>
                </Link>
              </SplideSlide>
              <SplideSlide>
                <Link to="/blog/category/blog-details">
                  <div className="block rounded-lg shadow-lg border transition-all hover:rotate-[1deg]">
                    <img
                      className="rounded-tl-lg rounded-tr-lg h-[210px] w-full object-cover"
                      src={thumbnail}
                    />
                    <div className="p-3">
                      <h3 className="text-lg">
                        Planning To Shop For Your Wedding In Rajouri Garden?
                        Here's Your
                      </h3>
                      <h3 className="text-lg">#WBShoppingGuid!</h3>
                      <span className="text-sm text-gray-400">
                        PRE WEDDING PLANNING
                      </span>
                      <span className="text-sm text-gray-400">5 SEP</span>
                    </div>
                  </div>
                </Link>
              </SplideSlide>
              <SplideSlide>
                <Link to="/blog/category/blog-details">
                  <div className="block rounded-lg shadow-lg border transition-all hover:rotate-[1deg]">
                    <img
                      className="rounded-tl-lg rounded-tr-lg h-[210px] w-full object-cover"
                      src={thumbnail}
                    />
                    <div className="p-3">
                      <h3 className="text-lg">
                        Planning To Shop For Your Wedding In Rajouri Garden?
                        Here's Your
                      </h3>
                      <h3 className="text-lg">#WBShoppingGuid!</h3>
                      <span className="text-sm text-gray-400">
                        PRE WEDDING PLANNING
                      </span>
                      <span className="text-sm text-gray-400">5 SEP</span>
                    </div>
                  </div>
                </Link>
              </SplideSlide>
            </Splide>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
