import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About Us</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p>I am a Junior Android Developer currently working in start-up. I love reading about new technologies and also world affairs.</p>
                    </div>
                </div>

                <div className="row">

					<div className="col-md-3 animate-box" data-animate-effect="fadeInRight">
				    	<div className="services color-4">
					        <span className="icon2"><i className="icon-globe-outline"></i></span>
							<h3>Web Design</h3>
						</div>
					</div>
					<div className="col-md-3 animate-box" data-animate-effect="fadeInTop">
						<div className="services color-2">
							<span className="icon2"><i className="icon-data"></i></span>
							<h3>Software</h3>
						</div>
					</div>
					<div className="col-md-3 animate-box" data-animate-effect="fadeInBottom">
						<div className="services color-5">
					    	<span className="icon2"><i className="icon-android"></i></span>
							<h3>Adnroid Development</h3>
						</div>
					</div>
					</div>
                
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">Here are some of my expertise</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3>Web Development </h3>
                    <p>I first started doning web devlopment in college and I do have some experience in building websites using JavaScript,HTML,CSS<br/><br/><br/><br/></p>
                </div>
                </div>
            </div>
            <div class="col-md-4 text-center animate-box">
				<div class="services color-2">
					<span class="icon">
						<i class="icon-data"></i>
					</span>
					<div class="desc">
						<h3>Application</h3>
				        <p>I have experience in using Android Studio, Photoshop, Illustrator<br/>,VsCode<br/><br/><br/><br/><br/></p>
			    	</div>
				</div>
			</div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-android" />
                </span>
                <div className="desc">
                    <h3>Android Development</h3>
                    <p>I love technology but tends to lean more towards mobile technology and open-source. Android being a open source and having a larger market base attracted me more so I decided to follow the path of Android Developer</p>
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
