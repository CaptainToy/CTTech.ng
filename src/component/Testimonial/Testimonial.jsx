import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Sample Data
const testimonials = [
  {
    name: "CFPHFoundation",
    role: "Project/PR Manager",
    imageUrl: "https://source.unsplash.com/100x100/?portrait?1",
    quote: "We are thrilled with the exceptional website CTTech designed for CFPH Foundation, showcasing our mission with creativity, professionalism, and attention to detail. The site is visually stunning, user-friendly, and highly responsive, making navigation seamless. We highly recommend CTTech for outstanding web development services."
  },
  {
    name: "Grandural",
    role: "Project Manager",
    imageUrl: "https://source.unsplash.com/100x100/?portrait?2",
    quote: "CTTech delivered a website that exceeded our expectations! Their team's technical expertise, coupled with their ability to understand our brand's unique needs, resulted in a seamless online experience for our organisation, Grandeural Services. We appreciate their professionalism, attention to detail, and timely delivery. CTTech is a reliable partner for any web development project. Kudos to the team!"
  },
  {
    name: "Yetland School",
    role: "Proprietress",
    imageUrl: "https://source.unsplash.com/100x100/?portrait?3",
    quote: "CTTech created a website that went beyond our expectations! Their expertise and deep understanding of our school's unique needs resulted in a seamless and engaging online platform for Yetland School. We truly appreciate their professionalism, attention to detail, and timely delivery. CTTech is a trusted partner for any web development project. Kudos to the team!"
  }
];

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardRef = useRef(null);

  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 85%",
          },
        }
      );
    }
  }, [activeIndex]);

  return (
    <section className="p-6">
      <div className="container max-w-xl mx-auto ">
        <div
          ref={cardRef}
          className="flex flex-col items-center w-full p-6 space-y-8 rounded-md lg:h-full lg:p-10  dark:text-gray-800"
        >
          <img
            src={testimonials[activeIndex].imageUrl}
            alt={testimonials[activeIndex].name}
            className="w-20 h-20 rounded-full dark:bg-gray-500"
          />
          <blockquote className="max-w-lg text-lg italic font-medium text-center">
            "{testimonials[activeIndex].quote}"
          </blockquote>
          <div className="text-center dark:text-gray-600">
            <p>{testimonials[activeIndex].name}</p>
            <p>{testimonials[activeIndex].role}</p>
          </div>
          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Page ${index + 1}`}
                className={`w-2 h-2 rounded-full ${
                  activeIndex === index ? "dark:bg-gray-900" : "dark:bg-gray-400"
                }`}
                onClick={() => setActiveIndex(index)}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
