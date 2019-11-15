import React, {useState} from 'react';
import Task from "../Tasks/Task";
import { rootStore as store } from "../../store/RootStore";
import { CreateTasks } from '../../components'
import { observer } from "mobx-react";
import './DetailsTask.css'

const DetailTask = ({isGroup, groupDetails}) => {

    const [isVisible, setVisible] = useState(true);

    function onVisible(event) {
        if (event) {
            event.preventDefault();
        }
        setVisible(!isVisible);

    }

    return (
        groupDetails
            ? <div className="detailsTask">
                <h4>
                    {groupDetails.title}
                </h4>
                <div>
                    {
                        groupDetails.title === "Favorites"
                            ? store.getFavorites().map(todo => {
                                return <Task key={todo.id} todo={todo}>{todo.task}</Task>
                            })
                            : groupDetails.todos.map(todo => {
                                return <Task key={todo.id} todo={todo}>{todo.task}</Task>
                            })
                    }
                </div>
                <CreateTasks
                    isGroup={isGroup}
                    isVisibleInput={isVisible}
                    onClick={onVisible}
                    title={groupDetails.title}

                />
            </div>
            :
            <div className="detailsTask"><h1>NO DATA</h1></div>
    )
};

export default observer(DetailTask)
