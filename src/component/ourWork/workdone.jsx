import React from "react";
import "./workdone.css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import img1 from "../../assets/work/7.png";
import img2 from "../../assets/work/1.jpg";
import img3 from "../../assets/work/2.jpg";
import img4 from "../../assets/work/3.jpg";
import img5 from "../../assets/work/4.jpg";
import img6 from "../../assets/work/5.png";
import img7 from "../../assets/work/6.png";
import img8 from "../../assets/work/8.jpeg";
import img9 from "../../assets/work/9.jpeg";

const GridTemplate = () => {
  const MySwal = withReactContent(Swal);

  const handleClick = (title, description) => {
    MySwal.fire({
      title,
      text: 'The work cannot be shown for certain reasons.',
      icon: "info",
    });
  };

  const items = [
    {
      image: img7,
      title: "CFPHFoundation",
      description:
        "CTTech developed the website for CFPHF, a nonprofit organization that distributes relief food items every two weeks. The site includes a live blog section where visitors can stay updated on ongoing events at any time.",
      link: "https://cfphfoundation.org/",
    },
    {
      image: img9,
      title: "Gymate",
      description: "CTTech developed the official website for Gymate, a fitness and wellness platform dedicated to helping users achieve their health goals. The site is designed with a sleek and modern interface, offering an intuitive experience for fitness enthusiasts.",
      onClick: () =>
        handleClick("Gymate", "This is a write-up for item 2."),
    },
    {
      image: img3,
      title: "Estate Agency",
      description: "CTTech partnered with a prominent real estate agency to design and develop a professional website that showcases their diverse portfolio of properties and services. The platform is tailored to meet the needs of buyers, sellers, and renters, offering an exceptional user experience through innovative design and functionality.",
      onClick: () =>
        handleClick("Estate Agency", "This is a write-up for item 3."),
    },
    {
      image: img4,
      title: "Grandeural",
      description: "CTTech collaborated with Grandeural, a leading branding and illustration company, to design a visually stunning and highly functional website that reflects their creative ethos. The website serves as a digital portfolio and client engagement hub, showcasing Grandeural's expertise in crafting unique brand identities and artistic illustrations.",
      onClick: () =>
        handleClick("Grandeural", "This is a write-up for item 4."),
    },
    {
      image: img5,
      title: "Yetland School",
      description: "CTTech developed a functional and user-friendly website for Yetland School, a provider of school management systems. The platform streamlines administrative tasks and enhances communication between the school, students, parents, and staff, improving operational efficiency and user experience..",
      onClick: () =>
        handleClick("Yetland School", "This is a write-up for item 5."),
    },
    {
      image: img8,
      title: "Medical shop",
      description: "CTTech partnered with Medical Shop, a leading pharmacy service provider offering convenient door-to-door delivery across Lagos, to develop a user-friendly website that simplifies the process of ordering medications and health products. The website is designed to cater to the needs of customers seeking quick and reliable access to pharmaceutical products, with a focus on convenience and customer satisfaction.",
      onClick: () =>
        handleClick("Pharmacy Store", "This is a write-up for item 6."),
    },
  ];

  return (
    <section className="dark:text-gray-800">
      <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
        <a
          rel="noopener noreferrer"
          href="#"
          className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 "
        >
          <img
            src={img1}
            alt=""
            className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
          />
          <div className="p-6 space-y-2 lg:col-span-5">
            <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
              <a href="https://brij.ng/">Brij.ng</a>
            </h3>
            <p>
            CTTech partnered with Brij.ng, a logistics company specializing in reliable and efficient door-to-door delivery services across Lagos, to design and develop a user-friendly website that facilitates smooth interaction between the company and its customers. The site is built with a focus on ease of use, speed, and accessibility, helping users track and schedule deliveries with minimal effort.
            </p>
          </div>
        </a>
        <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <div
              key={index}
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 cursor-pointer"
              onClick={item.onClick || null}
            >
              <a
                rel="noopener noreferrer"
                href={item.link || "#"}
                target={item.link ? "_blank" : "_self"}
                onClick={(e) => item.onClick && e.preventDefault()}
              >
                <img
                  role="presentation"
                  className="object-cover w-full rounded h-44 dark:bg-gray-500"
                  src={item.image}
                  alt={item.title}
                />
              </a>
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                  {item.title}
                </h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GridTemplate;
