import React from "react";
import { Typewriter } from "react-simple-typewriter";
import "./header.css";

const HomeContent = () => {
  // Optional: Define handlers if needed
  const handleDone = () => {
    console.log("Typing loop completed!");
  };

  const handleType = (count) => {
    console.log(`Typed word count: ${count}`);
  };

  return (
    <section className="home-content">
      <div className="texts">
        <h2 className="text">There is more than just</h2>
        <h3 className="text">{" "}
          <span>
            <Typewriter
              words={["Software Development", "Web Development", "Mobile Development", "SEO!"]}
              loop={0} // Number of loops (use `0` for infinite)
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
              onLoopDone={handleDone} // Optional callback
              onType={handleType} // Optional callback
              style={{ color: 'green' }}
            />
          </span>
        </h3>
        <p>
          Providing solutions and services to address a wide range of software
          development challenges.
        </p>
      </div>
      <div className="illustration">
        <img
          src="https://i.imgur.com/WbQnbas.png"
          alt="Software development illustration"
        />
      </div>
    </section>
  );
};

export default HomeContent;
