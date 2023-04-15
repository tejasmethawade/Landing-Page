// import React, { useState } from 'react'
import './Vector.css';
import Vector from '../img/vector.svg';
import TypeWriter from "typewriter-effect";


const vector = () => {
  
  return (
    <>
        <div className='container'>

            <div className='desc'>
            
            <div className='text'>
                <TypeWriter
                  options={{
                  autoStart:true,
                  loop:true,
                  delay:50,
                  strings:[
                   "Learn With Love",
                   "Leran With Tejas"
                   ],
                  }}
                />
            </div>

              <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
                ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim 
                id est laborum.
              </div>

              
            
            </div>

            

            <div className='vector-img'>
                <img calssname="responsive"src={Vector}  alt="vector"/>
            </div>

        </div>
    </>
  )
}

export default vector