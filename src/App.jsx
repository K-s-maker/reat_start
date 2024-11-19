import { useState } from 'react'
import reactLogo from './assets/react.svg'
import {Routes,Route} from 'react-router-dom';
import './App.css'
//conponents
import Login from './conponents/login/Login';
// import Register from'./conponents/Register/Register';
// import Navbar from'./conponents/Navbar/Navdar';
// import Home from'./conponents/Home/Home';
// function App() {
//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-800">
//       <p className="text-lg hover:text-3xl transition duration-300 ease-in-out">
//         เลื่อนเมาส์ผ่านข้อความนี้!
//       </p>
//     </div>
//   );
// }

// export default App;

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
    <Route path='/' element={<Login />} />
    </Routes>
    
  );
  
}

export default App
