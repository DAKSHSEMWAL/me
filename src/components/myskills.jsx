import React, { Component } from 'react'

export default class MySkills extends Component {
  render() {
    return (
        <div>
    <section claassName="colorlib-skills" data-section="skills">
    <div className="colorlib-narrow-content">
        <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">My Specialty</span>
                <h2 className="colorlib-heading animate-box">My Skills</h2>
            </div>
        </div>
        <div className="row">
            <div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
                <p>These are some of the skills that I have acuqired during past few years.</p>
            </div>
            <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
                <div className="progress-wrap">
                    <h3>Android</h3>
                    <br></br>
                    <div className="progress">
                         <div className="progress-bar color-1" role="progressbar" aria-valuenow="45"
                          aria-valuemin="0" aria-valuemax="100" style={{width:"45%"}}>
                        <span>45%</span>
                          </div>
                    </div>
                </div>
            </div>
            <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
                <div className="progress-wrap">
                    <h3>React</h3>
                    <br></br>
                    <div className="progress">
                         <div className="progress-bar color-2" role="progressbar" aria-valuenow="10"
                          aria-valuemin="0" aria-valuemax="100" style={{width:"10%"}}>
                        <span>10%</span>
                          </div>
                    </div>
                </div>
            </div>
            <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
                <div className="progress-wrap">
                    <h3>HTML5</h3>
                    <br></br>
                    <div className="progress">
                         <div className="progress-bar color-3" role="progressbar" aria-valuenow="50"
                          aria-valuemin="0" aria-valuemax="100" style={{width:"50%"}}>
                        <span>50%</span>
                          </div>
                    </div>
                </div>
            </div>
            <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
                <div className="progress-wrap">
                    <h3>CSS3</h3>
                    <br></br>
                    <div className="progress">
                         <div className="progress-bar color-4" role="progressbar" aria-valuenow="50"
                          aria-valuemin="0" aria-valuemax="100" style={{width:"50%"}}>
                        <span>50%</span>
                          </div>
                    </div>
                </div>
            </div>
            <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
                <div className="progress-wrap">
                    <h3>JavaScript</h3>
                    <br></br>
                    <div className="progress">
                         <div className="progress-bar color-5" role="progressbar" aria-valuenow="20"
                          aria-valuemin="0" aria-valuemax="100" style={{width:"20%"}}>
                        <span>20%</span>
                          </div>
                    </div>
                </div>
            </div>
            <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
                <div className="progress-wrap">
                    <h3>Java</h3>
                    <br></br>
                    <div className="progress">
                         <div className="progress-bar color-6" role="progressbar" aria-valuenow="40"
                          aria-valuemin="0" aria-valuemax="100" style={{width:"40%"}}>
                        <span>40%</span>
                          </div>
                    </div>
                </div>
            </div>
           
        </div>
    </div>
</section>
</div>
    )
  }
}