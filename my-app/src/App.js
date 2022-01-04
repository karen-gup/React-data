import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Data } from './components/Data';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element= {<Data/>}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
