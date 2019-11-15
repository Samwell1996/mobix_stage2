import { types as t } from "mobx-state-tree";
import { TodoModel } from "./TodoStore";
import uuid from "uuid";
import {rootStore} from "./RootStore";

export const GroupModel = t
    .model('GroupModel', {
        id: t.string,
        title: t.string,
        todos: t.array(t.reference(TodoModel)),
    })
    .actions((store) => ({
        addTodo(todo) {
            store.todos.unshift(todo)
        },

        toggleActive() {
            store.isActive = !store.isActive
        }
    }))
    .views((store) => ({
        getUncompleted() {
            if(store.title === "Favorites")
            {return rootStore.todos.list.filter(item => (!item.isCompleted && item.isFavorite)).length}
            return store.todos.filter(item => !item.isCompleted).length
        }
    }));

export const GroupListModel = t
    .model('GroupListModel', {
        list: t.optional(t.array(GroupModel), [])
    })
    .actions((store) => ({
        addGroup(title) {
            const group = {
                id: uuid(),
                title
            };
            store.list.unshift(group)
        },

        deleteGroup(id) {
            store.list = store.list.filter(item => !((item.id === id) && !(item.title === "Favorites")))
        }
    }));
