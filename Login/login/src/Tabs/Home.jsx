import React, { useEffect } from 'react';
import Typed from 'typed.js';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

export default function Home() {
  useEffect(() => {
    const typed = new Typed('.typed', {
      strings: document.querySelector('.typed').getAttribute('data-typed-items').split(','),
      typeSpeed: 100,
      backSpeed: 50, 
      backDelay: 1000,
      loop: true,
    });

    AOS.init({
      duration: 1000,
      delay: 200,
      easing: 'ease-in-out', 
      once: true, 
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div>
      <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
        <div className="hero-container" data-aos="fade-in">
          <h1>Jagatheesh K</h1>
          <p>I'm <span className="typed" data-typed-items="Web Designer, Web Developer, Freelancer,Mobile Photographer"></span></p>
        </div>
      </section>
    </div>
  );
}
