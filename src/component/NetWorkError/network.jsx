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

          const handleCardClick = () => {
            const updown = [800, -800];
            const randomY = updown[Math.floor(Math.random() * updown.length)];
            const randomX = Math.floor(Math.random() * 1000) - 1000;
            elem.style.transform = `translate(${randomX}px, ${randomY}px) rotate(-540deg)`;
            elem.style.transition = 'transform 1s ease, opacity 2s';
            elem.style.opacity = '0';
            setCounter((prevCounter) => prevCounter - 1);
          };

          elem.addEventListener('click', handleCardClick);

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
    <div className="relative h-screen overflow-hidden bg-indigo-900">
      <img src="https://i.pinimg.com/736x/47/03/17/470317ba631dcc4f2f3c6182b222783c.jpg" className="absolute object-cover w-full h-full" />
      <div className="absolute inset-0 bg-black opacity-25"></div>
      <div className="container relative z-10 flex items-center px-6 py-32 mx-auto md:px-12 xl:py-40">
        <div className="relative z-10 flex flex-col items-center w-full font-mono">
          <h1 className="mt-4 text-5xl font-extrabold leading-tight text-center text-white">
            You're alone here
          </h1>
          <p className="font-extrabold text-white text-8xl my-44 animate-bounce">
            404
          </p>
        </div>
      </div>
    </div>
  );
};

export default NoInternet;
