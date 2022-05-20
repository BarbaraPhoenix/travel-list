
import './App.css';
import image from './travel1.jpg';
import imageTwo from './travel2.jpg';
import { TravelList } from './TravelList';


function App() {
  return (
    <div className="app">
      <div className='container'>
     <img src={image} width="250px" alt="travel"/> 
     </div> 
     <div className='container'>
     <h1>Travel List</h1>
     </div>
     <TravelList/>

    <div className='container'>
     <img src={imageTwo} width="250px" alt="adventure"/>
    </div>
    </div>
  );
}

export default App;
