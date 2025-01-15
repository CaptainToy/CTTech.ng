import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Testimonial = () => {
  const cardRef = useRef([]);

  useEffect(() => {
    cardRef.current.forEach((el, index) => {
      if (el) {
        gsap.fromTo(
          el,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: index * 0.2,
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
            },
          }
        );
      }
    });
  }, []);

  return (
    <section className="my-8 dark:text-gray-800">
      <div className="container flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-10">
        {["CFPHFoundation", "Grandural", "Yetland School"].map((name, index) => (
          <div
            key={index}
            className="flex flex-col max-w-sm mx-4 my-6 shadow-lg"
            ref={(el) => (cardRef.current[index] = el)}
          >
            <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-50">
              <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  className="w-8 h-8 dark:text-lime-600"
                >
                  <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                  <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                </svg>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptatibus quibusdam, eligendi exercitationem molestias
                possimus facere.
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  className="absolute right-0 w-8 h-8 dark:text-lime-600"
                >
                  <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                  <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                </svg>
              </p>
            </div>
            <div
              className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:text-white-50"
              style={{ background: "#4AB90E" }}
            >
              <img
                src={`https://source.unsplash.com/50x50/?portrait?${index + 1}`}
                alt=""
                className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-500"
              />
              <p
                className="text-xl font-semibold leading-tight bg-white-100"
                style={{ color: "white" }}
              >
                {name}
              </p>
              <p
                className="text-sm uppercase dark:bg-white-300"
                style={{ color: "white" }}
              >
                {index === 0
                  ? "Project/PR Manager"
                  : index === 1
                  ? "Project Manager"
                  : "Proprietress"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
