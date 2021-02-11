import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const PortofolioSection = () => {
    return (
        <Fragment>
            <section className="section-portofolio">
                <div className="row">
                    <div className="section-portofolio__heading-box">
                        <h3 className="section-portofolio__heading">Most recent projects</h3>
                    </div>
                </div>

                <div className="section-portofolio__container">

                    <div className="card">
                        <div className="card__side card__side--front">
                            <div className="card__picture card__picture--8">
                                &nbsp;   {/* This mean an empty space */}
                            </div>
                            <h4 className="card__heading">
                                <span className="card__heading-span card__heading-span--1">
                                    Optics (Beta)
                                    </span>
                            </h4>
                            <div className="card__details">
                                <ul>
                                    <li>ReactJs - Redux - Thunk - Sass</li>
                                </ul>
                            </div>
                        </div>
                        <div className="card__side card__side--back card__side--back-1">
                            <div className="card__cta">
                                <div className="card__visit-box">
                                    <a href="http://optics-index.azurewebsites.net/" target="_blank" className="btn btn--white u-margin-bottom-medium">Visit</a>
                                </div>
                                {/*
                                <div className="card__visit-box">
                                    <a href="https://github.com/Mahmoud-Abdo-599/e-commerce" target="_blank" className="btn-text-white">Github of the project &rarr;</a>
                                </div>
                                */}
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card__side card__side--front">
                            <div className="card__picture card__picture--1">
                                &nbsp;   {/* This mean an empty space */}
                            </div>
                            <h4 className="card__heading">
                                <span className="card__heading-span card__heading-span--1">
                                    E-Commerce Clothing Shop
                                    </span>
                            </h4>
                            <div className="card__details">
                                <ul>
                                    <li>ReactJs - Redux - Sass - Firebase</li>
                                </ul>
                            </div>
                        </div>
                        <div className="card__side card__side--back card__side--back-1">
                            <div className="card__cta">
                                <div className="card__visit-box">
                                    <a href="https://crwn-live-mahmoud.herokuapp.com/" target="_blank" className="btn btn--white u-margin-bottom-medium">Visit</a>
                                </div>
                                <div className="card__visit-box">
                                    <a href="https://github.com/Mahmoud-Abdo-599/e-commerce" target="_blank" className="btn-text-white">Github of the project &rarr;</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card__side card__side--front">
                            <div className="card__picture card__picture--2">
                                &nbsp;   {/* This mean an empty space */}
                            </div>
                            <h4 className="card__heading">
                                <span className="card__heading-span card__heading-span--1">
                                    Lyric Finder
                                    </span>
                            </h4>
                            <div className="card__details">
                                <ul>
                                    <li>ReactJs - Bootstrap</li>
                                </ul>
                            </div>
                        </div>
                        <div className="card__side card__side--back card__side--back-1">
                            <div className="card__cta">
                                <div className="card__visit-box">
                                    <a href="https://mahmoud-abdo-599.github.io/lyricfinder/" target="_blank" className="btn btn--white u-margin-bottom-medium">Visit</a>
                                </div>
                                <div className="card__visit-box">
                                    <a href="https://github.com/Mahmoud-Abdo-599/lyricfinder/tree/master" target="_blank" className="btn-text-white">Github of the project &rarr;</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card__side card__side--front">
                            <div className="card__picture card__picture--7">
                                &nbsp;   {/* This mean an empty space */}
                            </div>
                            <h4 className="card__heading">
                                <span className="card__heading-span card__heading-span--1">
                                    Booking App
                                    </span>
                            </h4>
                            <div className="card__details">
                                <ul>
                                    <li>ReactJs - CSS3 + Sass</li>
                                </ul>
                            </div>
                        </div>
                        <div className="card__side card__side--back card__side--back-1">
                            <div className="card__cta">
                                <div className="card__visit-box">
                                    <a href="https://mahmoud-abdo-599.github.io/BookingApp/" target="_blank" className="btn btn--white u-margin-bottom-medium">Visit</a>
                                </div>
                                <div className="card__visit-box">
                                    <a href="https://github.com/Mahmoud-Abdo-599/BookingApp/tree/master" target="_blank" className="btn-text-white">Github of the project &rarr;</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card__side card__side--front">
                            <div className="card__picture card__picture--3">
                                &nbsp;   {/* This mean an empty space */}
                            </div>
                            <h4 className="card__heading">
                                <span className="card__heading-span card__heading-span--1">
                                    Natours
                                    </span>
                            </h4>
                            <div className="card__details">
                                <ul>
                                    <li>ReactJs - CSS3 + Sass</li>
                                </ul>
                            </div>
                        </div>
                        <div className="card__side card__side--back card__side--back-1">
                            <div className="card__cta">
                                <div className="card__visit-box">
                                    <a href="https://mahmoud-abdo-599.github.io/Natours/" target="_blank" className="btn btn--white u-margin-bottom-medium">Visit</a>
                                </div>
                                <div className="card__visit-box">
                                    <a href="https://github.com/Mahmoud-Abdo-599/Natours" target="_blank" className="btn-text-white">Github of the project &rarr;</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card__side card__side--front">
                            <div className="card__picture card__picture--4">
                                &nbsp;   {/* This mean an empty space */}
                            </div>
                            <h4 className="card__heading">
                                <span className="card__heading-span card__heading-span--1">
                                    Guest Book
                                    </span>
                            </h4>
                            <div className="card__details">
                                <ul>
                                    <li>ReactJs</li>
                                </ul>
                            </div>
                        </div>
                        <div className="card__side card__side--back card__side--back-1">
                            <div className="card__cta">
                                <div className="card__visit-box">
                                    <a href="https://mahmoud-abdo-599.github.io/guest-book/" target="_blank" className="btn btn--white u-margin-bottom-medium">Visit</a>
                                </div>
                                <div className="card__visit-box">
                                    <a href="https://github.com/Mahmoud-Abdo-599/guest-book" target="_blank" className="btn-text-white">Github of the project &rarr;</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card__side card__side--front">
                            <div className="card__picture card__picture--5">
                                &nbsp;   {/* This mean an empty space */}
                            </div>
                            <h4 className="card__heading">
                                <span className="card__heading-span card__heading-span--1">
                                    Weather App
                                    </span>
                            </h4>
                            <div className="card__details">
                                <ul>
                                    <li>ReactJs</li>
                                </ul>
                            </div>
                        </div>
                        <div className="card__side card__side--back card__side--back-1">
                            <div className="card__cta">
                                <div className="card__visit-box">
                                    <a href="https://mahmoud-abdo-599.github.io/weather-app/" target="_blank" className="btn btn--white u-margin-bottom-medium">Visit</a>
                                </div>
                                <div className="card__visit-box">
                                    <a href="https://github.com/Mahmoud-Abdo-599/weather-app/tree/master" target="_blank" className="btn-text-white">Github of the project &rarr;</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card__side card__side--front">
                            <div className="card__picture card__picture--6">
                                &nbsp;   {/* This mean an empty space */}
                            </div>
                            <h4 className="card__heading">
                                <span className="card__heading-span card__heading-span--1">
                                    Todo List
                                    </span>
                            </h4>
                            <div className="card__details">
                                <ul>
                                    <li>ReactJs</li>
                                </ul>
                            </div>
                        </div>
                        <div className="card__side card__side--back card__side--back-1">
                            <div className="card__cta">
                                <div className="card__visit-box">
                                    <a href="https://mahmoud-abdo-599.github.io/TodoListApp/" target="_blank" className="btn btn--white u-margin-bottom-medium">Visit</a>
                                </div>
                                <div className="card__visit-box">
                                    <a href="https://github.com/Mahmoud-Abdo-599/TodoList/tree/master" target="_blank" className="btn-text-white">Github of the project &rarr;</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="row section-portofolio__button-box-2">
                    <Link to="/Mahmoud-Abdo/About-Me" className=" btn-text-2 section-portofolio__button-box-2__button">about me &rarr;</Link>
                </div>

            </section>
        </Fragment>
    )
}

export default PortofolioSection;
