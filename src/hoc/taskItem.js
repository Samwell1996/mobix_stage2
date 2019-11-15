import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle, faCircle} from "@fortawesome/free-solid-svg-icons";
import React from "react";

export const taskItem = TodoItem => ({children, todo}) => {
    const isIcon = (isCompleted) => {
        return isCompleted
            ? <FontAwesomeIcon  icon={faCheckCircle} />
            : <FontAwesomeIcon  icon={faCircle} />
    };

    return <TodoItem
        children={children}
        todo={todo}
        isIcon={isIcon}/>
};
