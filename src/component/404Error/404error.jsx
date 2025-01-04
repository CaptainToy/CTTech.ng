import React from "react";
import { useNavigate } from "react-router-dom";
import "./404error.css";

const NotFoundPage = () => {
  const navigate = useNavigate();

  const clickBack = () => {
    navigate("/");
  };

  return (
    <section className="flex items-center h-full p-16  dark:text-gray-800">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-400">
            <span className="sr-only">Error</span>404
          </h2>
          <p className="text-2xl font-semibold md:text-3xl">
            Sorry, we couldn't find this page.
          </p>
          <p className="mt-4 mb-8 dark:text-gray-600">
            But don't worry, you can find plenty of other things on our
            homepage.
          </p>
          <button
            onClick={clickBack}
            className="px-8 py-3 font-semibold rounded dark:bg-lime-600 dark:text-gray-50 hover:bg-lime-700"
          >
            Back to homepage
          </button>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;
