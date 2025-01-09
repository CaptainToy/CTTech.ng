import React from 'react';

const AboutUs = () => {
  const iconStyle = {
    backgroundColor: '#4AB90E',
    border: '1px soild black',
    fontSize: '20px',
    color: 'white',
    padding: '10px',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: '0',
    top: '20%',
    transform: 'translateY(-50%)',
  };

  const containerStyle = {
    position: 'relative',
    paddingLeft: '60px',
    marginBottom: '20px',
  };

  return (
    <div className="sm:flex items-center max-w-screen-xl sm:block -mt-25">
      {/* Hide this section on small devices */}
      <div className="sm:w-1/2 p-10 hidden sm:block">
        <div className="image object-center text-center">
          <img src="https://i.pinimg.com/originals/0f/65/c2/0f65c227b3198b5e00e6f19a2b4712de.gif" alt="About Us" />
        </div>
      </div>
      <div className="sm:w-1/2 p-5">
        <div className="text">
          <div className="development-process-lines">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
          <h2 className="my-4 font-bold text-3xl sm:text-4xl text-center">
            About <span className="text-green-600" style={{color:"#4AB90E"}}>CTTech</span>
          </h2>
          <div style={containerStyle}>
            At CTTech, we specialize in turning ideas into impactful digital solutions. As a leading tech company, we provide a comprehensive range of services, including mobile app development, web and web app development, SEO optimization, and domain and hosting solutions.
            <i className="bi bi-arrow-return-right" style={iconStyle}></i>
          </div>
          <div style={containerStyle}>
            We collaborate with ambitious brands to ideate, design, and build transformative businesses, powered by beautifully crafted software and cutting-edge technology. Our team is dedicated to delivering innovative, user-centric solutions that drive success and create lasting value for our clients.
            <i className="bi bi-arrow-return-right" style={iconStyle}></i>
          </div>
          <div style={containerStyle}>
            Whether you're looking to launch a mobile app, enhance your online presence, or optimize your digital infrastructure, CTTech is your trusted partner in engineering excellence and growth. Together, let's build the future of your business.
            <i className="bi bi-arrow-return-right" style={iconStyle}></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
