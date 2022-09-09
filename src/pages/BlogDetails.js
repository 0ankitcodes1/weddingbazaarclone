/* eslint-disable jsx-a11y/alt-text */
import thumbnail from "../assets/wedding-bazaar-og.jpg";
import { Link } from "react-router-dom";

const BlogDetails = () => {
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
              <Link to="/blog">
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
                  Blog
                </div>
              </Link>
            </li>
            <li>
              <Link to="/blog/category">
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
                  Category
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
                Blog Details
              </div>
            </li>
          </ul>
        </nav>
      </section>
      <section>
        <div className="prose max-w-screen-xl mx-auto p-4 py-12">
            <div>
                <Link to="blog/category" className="no-underline">
                    <div className="text-lg text-red-500">Blog Category</div>
                </Link>
            </div>
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, veritatis?</h1>
            <div className="font-bold text-sm italic">16th May 2020</div>
            <div>
                <img className="h-[400px] w-full object-cover rounded-lg" src={thumbnail} alt="" />
            </div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quibusdam, nobis cumque vel temporibus molestiae eveniet? Recusandae culpa aliquid commodi veniam. Esse quos eveniet, architecto possimus dolores sed accusantium a! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quibusdam, nobis cumque vel temporibus molestiae eveniet? Recusandae culpa aliquid commodi veniam. Esse quos eveniet, architecto possimus dolores sed accusantium a!
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quibusdam, nobis cumque vel temporibus molestiae eveniet? Recusandae culpa aliquid commodi veniam. Esse quos eveniet, architecto possimus dolores sed accusantium a! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quibusdam, nobis cumque vel temporibus molestiae eveniet? Recusandae culpa aliquid commodi veniam. Esse quos eveniet, architecto possimus dolores sed accusantium a!
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quibusdam, nobis cumque vel temporibus molestiae eveniet? Recusandae culpa aliquid commodi veniam. Esse quos eveniet, architecto possimus dolores sed accusantium a! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quibusdam, nobis cumque vel temporibus molestiae eveniet? Recusandae culpa aliquid commodi veniam. Esse quos eveniet, architecto possimus dolores sed accusantium a!
            </p>
            <h3>Lorem ipsum dolor sit.</h3>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quibusdam, nobis cumque vel temporibus molestiae eveniet? Recusandae culpa aliquid commodi veniam. Esse quos eveniet, architecto possimus dolores sed accusantium a! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quibusdam, nobis cumque vel temporibus molestiae eveniet? Recusandae culpa aliquid commodi veniam. Esse quos eveniet, architecto possimus dolores sed accusantium a!
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quibusdam, nobis cumque vel temporibus molestiae eveniet? Recusandae culpa aliquid commodi veniam. Esse quos eveniet, architecto possimus dolores sed accusantium a! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quibusdam, nobis cumque vel temporibus molestiae eveniet? Recusandae culpa aliquid commodi veniam. Esse quos eveniet, architecto possimus dolores sed accusantium a!
            </p>
        </div>
    </section>
    </>
  );
};

export default BlogDetails;
