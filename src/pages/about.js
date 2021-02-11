import React, { useEffect, Fragment } from 'react';
import {Link} from 'react-router-dom';

import pdf from '../pdf/Resume-Mahmoud-Abdo-Front-End-Developer.pdf';


const About = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <Fragment>
            <section className="about">
                <div className="about__left-side about__left-side__background-image" >
                </div>

                <div className="about__right-side">
                    <h2 className="about__right-side__title">About Me</h2>

                    <div className="about__right-side__box-1">
                        <h3 className="about__right-side__heading-1">Who am I?</h3>
                        <p className="about__right-side__p-1">
                            My name's Mahmoud. I'm a Front-End web developer based in Cairo, Egypt. <br />
                            I'm a computer science graduate pursuing his passion towards Front end development and I seek a good opportunity to enhance my skills and to utilize my abilities, I'm actively learning web technologies with focus on front-end technologies and tech trends. 
                            I'm a tech-savvy with hands-on experience on ReactJs, NextJs, HTML5, CSS3, Redux, Sass , ES6, CSS-in-JS.
                        </p>
                    </div>

                    <div className="about__right-side__box-1">
                        <h3 className="about__right-side__heading-1">Why Work With Me?</h3>
                        <p className="about__right-side__p-1">
                            There’s nothing I enjoy more than designing and developing Modern-Designed websites. It really is that simple.<br />
                            I’ve spent a decent amount of time perfecting what I do.<br />
                            If you have a project you need a hand with, Feel free to get in touch! and we can get our hands dirty!
                        </p>
                    </div>
 
                    <div className="about__right-side__box-1">
                        <h3 className="about__right-side__heading-1">From Start to Finish</h3>
                        <p className="about__right-side__p-1">
                        From design to code. I cover every step of the process in getting the front-end ready.
                        </p>
                    </div>

                    <div className="about__right-side__box-1">
                        <h3 className="about__right-side__heading-1">Contact Me</h3>
                        <div className="about__right-side__contact">
                            <h3 className="about__right-side__p-1">Feel free to get in touch by any means of communication.</h3>
                            <a href="mailto:mahmoud.abdo59986@gmail.com" className="btn-text about__right-side__mail">Send email</a>
                            <h4 className="about__right-side__phone">+2 01006437249</h4>
                            <div className="about__right-side__social-box">
                                <a href="https://www.linkedin.com/in/mahmoud-abdo-a5b765102/" target="_blank" className="fa fa-linkedin"/>
                                <a href="https://github.com/Mahmoud-Abdo-599" target="_blank" className="fa fa-github"/>
                            </div>
                            <div className="about__right-side__resume">
                                <a href={pdf} download="Resume-Mahmoud-Abdo-Front-End-Developer" className="btn-text section-4__button">Download Resume (PDF)</a>
                            </div>
                            <div className="about__right-side__button">
                                <Link to="/Mahmoud-Abdo" className=" btn-text-3 section-4__button-box-2__button">&larr; back to home</Link>
                            </div>     
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default About;
