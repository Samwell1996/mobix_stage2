import React from 'react';
import './NavBar.css';
import '../images/bars-solid.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowMaximize, faBullhorn, faQuestion, faUser, faCog } from '@fortawesome/free-solid-svg-icons';



function NavBar() {
    return (
        <nav>
            <ul className="menu-area">
                <li>
                    <a>
                        <FontAwesomeIcon icon={faWindowMaximize} className='FontAwesomeIcon'/>
                    </a>
                </li>
                <li>
                    <a>To Do</a>
                </li>
                <li className='input-place'>
                    <input
                        className='input'
                        placeholder='Пошук'
                    />
                </li>
                <li>
                    <a>
                        <FontAwesomeIcon icon={faBullhorn} className='FontAwesomeIcon'/>
                    </a>
                </li>
                <li>
                    <a>
                        <FontAwesomeIcon icon={faQuestion} className='FontAwesomeIcon'/>
                    </a>
                </li>
                <li>
                    <a>
                        <FontAwesomeIcon icon={faUser} className='FontAwesomeIcon'/>
                    </a>
                </li>
                <li>
                    <a>
                        <FontAwesomeIcon icon={faCog} className='FontAwesomeIcon'/>
                    </a>
                </li>

            </ul>
        </nav>
    )
}

export default NavBar
