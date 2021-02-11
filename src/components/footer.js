import React from 'react'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__logo-box">
                <p className="footer__logo">Built with <p className="footer__heart">&#9825;</p></p>
                <p className="footer__logo-sub">&#169; 2020 by Mahmoud Abdo. All rights reserved.</p> 
            </div>
            
            <div className="row fotter__copyright-box">
                <div>
                    <p className="footer__copyright">
                        Designed & Built by, <a href="https://www.linkedin.com/in/mahmoud-abdo-a5b765102/" target="_blank" className="footer__link">Mahmoud Abdo</a>,
                         to view more of my projects you can visit my <a href="https://github.com/Mahmoud-Abdo-599" target="_blank" className="footer__link">GitHub</a> or viewing my <a href="https://www.linkedin.com/in/mahmoud-abdo-a5b765102/" target="_blank" className="footer__link">LinkedIn</a> acount.
                         <br /> or send me e-mail at : mahmoud.abdo59986@gmail.com
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
