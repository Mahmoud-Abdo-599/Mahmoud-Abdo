import React, { Fragment } from 'react';

import '../icon-font.css';

const HomePageSectionTwo = () => {
    return (
        <Fragment>
            <section className="section-2">
                <div className="row">

                    <div className="feature-box">
                        <i className="feature-box__icon icon-basic-keyboard"></i>
                        <div className="feature-box__text-box">
                            <h3 className="feature-box__text-box__heading">Front-end Developer</h3>
                            <p className="feature-box__text-box__secondary">
                                I like to code things from scratch, and enjoy bringing ideas to life.
                            </p>
                        </div>
                    </div>


                    <div className="feature-box">
                        <i className="feature-box__icon icon-basic-pencil-ruler-pen "></i>
                        <div className="feature-box__text-box">
                            <h3 className="feature-box__text-box__heading">Designer</h3>
                            <p className="feature-box__text-box__secondary">
                                I value simple content structure, clean design patterns, and thoughtful interactions.
                            </p>
                        </div>
                    </div>


                    <div className="feature-box">
                        <i className="feature-box__icon icon-basic-lightbulb"></i>
                        <div className="feature-box__text-box">
                            <h3 className="feature-box__text-box__heading">creative</h3>
                            <p className="feature-box__text-box__secondary">
                                As I’m planning out web content, I feel fortunate that I can visualize the modules in my mind that would work best for that content.                            </p>
                        </div>
                    </div>

                </div>
            </section>
        </Fragment>
    )
}

export default HomePageSectionTwo;
