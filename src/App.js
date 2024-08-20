import './App.css';
import NavBar from '../src/component/NavBar';
import SideBar from './component/SideBar';
import HeroSection from './component/HeroSection';
import RightSideBar from './component/RightSideBar';

function App() {
  
  return (
    <div className="App">
      <NavBar />
      <SideBar/>
      <HeroSection />
      <RightSideBar />
    </div>
  );
}

export default App;
