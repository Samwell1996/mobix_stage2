import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Drawer } from '../index'
import './MenuToggle.css'


function MenuToggle() {

    const [isVisible, setVisible] = useState(true);

    function getOpenMenuToggle(event) {
        event.preventDefault();
        setVisible(!isVisible);

    }

    return (
        <div className='MenuToggle'>
            <div onClick={getOpenMenuToggle}>
                <FontAwesomeIcon  icon={faBars} className='MenuToggleAwesome'/>
            </div>
            <Drawer isVisible={isVisible}/>
        </div>
    )
}
export default MenuToggle
