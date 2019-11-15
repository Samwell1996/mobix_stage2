import React from 'react';
import { rootStore as store } from "../../store/RootStore";
import { values } from "mobx";
import { CreateTasks, DrawerItems } from "../index";
import { observer } from "mobx-react";


const Drawer = ({isVisibleDrawer, onToggleVisibleDrawer, setGroup, isGroup}) => {

    return  (
        <div>
        <div className={isVisibleDrawer ? "Drawer" : "DrawerClose"}>
            {isVisibleDrawer && (
                <div>
                <ul className='ul'>
                    {
                        values(store.groups.list).map((category, index) => {
                            return <DrawerItems
                                setGroup={setGroup}
                                index={index}
                                key={category.id}
                            >
                                {category}
                            </DrawerItems>
                        })
                    }
                </ul>
                    < CreateTasks
                        isGroup={isGroup}
                        isGroupList={true}
                        isVisibleInput={isVisibleDrawer}
                        onClick={onToggleVisibleDrawer}
                    />
                </div>
                )}
        </div>
        </div>
    )
};

export default observer(Drawer)
