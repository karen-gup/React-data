import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Data } from './components/Data';
import { NoFound } from './components/NoFound';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element= {<Data/>}/>
        <Route path="*" element={<NoFound/>}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
