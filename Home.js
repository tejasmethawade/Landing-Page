import React from 'react'
import Header from './components/Header'
// import Footer from './components/Footer';
import Vector from './components/vector';
import './Home.css';
// import CounterBar from './components/CounterBar';
import Features from './components/Features';
import Instructor from './components/aboutInstructor'
import AvailCourses from './components/AvailCourses';


const Home = () => {
  return (
    <>
      <Header/>
      <Vector/>
      <br/>
      <br/>
      <br/>
      
      <Features/>
      <Instructor/>
      {/* <AvailCourses/> */}
    </>
  )
}

export default Home