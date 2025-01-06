import React from "react";
import "./workdone.css";
import img1 from '../../assets/work/7.png';
import img2 from '../../assets/work/1.jpg';
import img3 from '../../assets/work/2.jpg';
import img4 from '../../assets/work/3.jpg';
import img5 from '../../assets/work/4.jpg';
import img6 from '../../assets/work/5.png';
import img7 from '../../assets/work/6.png';

const GridTemplate = () => {
  const items = [
    {
      image: img7,
      title: "CFPHFoundation",
      description: "This is a write-up for item 1.",
      link: "#",
    },
    {
      image: img2,
      title: "CTTech",
      description: "This is a write-up for item 2.",
      link: "#",
    },
    {
      image: img3,
      title: "Estate Agency",
      description: "This is a write-up for item 3.",
      link: "#",
    },
    {
      image: img4,
      title: "Grandeural",
      description: "This is a write-up for item 4.",
      link: "#",
    },
    {
      image: img5,
      title: "Yetland School",
      description: "This is a write-up for item 4.",
      link: "#",
    },
    {
      image: img6,
      title: "Brij.ng",
      description: "This is a write-up for item 4.",
      link: "#",
    },
  ];

  return (
    <section className="dark:bg-gray-100 dark:text-gray-800">
      <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
        <a
          rel="noopener noreferrer"
          href="#"
          className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50"
        >
          <img
            src={img1}
            alt=""
            className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
          />
          <div className="p-6 space-y-2 lg:col-span-5">
            <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
             Brij.ng
            </h3>
            {/* <span className="text-xs dark:text-gray-600">February 19, 2021</span> */}
            {/* <p>
              Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est in
              graece fuisset, eos affert putent doctus id.
            </p> */}
          </div>
        </a>
        <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <a
              key={index}
              rel="noopener noreferrer"
              href={item.link}
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50"
            >
              <img
                role="presentation"
                className="object-cover w-full rounded h-44 dark:bg-gray-500"
                src={item.image}
                alt={item.title}
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                  {item.title}
                </h3>
                <p>{item.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GridTemplate;
