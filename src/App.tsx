import Homepage from './Pages/Homepage';
import {Routes, Route} from 'react-router-dom'
import Contact from './Pages/Contact';

function App() {
  return (
    <div>
       <Routes>
          <Route path="/" element={<Homepage/>} /> 
          <Route path='/contact' element={<Contact/>} />
        </Routes>
      
    </div>
  );
}

export default App;
