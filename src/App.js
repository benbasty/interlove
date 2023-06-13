import './App.css';
import Header from './components/header/header';
import AboutMission from './components/about/about-mission';
import AboutRequest from './components/about/about-request';
import Empower from './components/about/empower';
import Amazing from './components/testimonials/amazing';
import WhoIworkWith from './components/workWithMe/whoIworkWith';

function App() {
  return (
    <>
      <Header />
      <AboutMission />
      <AboutRequest />
      <Empower />
      <Amazing />
      <WhoIworkWith />
    </>
  );
}

export default App;
