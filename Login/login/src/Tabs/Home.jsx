import React from 'react'
import Typed from 'typed.js'
import AOS from 'aos';

export default function Home() {
  document.addEventListener('DOMContentLoaded', function() {
    const typed = new Typed('.typed', {
        strings: document.querySelector('.typed').getAttribute('data-typed-items').split(','),
        typeSpeed: 500,
        backSpeed: 250, 
        backDelay: 1000,
        loop: true,
    });
}); 
AOS.init({
  duration: 1000,
  delay: 200,
  easing: 'ease-in-out', 
  once: true, 
});

  return (
    <div>
      <section id="hero" class="d-flex flex-column justify-content-center align-items-center">
        <div class="hero-container" data-aos="fade-in">
          <h1>Jagatheesh K</h1>
          <p>I'm <span class="typed" data-typed-items="Designer, Developer, Freelancer, Photographer"></span></p>
        </div>
      </section>
</div>
  )
}
