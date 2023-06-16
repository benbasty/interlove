import './App.css';
import Header from './components/header/header';
import AboutMission from './components/about/about-mission';
import AboutRequest from './components/about/about-request';
import Empower from './components/about/empower';
import Amazing from './components/testimonials/amazing';
import WhoIworkWith from './components/workWithMe/whoIworkWith';
import Video from './components/video/video';
import Morefun from './components/testimonials/morefun';
import AboutKate from './components/about/about-kate';
import ExtraOrdinary from './components/testimonials/extraordinary';
import BookNow from './components/about/book-now';
import Testimonials from './components/testimonials/testimonials';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';

function App() {
  return (
    <>
      <Header />
      <AboutMission />
      <AboutRequest />
      <Empower />
      <Amazing />
      <WhoIworkWith />
      <Video />
      <Morefun />
      <AboutKate />
      <ExtraOrdinary />
      <BookNow />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
