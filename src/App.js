
import './App.css';
import Home from './Home'
import image1 from './imgs/1.jpg'
import image2 from './imgs/2.jpg'
import image3 from './imgs/3.jpg'
import image4 from './imgs/4.jpg'
import image5 from './imgs/5.jpg'



const images = [image1,image2,image3,image4,image5]

function App() {
  return (
 <div className='pl-5 pr-5 bg-light w-50 position-relative'>

<Home image={images}/>
</div>
  );
}

export default App;
