import React, { Fragment } from 'react';
import '../sass/abstracts/_variables.scss'

const Header = () => {
    return (
        <Fragment>
            <header className="header">
                <div className="header__logo-box">
                    <h1 className="header__logo heading-logo" > Mahmoud Abdo </h1>
                </div>
                <div className="header__text-box">
                    <h1 className="heading-primary">
                        <span className="heading-primary--main">Front-end Developer.</span>
                        <span className="heading-primary--sub">I DESIGN AND CODE, AND I LOVE WHAT I DO.</span>
                    </h1>
                </div>
            </header>
        </Fragment>
    )
}

export default Header;
