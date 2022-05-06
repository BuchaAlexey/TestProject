import Header from './components/Header';
import AboutUs from './components/AboutUs';
import ComplexJob from "./components/ComplexJob";
import Slider from "./components/Slider";
import StepTwo from "./components/StepTwo";
import ThirdStep from "./components/ThirdStep";


function App() {
  return (
    <div>
      <Header/>
      <AboutUs/>
        <Slider/>
        <ComplexJob/>
        <StepTwo/>
        <ThirdStep/>
    </div>
  );
}

export default App;
