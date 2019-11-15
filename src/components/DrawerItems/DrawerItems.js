import React from 'react'
import { observer } from "mobx-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashRestoreAlt } from "@fortawesome/free-solid-svg-icons";
import '../DrawerItems/DrawerItems.css';
import { rootStore as store } from "../../store/RootStore";


function DrawerItems( { setGroup, children, index}) {



    return (
            <div className='activeGroup'>
                <span className="deleteItem" onClick={() => store.groups.deleteGroup(children.id)}>
                    <FontAwesomeIcon  icon={faTrashRestoreAlt}/>
                </span>

                <span  onClick={() => setGroup(index)}>
                    {children.title}
                </span>
                <span className='spanDrawer'>
                { children.getUncompleted()}
            </span>
            </div>

    )
}


export default observer(DrawerItems)

