import React, { useEffect, useRef } from "react";
import { Typewriter } from "react-simple-typewriter";
import { gsap } from "gsap";
import "./header.css";

const HomeContent = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current || !textRef.current || !imageRef.current) return;

    const tl = gsap.timeline({ defaults: { duration: 1, ease: "power2.out" } });

    // Fade-in animation for the entire section
    tl.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, delay: 0.5 }
    );

    // Slide-in animation for the text content
    tl.fromTo(
      textRef.current,
      { x: "-100%", opacity: 0 },
      { x: "0%", opacity: 1 },
      "-=0.5"
    );

    // Bounce left and right animation for the illustration image
    gsap.fromTo(
      imageRef.current,
      { x: "-50px" },
      {
        x: "50px",
        duration: 0.5,
        repeat: 3,
        yoyo: true,
        ease: "power1.inOut",
        onComplete: () => {
          gsap.to(imageRef.current, { x: "0px", duration: 0.3 });
        },
      }
    );
  }, []);

  return (
    <section className="home-content" ref={sectionRef}>
      <div className="relative h-screen">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 -z-10 h-full w-full bg-white"
            style={{
              backgroundImage: `
                linear-gradient(to right, #f0f0f0 1px, transparent 1px),
                linear-gradient(to bottom, #f0f0f0 1px, transparent 1px)`,
              backgroundSize: "6rem 4rem",
            }}
          ></div>
        </div>

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4">
          <div className="max-w-3xl text-center">
            <div className="flex flex-wrap justify-center gap-4"></div>
          </div>
        </div>
      </div>
      <div className="texts" ref={textRef}>
        <h2 className="text">There is more than just</h2>
        <h3 className="text">
          <span>
            <Typewriter
              words={[
                "Software Development",
                "Web Development",
                "Mobile Development",
                "SEO!",
              ]}
              loop={0} // Number of loops (use `0` for infinite)
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </h3>
        <p>
          Providing solutions and services to address a wide range of software
          development challenges.
        </p>
      </div>
      <div className="illustration" ref={imageRef}>
        <img
          src="https://i.pinimg.com/736x/09/db/79/09db79142424708ca8425ee57d7f4dad.jpg"
          alt="Software development illustration"
        />
      </div>
    </section>
  );
};

export default HomeContent;
