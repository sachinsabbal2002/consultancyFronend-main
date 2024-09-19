import React ,{useEffect}from 'react'
import { Link } from 'react-router-dom'

const About = ({setProgress,progress}) => {
	// useEffect(
	// 	()=>{
	// setProgress(40);
	// setTimeout(()=>{
	//   setProgress(100)
	// },2000)
	// 	},[]
	//   )
  return (
    <section className="about-us-area about-us-2 pt-120 pb-90 pt-md-60 pb-md-10 pb-xs-10 pt-xs-60" style={{backgroundColor:'rgb(58, 58, 60)'}}>
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6">
						<div className="about-img-wrapper pos-rel mb-30">
							<img className="shape-square" src="https://www.onlinetaxfiler.com/assets/front_end2/assets/img/shape/square-1.png" alt="Shape"/>
							<img className="img-fluid" src="https://www.onlinetaxfiler.com/assets/front_end2/assets/img/about/about-1.png" alt="About Img"/>
						</div>
					</div>
					<div className="col-lg-6 mb-30">
						<div className="about-content-wrapper3 pt-20 pl-60">
							<div className="section-title">
								<h2 className="semi-title mb-10">About Us</h2>
								<h5>A STORY OF DEDICATION TO PROVIDING THE BEST TAXATION SERVICES</h5>
								<p className="paragraph-title">E'Tax Consultancy is a Unit of Online Tax and Accounting Solutions team built with highly experienced professionals of Indian individual Taxations and business taxations, bookkeeping and other payroll services.
								</p>

								{/* <p>E'Tax Consultancy Unit of Online Tax and Accounting Solutions is specialized in the Preparation of India Tax Returns for all our Non-Resident Indians who are either working in the US on H1B/L1 and Green card holders as well as for students visiting U.S on F1 (OPT/CPT) for education purposes.</p> */}

							    <p>We win every time you win! We do whatever we need to do make sure you win every time. Our calculations are appropriate, not more and not less. Once start your journey with us you start every benefit of our professional services and feel like work hit. Our highly skilled professionals to have a great time so make sure to be a client at Onlinetaxfiler to have such a great time. We know how hard to earn money and benefit of saving as well. Onlinetaxfiler is good at keeping your payments safe and secure.</p>
							</div>

							<ul className="btn-list about-btn d-md-flex align-items-center">
								<li ><Link  style={{color:'black'}} to="/contact" className="theme_btn2">Get In Touch</Link></li>
								{/* <!--<li><a href="about.html" className="theme_btn2 ml-20">Our Services</a></li>--> */}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
  )
}

export default About
