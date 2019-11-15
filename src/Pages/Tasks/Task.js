import React, { Fragment } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faAd } from "@fortawesome/free-solid-svg-icons";
import { observer } from "mobx-react";
import { taskItem } from "../../hoc/taskItem";
import '../DetailsTask/DetailsTask.css'

const Task = ({children, todo, isIcon}) => {

    return (
        <Fragment>
            <div className="todoItem">
                <span onClick={() => todo.toggleCompleted()}>
                    {isIcon(todo.isCompleted)}
                    <span
                        className={todo.isCompleted ? "taskCompleted" : "task"}
                    >
                        {children}
                    </span>
                </span>
                <span onClick={() => todo.toggleFavorite({})}>
                    <FontAwesomeIcon icon={todo.isFavorite ? faStar : faAd}/>
                </span>
            </div>
            <hr/>
        </Fragment>
    )
};

export default taskItem(observer(Task))
