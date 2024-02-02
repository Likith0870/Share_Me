import React, { useEffect } from 'react';
import { BrowserRouter,Routes,Route, useNavigate} from 'react-router-dom';
import Login from './components/Login.jsx';
import Home from './container/Home.jsx';
import { fetchUser } from './utils/fetchUser.js';

const App = () => {
   const navigate = useNavigate();

   useEffect(()=>{
      const user = fetchUser();

      if(!user) navigate('/login')
   },[])

  return (
      <BrowserRouter>
         <Routes>
            <Route path ="/login" element={ <Login />} />
            <Route path = "/*" element={ <Home />} />
         </Routes> 
      </BrowserRouter>
  )
};

export default App;