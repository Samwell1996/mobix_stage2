import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { rootStore as store } from "../../store/RootStore";


const CreateTasks = ({isVisibleInput,isGroupList, isGroup, title}) => {
    const [inputValue, setInputValue] = useState("");
    const [isCreate, setCreate] = useState(false);


    function changeHandler(event) {
        setInputValue(event.target.value)
    }

    function pressHandlerForGroup(event) {
        if (event.key === "Enter") {
            store.groups.addGroup(inputValue);
            setInputValue("");
        }
    }
    console.log(isGroup);
    function pressHandlerForTodos(event) {
        if (event.key === "Enter") {
            store.todos.add(inputValue);
            if (title === "Favorites") { store.todos.list[0].toggleFavorite() }
            store.groups.list[isGroup].addTodo(store.todos.list[0]);
            setInputValue("");
        }
    }

    function onToggleEditing(event) {
        if (event) {
            event.preventDefault();
        }
        setCreate(!isCreate);
    }

    function onSubmit(event) {
        event.preventDefault();
        onToggleEditing();

    }

    return (
        <form onSubmit={onSubmit}>

            {
                isVisibleInput && isCreate
                    ? <input
                        id="category-input"
                        onChange={changeHandler}
                        type="text"
                        value={inputValue}
                        onKeyPress={isGroupList ? pressHandlerForGroup : pressHandlerForTodos}
                    /> : (
                        <span onClick={onToggleEditing}>
                            <FontAwesomeIcon className='addButton' icon={faPlus}/>
                        </span>
                    )
            }
        </form>
    )
};

export default CreateTasks;
