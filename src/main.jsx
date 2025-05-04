import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ApplyNow from './Pages/ApplyNow/ApplyNow';
import Campus from './components/Campus/Campus';
import StudyAbroad from './Pages/StudyAbroad/StudyAbroad';
import ProgramPage from './Pages/ProgramePage/ProgramPage';
import AboutUs from './Pages/AboutUs/AboutUs';
import Canada from './Pages/Canada/Canada';
import { UK } from './Pages/UK/UK';
import { USA } from './Pages/USA/USA';
import Australia from './Pages/Australia/Australia';
import ContactUs from './Pages/ContactUs/ContactUs';
import IELTS from './Pages/TestPreparation/IELTS/IELTS';
import PTE from './Pages/TestPreparation/PTE/PTE';
import SAT from './Pages/TestPreparation/SAT/SAT';
import TOEFL from './Pages/TestPreparation/TOEFL/TOEFL';
import GRE from './Pages/TestPreparation/GRE/GRE';
import ScrollToTop from './ScrollToTop';
import NewZealand from './Pages/NewZealand/NewZealand';
import Home from './Pages/Home/Home.jsx';
import Event from './Pages/Event/Event';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

 const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route index element ={<Home/>}/>
      <Route path='apply-now' element ={<ApplyNow/>}/>
      <Route path='programs' element ={<ProgramPage/>}/>
      <Route path='contact-us' element ={<ContactUs/>}/>
      <Route path='apply-now' element ={<ApplyNow/>}/>
      <Route path='about-us' element ={<AboutUs/>}/>
      <Route path='canada' element ={<Canada/>}/>
      <Route path='uk' element ={<UK/>}/>
      <Route path='usa' element ={<USA/>}/>
      <Route path='australia' element ={<Australia/>}/>
      <Route path='IELTS' element ={<IELTS/>}/>
      <Route path='PTE' element ={<PTE/>}/>
      <Route path='SAT' element ={<SAT/>}/>
      <Route path='TOEFL' element ={<TOEFL/>}/>
      <Route path='GRE' element ={<GRE/>}/>
      <Route path='new-zealand' element ={<NewZealand/>}/>
      <Route path='event' element ={<Event/>}/>
    </Route>
  )
 )

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <RouterProvider router={router} />
  /* </React.StrictMode>, */
)
