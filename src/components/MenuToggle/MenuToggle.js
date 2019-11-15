import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Drawer } from '../index'
import './MenuToggle.css'


function MenuToggle({setGroup, isGroup}) {

    const [isVisibleDrawer, setVisibleDrawer] = useState(true);

    function onToggleVisibleDrawer(event) {
        if (event) {
            event.preventDefault();
        }
        setVisibleDrawer(!isVisibleDrawer);

    }
    return (
        <div className='MenuToggle'>
            <div onClick={onToggleVisibleDrawer}>
                <FontAwesomeIcon  icon={faBars} className='MenuToggleAwesome'/>
            </div>
            <Drawer
                isGroup={isGroup}
                setGroup={setGroup}
                onToggleVisibleDrawer={onToggleVisibleDrawer}
                isVisibleDrawer={isVisibleDrawer}/>
        </div>
    )
}
export default MenuToggle
