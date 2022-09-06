import React, { useEffect } from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/navbar/navbar';
import Landing from './screens/landing/landing';
import FooterComp from './components/footer/footer';
import ViewAll from './screens/view all/view';
import AddScr from './screens/addEntry/add';
import LoginPage from './login';
import {loadUser} from './action/user'
import Edit from './screens/edit/edit';
import {  useDispatch, useSelector } from 'react-redux';
import Details from './screens/vehicle details/details';
import Impound from './screens/impound details/impound';

function App() {
  const dispatch= useDispatch()
  
  const {isAuthenticated}= useSelector(state=> state.user)
   useEffect(()=>{
     dispatch(loadUser())
   },[dispatch])
  
  return (
    !isAuthenticated?<LoginPage />: 
    <BrowserRouter>
    
    <Navbar />
    <Routes>
      <Route path='/' element={<Landing />} />


      <Route path='/add' element={<AddScr />} /> 

      <Route path='/all' element={<ViewAll />} />
      <Route path='/edit/:id' element={<Edit />} />
      <Route path='/vehicles/:id' element={<Details />} />
      <Route path='/impound/:name' element={<Impound />} />
    </Routes>
    <FooterComp />
    </BrowserRouter>
   
   
  );
}



export default App;
