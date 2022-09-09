/* eslint-disable jsx-a11y/alt-text */
import hero from "../assets/hero-img.jpg";
import { Link } from "react-router-dom";

function toggleFilter() {
  document.querySelector("#sidebar-filter").classList.toggle("hidden");
}

const Service = () => {
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
                Vendor
              </div>
            </li>
          </ul>
        </nav>
      </section>
      <main>
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="grid grid-cols-12 gap-4 mt-10">
            <div
              id="sidebar-filter"
              className="hidden absolute top-4 right-0 z-40 md:relative md:block md:col-span-3"
            >
              <button
                onClick={toggleFilter}
                className="md:hidden rounded-full transition-all mb-2 border w-full bg-white text-left p-3 hover:scale-[0.95]"
              >
                Close ➡
              </button>
              <div className="relative z-20 border bg-white rounded-lg p-3">
                <div>
                  <h3 className="font-bold text-lg">Vendor</h3>
                  <ul className="border-b py-3">
                    <li>
                      <label className="flex items-center gap-1">
                        <input type="checkbox" />
                        <span>Wedding Photographers</span>
                      </label>
                    </li>
                    <li>
                      <label className="flex items-center gap-1">
                        <input type="checkbox" />
                        <span>Bridal Makeup Artist</span>
                      </label>
                    </li>
                    <li>
                      <label className="flex items-center gap-1">
                        <input type="checkbox" />
                        <span>Wedding Decorators</span>
                      </label>
                    </li>
                    <li>
                      <label className="flex items-center gap-1">
                        <input type="checkbox" />
                        <span>Wedding Planners</span>
                      </label>
                    </li>
                    <li>
                      <label className="flex items-center gap-1">
                        <input type="checkbox" />
                        <span>Wedding Venues</span>
                      </label>
                    </li>
                    <li>
                      <label className="flex items-center gap-1">
                        <input type="checkbox" />
                        <span>Mehendi Artists</span>
                      </label>
                    </li>
                    <li>
                      <label className="flex items-center gap-1">
                        <input type="checkbox" />
                        <span>Choreographers</span>
                      </label>
                    </li>
                    <li>
                      <label className="flex items-center gap-1">
                        <input type="checkbox" />
                        <span>Wedding Invitations</span>
                      </label>
                    </li>
                    <li>
                      <label className="flex items-center gap-1">
                        <input type="checkbox" />
                        <span>Wedding Wear</span>
                      </label>
                    </li>
                    <li>
                      <label className="flex items-center gap-1">
                        <input type="checkbox" />
                        <span>Wedding Videographers</span>
                      </label>
                    </li>
                    <li>
                      <label className="flex items-center gap-1">
                        <input type="checkbox" />
                        <span>Wedding Entertainment</span>
                      </label>
                    </li>
                    <li>
                      <label className="flex items-center gap-1">
                        <input type="checkbox" />
                        <span>Wedding Caterers</span>
                      </label>
                    </li>
                    <li>
                      <label className="flex items-center gap-1">
                        <input type="checkbox" />
                        <span>Djs</span>
                      </label>
                    </li>
                    <li>
                      <label className="flex items-center gap-1">
                        <input type="checkbox" />
                        <span>Wedding Jewellery</span>
                      </label>
                    </li>
                    <li>
                      <label className="flex items-center gap-1">
                        <input type="checkbox" />
                        <span>Wedding Pandits</span>
                      </label>
                    </li>
                    <li>
                      <label className="flex items-center gap-1">
                        <input type="checkbox" />
                        <span>Honeymoon</span>
                      </label>
                    </li>
                    <li>
                      <label className="flex items-center gap-1">
                        <input type="checkbox" />
                        <span>Wedding Car</span>
                      </label>
                    </li>
                    <li>
                      <label className="flex items-center gap-1">
                        <input type="checkbox" />
                        <span>Wedding Gifts</span>
                      </label>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-lg pt-3">Budget</h3>
                  <ul className="border-b py-3">
                    <li>
                      <label className="flex items-center gap-1">
                        <input type="checkbox" />
                        <span>Less than Rs. 20,000</span>
                      </label>
                    </li>
                    <li>
                      <label className="flex items-center gap-1">
                        <input type="checkbox" />
                        <span>Rs. 20,000 - Rs. 30,000</span>
                      </label>
                    </li>
                    <li>
                      <label className="flex items-center gap-1">
                        <input type="checkbox" />
                        <span>Rs. 30,000 - Rs. 40,000</span>
                      </label>
                    </li>
                    <li>
                      <label className="flex items-center gap-1">
                        <input type="checkbox" />
                        <span>Rs. 40,000 - Rs. 50,000</span>
                      </label>
                    </li>
                    <li>
                      <label className="flex items-center gap-1">
                        <input type="checkbox" />
                        <span>Above Rs. 50,000</span>
                      </label>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-lg pt-3">Locality</h3>
                  <ul className="border-b py-3">
                    <li>
                      <label className="flex items-center gap-1">
                        <input type="checkbox" />
                        <span>Kathmandu</span>
                      </label>
                    </li>
                    <li>
                      <label className="flex items-center gap-1">
                        <input type="checkbox" />
                        <span>Biratnagar</span>
                      </label>
                    </li>
                    <li>
                      <label className="flex items-center gap-1">
                        <input type="checkbox" />
                        <span>Pokhara</span>
                      </label>
                    </li>
                    <li>
                      <label className="flex items-center gap-1">
                        <input type="checkbox" />
                        <span>Dhamak</span>
                      </label>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-lg pt-3">Badge</h3>
                  <ul className="border-b py-3">
                    <li>
                      <label className="flex items-center gap-1">
                        <input type="checkbox" />
                        <span>Most Popular ♥</span>
                      </label>
                    </li>
                    <li>
                      <label className="flex items-center gap-1">
                        <input type="checkbox" />
                        <span>Featured</span>
                      </label>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-lg pt-3">Rating</h3>
                  <ul className="border-b py-3">
                    <li>
                      <label className="flex items-center gap-1">
                        <input type="checkbox" />
                        <span>⭐</span>
                      </label>
                    </li>
                    <li>
                      <label className="flex items-center gap-1">
                        <input type="checkbox" />
                        <span>⭐ ⭐</span>
                      </label>
                    </li>
                    <li>
                      <label className="flex items-center gap-1">
                        <input type="checkbox" />
                        <span>⭐ ⭐ ⭐</span>
                      </label>
                    </li>
                    <li>
                      <label className="flex items-center gap-1">
                        <input type="checkbox" />
                        <span>⭐ ⭐ ⭐ ⭐</span>
                      </label>
                    </li>
                  </ul>
                </div>
                <div className="mt-4">
                  <button className="inline-block text-sm text-center bg-gradient-to-r from-blue-500 to-blue-500 py-2 px-8 rounded-full text-gray-100 text-lg font-bold transition-all hover:rotate-[1deg]">
                    Apply Filter
                  </button>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-9">
              <h2 className="font-bold text-xl md:hidden mb-3">
                All Wedding Vendors
              </h2>
              <ul className="flex items-center justify-between">
                <li className="hidden md:block">
                  <h2 className="font-bold text-xl">All Wedding Vendors</h2>
                </li>
                <li className="md:hidden">
                  <button
                    onClick={toggleFilter}
                    className="inline-block text-center bg-gradient-to-r from-blue-500 to-blue-500 py-2 px-8 rounded-full text-gray-100 text-lg font-bold transition-all hover:rotate-[1deg]"
                  >
                    Filter
                  </button>
                </li>
                <li>
                  <label className="w-full">
                    <select
                      className="border w-full px-2 py-2 rounded-full outline-none border-gray-300"
                      type="text"
                      placeholder="Enter Mobile no.  or email"
                    >
                      <option>choose</option>
                      <option value="recently-added">Recently Added</option>
                      <option value="most-expensive">Most Expensive</option>
                      <option value="least-expensive">Least Expensive</option>
                    </select>
                  </label>
                </li>
              </ul>

              <div className="grid grid-cols-12 gap-4 mt-8">
                <div className="col-span-6 md:col-span-4">
                  <Link
                    to="/service/service-details"
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
                        <span className="text-sm text-red-500">⭐4.2 (20)</span>
                      </div>
                      <span className="text-sm text-gray-400">5 SEP</span>
                      <span className="text-sm text-gray-400">
                        For 1 day of photo shoot and other thing...
                      </span>
                    </div>
                  </Link>
                </div>
                <div className="col-span-6 md:col-span-4">
                  <Link
                    to="/service/service-details"
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
                        <span className="text-sm text-red-500">⭐4.2 (20)</span>
                      </div>
                      <span className="text-sm text-gray-400">5 SEP</span>
                      <span className="text-sm text-gray-400">
                        For 1 day of photo shoot and other thing...
                      </span>
                    </div>
                  </Link>
                </div>
                <div className="col-span-6 md:col-span-4">
                  <Link
                    to="/service/service-details"
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
                        <span className="text-sm text-red-500">⭐4.2 (20)</span>
                      </div>
                      <span className="text-sm text-gray-400">5 SEP</span>
                      <span className="text-sm text-gray-400">
                        For 1 day of photo shoot and other thing...
                      </span>
                    </div>
                  </Link>
                </div>
                <div className="col-span-6 md:col-span-4">
                  <Link
                    to="/service/service-details"
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
                        <span className="text-sm text-red-500">⭐4.2 (20)</span>
                      </div>
                      <span className="text-sm text-gray-400">5 SEP</span>
                      <span className="text-sm text-gray-400">
                        For 1 day of photo shoot and other thing...
                      </span>
                    </div>
                  </Link>
                </div>
                <div className="col-span-6 md:col-span-4">
                  <Link
                    to="/service/service-details"
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
                        <span className="text-sm text-red-500">⭐4.2 (20)</span>
                      </div>
                      <span className="text-sm text-gray-400">5 SEP</span>
                      <span className="text-sm text-gray-400">
                        For 1 day of photo shoot and other thing...
                      </span>
                    </div>
                  </Link>
                </div>
                <div className="col-span-6 md:col-span-4">
                  <Link
                    to="/service/service-details"
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
                        <span className="text-sm text-red-500">⭐4.2 (20)</span>
                      </div>
                      <span className="text-sm text-gray-400">5 SEP</span>
                      <span className="text-sm text-gray-400">
                        For 1 day of photo shoot and other thing...
                      </span>
                    </div>
                  </Link>
                </div>
                <div className="col-span-6 md:col-span-4">
                  <Link
                    to="/service/service-details"
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
                        <span className="text-sm text-red-500">⭐4.2 (20)</span>
                      </div>
                      <span className="text-sm text-gray-400">5 SEP</span>
                      <span className="text-sm text-gray-400">
                        For 1 day of photo shoot and other thing...
                      </span>
                    </div>
                  </Link>
                </div>
                <div className="col-span-6 md:col-span-4">
                  <Link
                    to="/service/service-details"
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
                        <span className="text-sm text-red-500">⭐4.2 (20)</span>
                      </div>
                      <span className="text-sm text-gray-400">5 SEP</span>
                      <span className="text-sm text-gray-400">
                        For 1 day of photo shoot and other thing...
                      </span>
                    </div>
                  </Link>
                </div>
                <div className="col-span-6 md:col-span-4">
                  <Link
                    to="/service/service-details"
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
                        <span className="text-sm text-red-500">⭐4.2 (20)</span>
                      </div>
                      <span className="text-sm text-gray-400">5 SEP</span>
                      <span className="text-sm text-gray-400">
                        For 1 day of photo shoot and other thing...
                      </span>
                    </div>
                  </Link>
                </div>
                <div className="col-span-6 md:col-span-4">
                  <Link
                    to="/service/service-details"
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
                        <span className="text-sm text-red-500">⭐4.2 (20)</span>
                      </div>
                      <span className="text-sm text-gray-400">5 SEP</span>
                      <span className="text-sm text-gray-400">
                        For 1 day of photo shoot and other thing...
                      </span>
                    </div>
                  </Link>
                </div>
                <div className="col-span-6 md:col-span-4">
                  <Link
                    to="/service/service-details"
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
                        <span className="text-sm text-red-500">⭐4.2 (20)</span>
                      </div>
                      <span className="text-sm text-gray-400">5 SEP</span>
                      <span className="text-sm text-gray-400">
                        For 1 day of photo shoot and other thing...
                      </span>
                    </div>
                  </Link>
                </div>
                <div className="col-span-6 md:col-span-4">
                  <Link
                    to="/service/service-details"
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
                        <span className="text-sm text-red-500">⭐4.2 (20)</span>
                      </div>
                      <span className="text-sm text-gray-400">5 SEP</span>
                      <span className="text-sm text-gray-400">
                        For 1 day of photo shoot and other thing...
                      </span>
                    </div>
                  </Link>
                </div>
                <div className="col-span-6 md:col-span-4">
                  <Link
                    to="/service/service-details"
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
                        <span className="text-sm text-red-500">⭐4.2 (20)</span>
                      </div>
                      <span className="text-sm text-gray-400">5 SEP</span>
                      <span className="text-sm text-gray-400">
                        For 1 day of photo shoot and other thing...
                      </span>
                    </div>
                  </Link>
                </div>
                <div className="col-span-6 md:col-span-4">
                  <Link
                    to="/service/service-details"
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
                        <span className="text-sm text-red-500">⭐4.2 (20)</span>
                      </div>
                      <span className="text-sm text-gray-400">5 SEP</span>
                      <span className="text-sm text-gray-400">
                        For 1 day of photo shoot and other thing...
                      </span>
                    </div>
                  </Link>
                </div>
                <div className="col-span-6 md:col-span-4">
                  <Link
                    to="/service/service-details"
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
                        <span className="text-sm text-red-500">⭐4.2 (20)</span>
                      </div>
                      <span className="text-sm text-gray-400">5 SEP</span>
                      <span className="text-sm text-gray-400">
                        For 1 day of photo shoot and other thing...
                      </span>
                    </div>
                  </Link>
                </div>
                <div className="col-span-12">
                  <div className="text-center my-6">
                    <span className="text-lg font-bold text-gray-600">
                      LOADING...
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Service;
