import React, { Fragment } from 'react';
import '../sass/abstracts/_variables.scss'

const HeaderTwo = () => {
    return (
        <Fragment>
            <header className="header-2">
                <div className="header-2__logo-box">
                    <h1 className="header-2__logo heading-logo" > Mahmoud Abdo </h1>
                </div>
                <div className="header-2__text-box">
                    <h1 className="heading-2-primary">
                        <span className="heading-2-primary--main">Portfolio, <br />Showcase Projects</span>
                    </h1>
                </div>
            </header>
        </Fragment>
    )
}

export default HeaderTwo;
