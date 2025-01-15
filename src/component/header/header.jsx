import React, { useEffect, useRef } from "react";
import { Typewriter } from "react-simple-typewriter";
import { gsap } from "gsap";
import "./header.css";

const HomeContent = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 1, ease: "power2.out" } });

    // Fade-in animation for the entire section
    tl.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, delay: 0.2 }
    );

    // Animate text content from the top
    tl.fromTo(
      textRef.current,
      { y: "-100%", opacity: 0 },
      { y: "0%", opacity: 1, stagger: 0.1 },
      "-=0.8" // Overlap with section fade-in slightly
    );

    // Animate image content from the bottom
    tl.fromTo(
      imageRef.current,
      { y: "100%", opacity: 0 },
      { y: "0%", opacity: 1, duration: 1 },
      "-=0.5" // Overlap slightly with text animation
    );
  }, []);

  return (
    <section className="home-content" ref={sectionRef}>
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
