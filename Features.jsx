import React from "react";
import "./Features.css";
import features from "../img/feature.jpg";


const Features = () => {
  return (
    <>
      <div className="container">
        {/* <div className="heading"></div> */}
        <div className="cards_line_1">
          <div className="card-1" id="c-1" data-aos="fade-right">
            <div className="card-img">
              <img className="center" src={features} alt="imag_"></img>
            </div>
            <div className="info">
              <h3>Data Structure</h3>
              <br></br>
              <p>
                Data structures are the problem-solving pillars of coding. Learn
                all the foundational knowledge about all of the popular data
                structure that you need, to be well-versed in interviews.
              </p>
            </div>
          </div>

          <div className="card-1" id="c-2" data-aos="fade-up">
            <div className="card-img">
              <img className="center" src={features} alt="imag_1"></img>
            </div>
            <div className="info">
              <h3>Data Structure</h3>
              <br></br>
              <p>
                Data structures are the problem-solving pillars of coding. Learn
                all the foundational knowledge about all of the popular data
                structure that you need, to be well-versed in interviews.
              </p>
            </div>
          </div>

          <div className="card-1" id="c-3" data-aos="fade-left">
            <div className="card-img" >
              <img className="center" src={features} alt="imag_2"></img>
            </div>
            <div className="info">
              <h3>Data Structure</h3>
              <br></br>
              <p>
                Data structures are the problem-solving pillars of coding. Learn
                all the foundational knowledge about all of the popular data
                structure that you need, to be well-versed in interviews.
              </p>
            </div>
          </div>

          <div className="card-1" id="c-4" data-aos="fade-right">
            <div className="card-img">
              <img className="center" src={features} alt="imag_3"></img>
            </div>
            <div className="info">
              <h3>Data Structure</h3>
              <br></br>
              <p>
                Data structures are the problem-solving pillars of coding. Learn
                all the foundational knowledge about all of the popular data
                structure that you need, to be well-versed in interviews.
              </p>
            </div>
          </div>

          <div className="card-1" id="c-5" data-aos="fade-up">
            <div className="card-img" >
              <img className="center" src={features} alt="_"></img>
            </div>
            <div className="info">
              <h3>Data Structure</h3>
              <br></br>
              <p>
                Data structures are the problem-solving pillars of coding. Learn
                all the foundational knowledge about all of the popular data
                structure that you need, to be well-versed in interviews.
              </p>
            </div>
          </div>

          <div className="card-1" id="c-6" data-aos="fade-left">
            <div className="card-img" >
              <img className="center" src={features} alt="imag_5"></img>
            </div>
            <div className="info">
              <h3>Data Structure</h3>
              <br></br>
              <p>
                Data structures are the problem-solving pillars of coding. Learn
                all the foundational knowledge about all of the popular data
                structure that you need, to be well-versed in interviews.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
