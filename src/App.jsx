import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"
import Content from './components/Content.jsx'
import Navbar from './components/Navbar.jsx'
import ArrayDemo1 from './components/ArrayDemo1.jsx'
import ArrayDemo2 from './components/ArrayDemo2.jsx'
import ArrayDemo3 from './components/ArrayDemo3.jsx'
import ArrayDemo4 from './components/ArrayDemo4.jsx'
import ArrayDemo5 from './components/ArrayDemo5.jsx'
import ArrayDemo6 from './components/ArrayDemo6.jsx'
import {UseStateDemo1} from './components/UseStateDemo1.jsx'
import { UseStateDemo2 } from './components/UseStateDemo2.jsx'
import { InputDemo1 } from './components/InputDemo1.jsx'
import InputDemo2 from './components/InputDemo2.jsx'
import InputDemo3 from './components/InputDemo3.jsx'
import NavbarLink from './components/NavbarLink.jsx'
import { Route, Routes } from 'react-router-dom'
import HotstarHome from './components/hotstar/HotstarHome.jsx'
import HotstarMovies from './components/hotstar/HotstarMovies.jsx'
import HotstarWelcome from './components/hotstar/HotstarWelcome.jsx'
import Error404 from './components/hotstar/Error404.jsx'
import Play from './components/hotstar/Play.jsx'
import FormDemo1 from './components/form/FormDemo1.jsx'
import FormDemo2 from './components/form/FormDemo2.jsx'
import FormDemo3 from './components/form/FormDemo3.jsx'
import FormDemo4 from './components/form/FormDemo4.jsx'
import FormDemo5 from './components/form/FormDemo5.jsx'
import FormDemo6 from './components/form/FormDemo6.jsx'
import FormDemo7 from './components/form/FormDemo7.jsx'
import FormDemo8 from './components/form/FormDemo8.jsx'






function App() {
  
  return (
    
    
      <div>
         
         <NavbarLink> </NavbarLink>
          <Routes>

            <Route path='/home' element={<HotstarHome></HotstarHome>}></Route>
            <Route path='/movie' element={<HotstarMovies></HotstarMovies>}></Route>
            <Route path='/' element={<HotstarWelcome></HotstarWelcome>}></Route>
            {/* <Route path='/error' element={<Error404></Error404>}></Route> */}
            <Route path='/*' element={<Error404></Error404>}></Route>
            <Route path='/play/:id' element={<Play></Play>}></Route>
            <Route path='/formdemo1' element={<FormDemo1></FormDemo1>}></Route>
            <Route path='/formdemo2' element={<FormDemo2></FormDemo2>}></Route>
            <Route path='/formdemo3' element={<FormDemo3></FormDemo3>}></Route>
            <Route path='/formdemo4' element={<FormDemo4></FormDemo4>}></Route>
            <Route path='/formdemo5' element={<FormDemo5></FormDemo5>}></Route>
            <Route path='/formdemo6' element={<FormDemo6></FormDemo6>}></Route>
            <Route path='/formdemo7' element={<FormDemo7></FormDemo7>}></Route>
            <Route path='/formdemo8' element={<FormDemo8></FormDemo8>}></Route>
            </Routes>
        
         {/* <InputDemo3></InputDemo3>
         <InputDemo2></InputDemo2> */}
        {/* <InputDemo1></InputDemo1> */}
        {/* <UseStateDemo2></UseStateDemo2>
        <UseStateDemo1></UseStateDemo1> */}
        {/* <ArrayDemo6></ArrayDemo6>
        <ArrayDemo5></ArrayDemo5>  */}
        {/* <ArrayDemo4></ArrayDemo4> */}
        {/* <ArrayDemo3></ArrayDemo3> */}
        {/* // <ArrayDemo1></ArrayDemo1> */}
        {/* <ArrayDemo2></ArrayDemo2> */}
        {/* <Navbar></Navbar> */}
         {/* <Header ></Header>
        <Content></Content>
        <Footer></Footer>  */}
      </div>
        
  )
}

export default App;
