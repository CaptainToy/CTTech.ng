import React, { useEffect, useRef, useState } from 'react';
// import './network.css'; 

const NoInternet = () => {
  const stackContainerRef = useRef(null);
  const [counter, setCounter] = useState(6);

  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  useEffect(() => {
    const stackContainer = stackContainerRef.current;
    const cardNodes = stackContainer.querySelectorAll('.card-container');
    const perspecNodes = stackContainer.querySelectorAll('.perspec');
    const card = stackContainer.querySelector('.card');

    const handleCardAnimationEnd = () => {
      perspecNodes.forEach((elem) => {
        elem.classList.add('explode');
      });
    };

    const handlePerspectiveAnimationEnd = (e) => {
      if (e.animationName === 'explode') {
        cardNodes.forEach((elem) => {
          elem.classList.add('pokeup');

          elem.addEventListener('click', () => {
            const updown = [800, -800];
            const randomY = updown[Math.floor(Math.random() * updown.length)];
            const randomX = Math.floor(Math.random() * 1000) - 1000;
            elem.style.transform = `translate(${randomX}px, ${randomY}px) rotate(-540deg)`;
            elem.style.transition = 'transform 1s ease, opacity 2s';
            elem.style.opacity = '0';
            setCounter((prevCounter) => prevCounter - 1);
          });

          const numLines = randomIntFromInterval(5, 10);
          const ul = elem.querySelector('.code ul');

          for (let i = 0; i < numLines; i++) {
            const lineLength = randomIntFromInterval(25, 97);
            const li = document.createElement('li');
            li.className = `node-${i}`;
            li.style.setProperty('--linelength', `${lineLength}%`);
            ul.appendChild(li);

            if (i === 0) {
              li.classList.add('writeLine');
            } else {
              ul.querySelector(`.node-${i - 1}`).addEventListener('animationend', () => {
                li.classList.add('writeLine');
              });
            }
          }
        });
      }
    };

    card.addEventListener('animationend', handleCardAnimationEnd);
    stackContainer.addEventListener('animationend', handlePerspectiveAnimationEnd);

    return () => {
      card.removeEventListener('animationend', handleCardAnimationEnd);
      stackContainer.removeEventListener('animationend', handlePerspectiveAnimationEnd);
    };
  }, []);

  useEffect(() => {
    if (counter === 0) {
      const stackContainer = stackContainerRef.current;
      stackContainer.style.width = '0';
      stackContainer.style.height = '0';
    }
  }, [counter]);

  return (
    <div className="container-network">
      <div className="error">
        <h1>500</h1>
        <h2>Error</h2>
        <p>
         Check your internet connection to access this page
        </p>
      </div>
      <div className="stack-container" ref={stackContainerRef}>
        {[...Array(6)].map((_, index) => (
          <div className="card-container" key={index}>
            <div
              className="perspec"
              style={{
                '--spreaddist': `${125 - index * 25}px`,
                '--scaledist': `${0.75 + index * 0.05}`,
                '--vertdist': `${-25 + index * 5}px`,
              }}
            >
              <div className="card-network">
                <div className="writing">
                  <div className="topbar">
                    <div className="red"></div>
                    <div className="yellow"></div>
                    <div className="green"></div>
                  </div>
                  <div className="code">
                    <ul></ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NoInternet;
