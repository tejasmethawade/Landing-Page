import React from 'react'
import "./aboutInstructor.css";
import Profile from '../img/Profile.png'
import Amazon from '../img/amazon.png'
import Google from '../img/google.png'
import Microsoft from '../img/microsoft.png'

const aboutInstructor = () => {
  return (
    <>
        <section>

            <div className="title">
                <h1>Meet Your Instructor</h1>
                <button>Know More</button>
            </div>
            <hr className='line'></hr>
            <div className="picture" data-aos="fade-up">
                <img src={Profile} alt="profile"></img>
                <br></br>
                <h1>Tejas Methawade</h1>
                <h4>Founder, Codehelp</h4>
            </div>

            {/* <div className="info">
                <div className="amazon" data-aos="fade-up">
                    <img src={Amazon} alt="amazon"></img>
                    <h3>Amazon</h3>
                </div>
                <div className="microsoft" data-aos="fade-up">
                    <img src={Microsoft} alt="microsoft"></img>
                    <h3>Microsoft</h3>
                </div>
                <div className="google" data-aos="fade-up">
                    <img src={Google} alt="google"></img>
                    <h3>Google</h3>
                </div>
            </div> */}
        </section>
    </>
  )
}

export default aboutInstructor