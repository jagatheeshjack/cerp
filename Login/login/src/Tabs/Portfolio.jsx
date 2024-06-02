import React from 'react';
import Aos from 'aos';
import portfolio1 from '../assets/img/portfolio/portfolio-1.jpg'
import portfolio2 from '../assets/img/portfolio/portfolio-2.jpg'
import portfolio3 from '../assets/img/portfolio/portfolio-3.jpg'
import portfolio4 from '../assets/img/portfolio/portfolio-4.jpg'
import portfolio5 from '../assets/img/portfolio/portfolio-5.jpg'
import portfolio6 from '../assets/img/portfolio/portfolio-6.jpg'
import portfolio7 from '../assets/img/portfolio/portfolio-7.jpg'
import portfolio8 from '../assets/img/portfolio/portfolio-8.jpg'
import portfolio9 from '../assets/img/portfolio/portfolio-9.jpg'
export default function Portfolio() {
  Aos.init({
    duration: 1000,
    delay: 100,
    easing: 'ease-in-out', 
    once: true, 
  })
function filterPortfolio() {
  const filter = this.getAttribute('data-filter');
  const portfolioItems = document.querySelectorAll('.portfolio-item');
  portfolioItems.forEach(item => {
      if (filter === '*' || item.classList.contains(filter.substring(1))) {
          item.style.display = 'block';
      } else {
          item.style.display = 'none';
      }
  });
  
  const filterButtons = document.querySelectorAll('#portfolio-flters li');
  filterButtons.forEach(button => button.classList.remove('filter-active'));
  this.classList.add('filter-active');
}

const filterButtons = document.querySelectorAll('#portfolio-flters li');
filterButtons.forEach(button => {
  button.addEventListener('click', filterPortfolio);
});

  return (
    <div>
      <section id="portfolio" class="portfolio section-bg">
      <div class="container">

        <div class="section-title">
          <h2>Portfolio</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div class="row" data-aos="fade-up">
          <div class="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter="*" class="filter-active">All</li>
              <li data-filter=".filter-app">App</li>
              <li data-filter=".filter-card">Card</li>
              <li data-filter=".filter-web">Web</li>
            </ul>
          </div>
        </div>

        <div class="row portfolio-container"  data-aos-delay="100">

          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <div class="portfolio-wrap">
              <img src={portfolio1} class="img-fluid" alt=""/>
              <div class="portfolio-links">
                <a href={portfolio1} data-gallery="portfolioGallery" class="portfolio-lightbox" title="App 1"><i class="bx bx-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web">
            <div class="portfolio-wrap">
              <img src={portfolio2} class="img-fluid" alt=""/>
              <div class="portfolio-links">
                <a href={portfolio2} data-gallery="portfolioGallery" class="portfolio-lightbox" title="Web 3"><i class="bx bx-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <div class="portfolio-wrap">
              <img src={portfolio3}  class="img-fluid" alt=""/>
              <div class="portfolio-links">
                <a href={portfolio3}  data-gallery="portfolioGallery" class="portfolio-lightbox" title="App 2"><i class="bx bx-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-card">
            <div class="portfolio-wrap">
              <img src={portfolio4}  class="img-fluid" alt=""/>
              <div class="portfolio-links">
                <a href={portfolio4}  data-gallery="portfolioGallery" class="portfolio-lightbox" title="Card 2"><i class="bx bx-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web">
            <div class="portfolio-wrap">
              <img src={portfolio5}  class="img-fluid" alt=""/>
              <div class="portfolio-links">
                <a href={portfolio5}  data-gallery="portfolioGallery" class="portfolio-lightbox" title="Web 2"><i class="bx bx-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <div class="portfolio-wrap">
              <img src={portfolio6}  class="img-fluid" alt=""/>
              <div class="portfolio-links">
                <a href={portfolio6}  data-gallery="portfolioGallery" class="portfolio-lightbox" title="App 3"><i class="bx bx-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-card">
            <div class="portfolio-wrap">
              <img src={portfolio7}  class="img-fluid" alt=""/>
              <div class="portfolio-links">
                <a href={portfolio7}  data-gallery="portfolioGallery" class="portfolio-lightbox" title="Card 1"><i class="bx bx-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-card">
            <div class="portfolio-wrap">
              <img src={portfolio8}  class="img-fluid" alt=""/>
              <div class="portfolio-links">
                <a href={portfolio8}  data-gallery="portfolioGallery" class="portfolio-lightbox" title="Card 3"><i class="bx bx-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web">
            <div class="portfolio-wrap">
              <img src={portfolio9}  class="img-fluid" alt=""/>
              <div class="portfolio-links">
                <a href={portfolio9}  data-gallery="portfolioGallery" class="portfolio-lightbox" title="Web 3"><i class="bx bx-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
    </div>
  )
}
