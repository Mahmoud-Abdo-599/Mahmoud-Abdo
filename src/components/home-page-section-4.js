import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';

import pdf from '../pdf/Resume-Mahmoud-Abdo-Front-End-Developer.pdf';

const HomePageSectionFour = () => {
    return (
        <Fragment>
            <section className="section-4">
                
                    <h3 className="row section-4__primary--main">FEEL FREE TO GET IN TOUCH.</h3>
                    <div className="section-4__mail-box">
                        <a href="mailto:mahmoud.abdo59986@gmail.com" className="btn-text section-4__mail">Send email</a>
                    </div>
                    <h4 className="row section-4__primary--sub">+2 01006437249</h4>
                    <div className="row section-4__social-box">
                        <a href="https://www.linkedin.com/in/mahmoud-abdo-a5b765102/" target="_blank" className="fa fa-linkedin"/>
                        <a href="https://github.com/Mahmoud-Abdo-599" target="_blank" className="fa fa-github"/>
                    </div>
                    <div className="row section-4__button-box">
                        <a href={pdf} download="Resume-Mahmoud-Abdo-Front-End-Developer"  className="btn-text section-4__button">Download Resume (PDF)</a>
                    </div>
                    <div className="row section-4__button-box-2">
                        <Link to="/Mahmoud-Abdo/Portfolio" className=" btn-text-2 section-4__button-box-2__button">portfolio &rarr;</Link>
                    </div>         
                
            </section>
        </Fragment>
    )
}

export default HomePageSectionFour;
