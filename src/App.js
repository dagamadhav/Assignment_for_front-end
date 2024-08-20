import './App.css';
import NavBar from '../src/component/NavBar';
import SideBar from './component/SideBar';
import HeroSection from './component/HeroSection';
import RightSideBar from './component/RightSideBar';

function App() {
  
  return (
    <div className="parent">
      <div className="div1">
        <NavBar />
      </div>
      <div className="div2">
        <SideBar />
      </div>
      <div className="div3">
        <RightSideBar />
      </div>
      <div className="div4">
        <HeroSection />
      </div>
    </div>
  );
}

export default App;
