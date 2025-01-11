import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const AboutUs = () => {
  const ctTechRef = useRef(null);
  const arrowRefs = useRef([]);
  const imgRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    // Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Timeline for "CTTech" text animation
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 100%",
      },
    });

    timeline
      .fromTo(
        ctTechRef.current,
        { x: 300, opacity: 0 },
        { x: 200, opacity: 1, duration: 0.5, ease: "bounce.out" }
      )
      .to(ctTechRef.current, { x: 100, duration: 0.5, ease: "bounce.out" })
      .to(ctTechRef.current, { x: 0, duration: 0.5, ease: "bounce.out" });

    // Animation for arrows
    arrowRefs.current.forEach((arrow, index) => {
      if (arrow) {
        gsap.fromTo(
          arrow,
          { x: -50, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            delay: index * 0.3,
            ease: "power2.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 90%",
            },
          }
        );
      }
    });

    return () => {
      timeline.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  useEffect(() => {
    const animation = gsap.fromTo(
      imgRef.current,
            { x: "-50px" },
            {
              x: "50px",
              duration: 0.5,
              repeat: 1, 
              yoyo: true, 
              ease: "power1.inOut", 
              onComplete: () => {
                gsap.to(imgRef.current, { x: "0px", duration: 0.3 });
              },
            
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          onUpdate: (self) => {
            if (self.progress >= 1) {
              animation.pause();
              gsap.set(imgRef.current, { x: 0 });
            }
          },
        },
      }
    );

    return () => {
      animation.kill();
    };
  }, []);

  const iconStyle = {
    backgroundColor: "#4AB90E",
    fontSize: "20px",
    color: "white",
    padding: "10px",
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    left: "0",
    top: "20%",
    transform: "translateY(-50%)",
  };

  const containerStyle = {
    position: "relative",
    paddingLeft: "60px",
    marginBottom: "20px",
  };

  return (
    <div
      className="sm:flex items-center max-w-screen-xl sm:block -mt-25"
      ref={containerRef}
    >
      {/* Image section */}
      <div className="sm:w-1/2 p-10 hidden sm:block">
        <div className="image object-center text-center">
          <img
            src="https://i.pinimg.com/originals/0f/65/c2/0f65c227b3198b5e00e6f19a2b4712de.gif"
            alt="About Us"
            ref={imgRef}
          />
        </div>
      </div>
      <div className="sm:w-1/2 p-5">
      <div className="development-process-lines">
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
        <div className="text">
          <h2 className="my-4 font-bold text-3xl sm:text-4xl text-center">
            About{" "}
            <span
              className="text-green-600"
              style={{ color: "#4AB90E" }}
              ref={ctTechRef}
            >
              CTTech
            </span>
          </h2>
          <div style={containerStyle}>
          At CTTech, we specialize in turning ideas into impactful digital solutions. As a leading tech company, we provide a comprehensive range of services, including mobile app development, web and web app development, SEO optimization, and domain and hosting solutions.
            <i
              className="bi bi-arrow-return-right"
              style={iconStyle}
              ref={(el) => (arrowRefs.current[0] = el)}
            ></i>
          </div>
          <div style={containerStyle}>
          We collaborate with ambitious brands to ideate, design, and build transformative businesses, powered by beautifully crafted software and cutting-edge technology. Our team is dedicated to delivering innovative, user-centric solutions that drive success and create lasting value for our clients.            <i
              className="bi bi-arrow-return-right"
              style={iconStyle}
              ref={(el) => (arrowRefs.current[1] = el)}
            ></i>
          </div>
          <div style={containerStyle}>
          Whether you're looking to launch a mobile app, enhance your online presence, or optimize your digital infrastructure, CTTech is your trusted partner in engineering excellence and growth. Together, let's build the future of your business.
            <i
              className="bi bi-arrow-return-right"
              style={iconStyle}
              ref={(el) => (arrowRefs.current[2] = el)}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
