import hero from "../assets/hero-img.jpg";
import { Link } from "react-router-dom";

const RegisterAsVendor = () => {
  return (
    <>
      <main>
        <section class="max-w-screen-xl mx-auto px-4 py-12">
          <div class="grid grid-cols-12 gap-4 items-center">
            <div class="hidden md:block md:col-span-6">
              <div class="relative">
                <img class="w-full h-[480px] object-cover" src={hero} alt="" />
                <div class="absolute w-full bottom-4">
                  <h3 class="text-center text-xl font-bold text-white">
                    Nepal's New Way Of Wedding Planning
                  </h3>
                </div>
              </div>
            </div>
            <div class="col-span-12 md:col-span-6">
              <form action="">
                <h3 class="text-3xl font-bold mb-8">
                  Register as a New Vendor on Wedding Bazaar
                </h3>
                <div class="mb-4">
                  <label class="w-full">
                    <input
                      class="border w-full px-6 py-3 rounded-full outline-none border-gray-300 transition-all focus:scale-[1.03]"
                      type="text"
                      placeholder="Enter Mobile no.  or email"
                    />
                  </label>
                </div>
                <div class="mb-4">
                  <label class="w-full">
                    <select
                      class="border w-full px-6 py-3 rounded-full outline-none border-gray-300 transition-all focus:scale-[1.03]"
                      type="text"
                      placeholder="Enter Mobile no.  or email"
                    >
                      <option>CHOOSE YOUR SERVICE</option>
                    </select>
                  </label>
                </div>
                <div class="mb-4">
                  <label class="w-full">
                    <input
                      class="border w-full px-6 py-3 rounded-full outline-none border-gray-300 transition-all focus:scale-[1.03]"
                      type="password"
                      placeholder="Enter password"
                    />
                  </label>
                </div>
                <button class="bg-[#FA4A6F] px-6 py-2 rounded-full text-lg mb-12 text-white transition-all hover:bg-[#FF7D88]">
                  Register
                </button>
              </form>
              <div>
                <p class="text-center">or Continue With</p>
                <ul class="flex items-center justify-center mt-4 gap-4">
                  <li>
                    <Link
                      to=""
                      class="block rounded-full text-blue-300 transition-all hover:scale-[1.1] border p-1"
                    >
                      <svg
                        fill="#4D87DD"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24px"
                        height="24px"
                      >
                        <path d="M12,2C6.477,2,2,6.477,2,12c0,5.013,3.693,9.153,8.505,9.876V14.65H8.031v-2.629h2.474v-1.749 c0-2.896,1.411-4.167,3.818-4.167c1.153,0,1.762,0.085,2.051,0.124v2.294h-1.642c-1.022,0-1.379,0.969-1.379,2.061v1.437h2.995 l-0.406,2.629h-2.588v7.247C18.235,21.236,22,17.062,22,12C22,6.477,17.523,2,12,2z" />
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to=""
                      class="block rounded-full text-blue-300 transition-all hover:scale-[1.1] border p-1"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 48 48"
                        width="24px"
                        height="24px"
                      >
                        <path
                          fill="#4caf50"
                          d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"
                        />
                        <path
                          fill="#1e88e5"
                          d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"
                        />
                        <polygon
                          fill="#e53935"
                          points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"
                        />
                        <path
                          fill="#c62828"
                          d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"
                        />
                        <path
                          fill="#fbc02d"
                          d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"
                        />
                      </svg>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default RegisterAsVendor;
