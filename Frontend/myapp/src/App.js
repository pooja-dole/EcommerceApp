import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from  'react-router-dom'
import Login from './components/Login';
import SignUp from './components/SignUp';
function App() {
  return (
   <>
   <BrowserRouter>
  <Routes>
    <Route path="/" element={<Login/>} />
    <Route path='/signUp' element={<SignUp/>} />
  </Routes>
  </BrowserRouter>
   </>
  );
}

export default App;
