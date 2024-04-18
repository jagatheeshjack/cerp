import './App.css';
// import Links from './Links';
import Sidebar from './sidebar/Sidebar';
import './assets/css/style.css';
import './assets/vendor/bootstrap-icons/bootstrap-icons.css';
import './assets/vendor/bootstrap/css/bootstrap.min.css';
import './assets/vendor/boxicons/css/boxicons.min.css';
import './assets/vendor/glightbox/css/glightbox.min.css';
import './assets/vendor/swiper/swiper-bundle.min.css';
// import 'https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i';
import './assets/vendor/aos/aos.css';
import favicon from './assets/img/favicon.png';  
// import './assets/js/main.js';

function App() {
  return (
    <div className="App">
       <head>
            <meta charset="utf-8"/>
            <meta content="width=device-width, initial-scale=1.0" name="viewport"/>

            <meta content="" name="description"/>
            <meta content="" name="keywords"/>

            <link href={favicon.png} rel="icon"/>
            <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon"/>

            <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet"/>
        </head>
      <body>
        <Sidebar></Sidebar>
        {/* <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a> */}

     
      </body>

    </div>
  );
}

export default App;
