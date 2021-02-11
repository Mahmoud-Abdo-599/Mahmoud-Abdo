import React, { Fragment, Component } from 'react';
import {Link} from 'react-router-dom';

class Navigation extends Component {

    toggleCheckbox = () => { 
        var BVC = document.getElementById("navi-toggle")
        BVC.checked = false   
    }

    render(){
        return (
            <Fragment>
                <div className="navigation">
                    <input type="checkbox" className="navigation__checkbox" id="navi-toggle" />
    
                    <label for="navi-toggle" className="navigation__button">
                        <span className="navigation__icon">&nbsp;</span>
                    </label>
    
                    <div className="navigation__background">&nbsp;</div>
    
                    <nav className="navigation__nav">
                        <ul className="navigation__list">
                            
                            <li className="navigation__item" id="navi-toggle">
                                <Link to="/Mahmoud-Abdo" id="navi-toggle" className="navigation__link" onClick={this.toggleCheckbox}  >
                                    Home
                                </Link>   
                            </li>
                            
    
                            <li className="navigation__item" id="navi-toggle">
                                <Link to="/Mahmoud-Abdo/Portfolio" id="navi-toggle" className="navigation__link" onClick={this.toggleCheckbox}  >
                                    Portfolio
                                </Link>   
                            </li>
    

                            <li className="navigation__item" id="navi-toggle">
                                <Link to="/Mahmoud-Abdo/About-Me" id="navi-toggle" className="navigation__link" onClick={this.toggleCheckbox}  >
                                    About Me
                                </Link>   
                            </li>
    
                        </ul>
                    </nav>
                </div>
            </Fragment>
        )
    }
    
}

export default Navigation;

