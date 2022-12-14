/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/alt-text */
import hero from "../assets/hero-img.jpg";
import thumbnail from "../assets/wedding-bazaar-og.jpg";
import { Link } from "react-router-dom";

import { AiOutlineWhatsApp } from "react-icons/ai";
import { RiMessengerLine } from "react-icons/ri";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import { Helmet } from "react-helmet";

const MySwal = withReactContent(Swal);

function largePreview(e) {
  MySwal.fire({
    html: `
          <img src="${e}" />
      `,
    showConfirmButton: false,
    footer: "<a>Preview your image in larage screen.</a>",
  });
}

function callChatAction() {
  let action = document.querySelector("#call-chat-action");
  if (action.classList.contains('w-[60px]')) {
    action.classList.add('w-0');
    action.classList.remove('w-[60px]');
  }
  else {
    action.classList.add('w-[60px]');
    action.classList.remove('w-0');
  }
}

function enableTab(e) {
  document.querySelectorAll(".tab-container").forEach(function (item) {
    if (item.getAttribute("data-targetId") === e) {
      item.classList.remove("hidden");
    } else {
      item.classList.add("hidden");
    }
  });
}

const ServiceDetails = () => {
  return (
    <>
      <Helmet>
        <script
          type="text/javascript"
          src="https://platform-api.sharethis.com/js/sharethis.js#property=624d7a642918df0019167b3b&product=inline-follow-buttons"
          async="async"
        ></script>
        {/* All the meta tag for SEO should be included here */}
        <meta name="description" content=" " />
        <meta name="keywords" content=" " />
        <meta name="author" content=" " />
        <meta property="og:title" content=" " />
        <meta property="og:type" content=" " />
        <meta property="og:url" content=" " />
        <meta property="og:image" content=" " />

        <meta name="twitter:title" content=" " />
        <meta name="twitter:description" content=" " />
        <meta name="twitter:image" content=" " />
        <meta name="twitter:card" content=" " />
      </Helmet>

      <div id="call-chat-action" className="fixed z-40 right-0 top-[50%] translate-y-[-50%] bg-white border border-r-0 shadow-sm rounded-md transition-all w-0 overflow-x-hidden">
        <div className="flex flex-col gap-y-2 p-3">
          <div>
            <a target="_blank" href="https://wa.me/<WHATSAPP_NUMBER>?text=urlencodedtext">
              <AiOutlineWhatsApp className="text-4xl bg-green-600 text-white p-1 rounded-lg transition-all hover:scale-[0.95]" />
            </a>
          </div>
          <div>
            <a target="_blank" href="http://m.me/<FACEBOOK_PAGE_USERNAME>">
              <RiMessengerLine className="text-4xl bg-blue-600 text-white p-1 rounded-lg transition-all hover:scale-[0.95]" />
            </a>
          </div>
        </div>
      </div>

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
              <Link to="/service">
                <div className="flex items-center text-gray-500 hover:text-gray-800">
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
                  Vendor
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
                Vendor Details
              </div>
            </li>
          </ul>
        </nav>
      </section>

      <section className="border-b">
        <div className="max-w-screen-xl px-4 mx-auto py-12">
          <div className="grid grid-cols-12 gap-6">
            <div className="order-2 md:order-1 col-span-12 md:col-span-6 lg:col-span-8">
              <div>
                <img
                  onClick={() => {
                    largePreview(hero);
                  }}
                  className="w-full rounded-lg"
                  src={hero}
                  alt=""
                />
              </div>
              <section>
                <div className="max-w-screen-xl mx-auto py-8">
                  <h2 className="text-3xl font-bold mb-4">Photo Albums (2)</h2>
                </div>
                <div>
                  <div className="flex gap-2 mb-8">
                    <div className="flex flex-col items-center transition-all hover:scale-[0.9]">
                      <img
                        onClick={() => {
                          enableTab("1");
                        }}
                        data-targetId="1"
                        className="w-24 h-24 object-cover rounded-full"
                        src={thumbnail}
                        alt=""
                      />
                      <p className="text-sm">Album 1</p>
                    </div>
                    <div className="flex flex-col items-center transition-all hover:scale-[0.9]">
                      <img
                        onClick={() => {
                          enableTab("2");
                        }}
                        data-targetId="2"
                        className="w-24 h-24 object-cover rounded-full"
                        src={hero}
                        alt=""
                      />
                      <p className="text-sm">Album 2</p>
                    </div>
                  </div>
                </div>
                <div className="tab-container" data-targetId="1">
                  <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-6 md:col-span-4">
                      <img
                        onClick={() => {
                          largePreview(thumbnail);
                        }}
                        className="w-full h-[180px] object-cover rounded-lg"
                        src={thumbnail}
                        alt=""
                      />
                    </div>
                    <div className="col-span-6 md:col-span-4">
                      <img
                        onClick={() => {
                          largePreview(thumbnail);
                        }}
                        className="w-full h-[180px] object-cover rounded-lg"
                        src={thumbnail}
                        alt=""
                      />
                    </div>
                    <div className="col-span-6 md:col-span-4">
                      <img
                        onClick={() => {
                          largePreview(thumbnail);
                        }}
                        className="w-full h-[180px] object-cover rounded-lg"
                        src={thumbnail}
                        alt=""
                      />
                    </div>
                    <div className="col-span-6 md:col-span-4">
                      <img
                        onClick={() => {
                          largePreview(thumbnail);
                        }}
                        className="w-full h-[180px] object-cover rounded-lg"
                        src={thumbnail}
                        alt=""
                      />
                    </div>
                    <div className="col-span-6 md:col-span-4">
                      <img
                        onClick={() => {
                          largePreview(thumbnail);
                        }}
                        className="w-full h-[180px] object-cover rounded-lg"
                        src={thumbnail}
                        alt=""
                      />
                    </div>
                    <div className="col-span-6 md:col-span-4">
                      <img
                        onClick={() => {
                          largePreview(thumbnail);
                        }}
                        className="w-full h-[180px] object-cover rounded-lg"
                        src={thumbnail}
                        alt=""
                      />
                    </div>
                    <div className="col-span-6 md:col-span-4">
                      <img
                        onClick={() => {
                          largePreview(thumbnail);
                        }}
                        className="w-full h-[180px] object-cover rounded-lg"
                        src={thumbnail}
                        alt=""
                      />
                    </div>
                    <div className="col-span-4">
                      <img
                        onClick={() => {
                          largePreview(thumbnail);
                        }}
                        className="w-full h-[180px] object-cover rounded-lg"
                        src={thumbnail}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="tab-container hidden" data-targetId="2">
                  <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-6 md:col-span-4">
                      <img
                        onClick={() => {
                          largePreview(hero);
                        }}
                        className="w-full h-[180px] object-cover rounded-lg"
                        src={hero}
                        alt=""
                      />
                    </div>
                    <div className="col-span-6 md:col-span-4">
                      <img
                        onClick={() => {
                          largePreview(hero);
                        }}
                        className="w-full h-[180px] object-cover rounded-lg"
                        src={hero}
                        alt=""
                      />
                    </div>
                    <div className="col-span-6 md:col-span-4">
                      <img
                        onClick={() => {
                          largePreview(hero);
                        }}
                        className="w-full h-[180px] object-cover rounded-lg"
                        src={hero}
                        alt=""
                      />
                    </div>
                    <div className="col-span-6 md:col-span-4">
                      <img
                        onClick={() => {
                          largePreview(hero);
                        }}
                        className="w-full h-[180px] object-cover rounded-lg"
                        src={hero}
                        alt=""
                      />
                    </div>
                    <div className="col-span-6 md:col-span-4">
                      <img
                        onClick={() => {
                          largePreview(hero);
                        }}
                        className="w-full h-[180px] object-cover rounded-lg"
                        src={hero}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="prose max-w-full">
                  <div id="pricelist">
                    <h3>Price</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Cumque quae itaque perspiciatis totam veritatis a
                      temporibus corporis nobis et voluptatem, qui provident
                      animi, officiis cum perferendis fuga ea saepe doloremque
                      ad hic labore magnam tempora vel. Tenetur laudantium sequi
                      facilis maiores,
                    </p>
                  </div>
                  <div id="pricelist">
                    <h3>Description</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Cumque quae itaque perspiciatis totam veritatis a
                      temporibus corporis nobis et voluptatem, qui provident
                      animi, officiis cum perferendis fuga ea saepe doloremque
                      ad hic labore magnam tempora vel. Tenetur laudantium sequi
                      facilis maiores,
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Cumque quae itaque perspiciatis totam veritatis a
                      temporibus corporis nobis et voluptatem, qui provident
                      animi, officiis cum perferendis fuga ea saepe doloremque
                      ad hic labore magnam tempora vel. Tenetur laudantium sequi
                      facilis maiores,
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Cumque quae itaque perspiciatis totam veritatis a
                      temporibus corporis nobis et voluptatem, qui provident
                      animi, officiis cum perferendis fuga ea saepe doloremque
                      ad hic labore magnam tempora vel. Tenetur laudantium sequi
                      facilis maiores,
                    </p>
                  </div>
                </div>
              </section>
            </div>
            <div className="order-1 md:order-2 col-span-12 md:col-span-6 lg:col-span-4">
              <div className="border rounded-lg shadow-lg py-6 sticky top-0">
                <div className="px-6 relative">
                  <h1 className="text-2xl font-bold">Alphagraphy Studio</h1>
                  <h3 className="text-lg text-gray-700 pb-4">
                    Wedding Photographer in Kathmadnu
                  </h3>
                  <span className="absolute z-20 -top-1 right-4 bg-green-500 text-white p-2 rounded-lg text-xs">
                    ???4.0 (34)
                  </span>
                </div>
                <div className="border-b border-t mb-4">
                  <a
                    href="#pricelist"
                    className="block hover:bg-gray-50 px-6 py-4"
                  >
                    <h3 className="text-2xl font-bold text-red-500">
                      Rs. 40,000
                    </h3>
                    <p className="text-gray-700 text-sm">
                      For 1 Day of Photo + Video ( See Full Pricelist )
                    </p>
                  </a>
                </div>
                <div className="px-6 pb-3">
                  <a
                    href="#jointeam"
                    className="m-1 inline-block text-center bg-gradient-to-r from-red-500 to-red-600 py-2 px-6 rounded-full text-gray-100 text-lg font-bold transition-all hover:rotate-[1deg] no-underline"
                  >
                    Get Quotations
                  </a>
                  <button onClick={ () => { callChatAction() } }
                    className="m-1 inline-block text-center bg-gradient-to-r from-green-500 to-green-600 py-2 px-6 rounded-full text-gray-100 text-lg font-bold transition-all hover:rotate-[1deg] no-underline"
                  >
                    Call/Chat
                  </button>
                </div>
                <div className="border-t px-6 pt-4">
                  <div className="flex lg:justify-center">
                    <div className="inline-block sharethis-inline-share-buttons"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-screen-xl px-4 py-12 border-t mx-auto">
          <h2 className="text-2xl font-bold">Related Vendors</h2>
          <div className="grid grid-cols-12 gap-4 mt-6">
            <div className="col-span-6 md:col-span-4 lg:col-span-3">
              <a
                href="./service-details.html"
                className="block rounded-lg shadow-lg border transition-all hover:rotate-[1deg]"
              >
                <div className="relative">
                  <img
                    className="rounded-tl-lg rounded-tr-lg h-[180px] w-full object-cover"
                    src={hero}
                  />
                  <span className="inline-block bg-yellow-500 text-white absolute top-5 px-4 rounded-tr-lg rounded-br-lg font-bold">
                    FEATURED
                  </span>
                </div>
                <div className="p-3">
                  <h3 className="text-lg">Prayog Creation</h3>
                  <div className="flex items-center gap-x-4">
                    <span className="text-sm text-red-500">Rs. 41,000</span>
                    <span className="text-sm text-red-500">???4.2 (20)</span>
                  </div>
                  <span className="text-sm text-gray-400">5 SEP</span>
                  <span className="text-sm text-gray-400">
                    For 1 day of photo shoot and other thing...
                  </span>
                </div>
              </a>
            </div>
            <div className="col-span-6 md:col-span-4 lg:col-span-3">
              <a
                href="./service-details.html"
                className="block rounded-lg shadow-lg border transition-all hover:rotate-[1deg]"
              >
                <div className="relative">
                  <img
                    className="rounded-tl-lg rounded-tr-lg h-[180px] w-full object-cover"
                    src={hero}
                  />
                  <span className="inline-block bg-yellow-500 text-white absolute top-5 px-4 rounded-tr-lg rounded-br-lg font-bold">
                    FEATURED
                  </span>
                </div>
                <div className="p-3">
                  <h3 className="text-lg">Prayog Creation</h3>
                  <div className="flex items-center gap-x-4">
                    <span className="text-sm text-red-500">Rs. 41,000</span>
                    <span className="text-sm text-red-500">???4.2 (20)</span>
                  </div>
                  <span className="text-sm text-gray-400">5 SEP</span>
                  <span className="text-sm text-gray-400">
                    For 1 day of photo shoot and other thing...
                  </span>
                </div>
              </a>
            </div>
            <div className="col-span-6 md:col-span-4 lg:col-span-3">
              <a
                href="./service-details.html"
                className="block rounded-lg shadow-lg border transition-all hover:rotate-[1deg]"
              >
                <div className="relative">
                  <img
                    className="rounded-tl-lg rounded-tr-lg h-[180px] w-full object-cover"
                    src={hero}
                  />
                </div>
                <div className="p-3">
                  <h3 className="text-lg">Prayog Creation</h3>
                  <div className="flex items-center gap-x-4">
                    <span className="text-sm text-red-500">Rs. 41,000</span>
                    <span className="text-sm text-red-500">???4.2 (20)</span>
                  </div>
                  <span className="text-sm text-gray-400">5 SEP</span>
                  <span className="text-sm text-gray-400">
                    For 1 day of photo shoot and other thing...
                  </span>
                </div>
              </a>
            </div>
            <div className="col-span-6 md:col-span-4 lg:col-span-3">
              <a
                href="./service-details.html"
                className="block rounded-lg shadow-lg border transition-all hover:rotate-[1deg]"
              >
                <div className="relative">
                  <img
                    className="rounded-tl-lg rounded-tr-lg h-[180px] w-full object-cover"
                    src={hero}
                  />
                </div>
                <div className="p-3">
                  <h3 className="text-lg">Prayog Creation</h3>
                  <div className="flex items-center gap-x-4">
                    <span className="text-sm text-red-500">Rs. 41,000</span>
                    <span className="text-sm text-red-500">???4.2 (20)</span>
                  </div>
                  <span className="text-sm text-gray-400">5 SEP</span>
                  <span className="text-sm text-gray-400">
                    For 1 day of photo shoot and other thing...
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetails;
