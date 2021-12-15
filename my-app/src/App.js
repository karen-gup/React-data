import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Data } from './components/Data';
import { Characters } from './components/Characters';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element= {<Data/>}/>
        <Route path="/ruta" element = {<Characters/>}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
