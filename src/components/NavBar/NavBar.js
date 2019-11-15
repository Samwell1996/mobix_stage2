import React from 'react';
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowMaximize, faBullhorn, faQuestion, faUser, faCog } from '@fortawesome/free-solid-svg-icons';



function NavBar() {
    return (
        <nav>
            <div className='leftBar'>
                <a className='categoryItem'>
                    <FontAwesomeIcon icon={faWindowMaximize} className='FontAwesomeIcon'/>
                </a>
                <a className='writeTodo'>To Do</a>
            </div>
            <div className='centerBar'>
                <input
                    className='input'
                    placeholder='Пошук'
                />
            </div>
            <div className='rightBar'>
                <a className='categoryItem'>
                    <FontAwesomeIcon icon={faCog} className='FontAwesomeIcon'/>
                </a>
                <a className='categoryItem'>
                    <FontAwesomeIcon icon={faQuestion} className='FontAwesomeIcon'/>
                </a>
                <a className='categoryItem'>
                    <FontAwesomeIcon icon={faBullhorn} className='FontAwesomeIcon'/>
                </a>

                <a className='categoryItem'>
                    <FontAwesomeIcon icon={faUser} className='FontAwesomeIcon'/>
                </a>

            </div>
        </nav>

    )
}

export default NavBar
