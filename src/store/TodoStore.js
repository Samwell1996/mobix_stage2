import { types as t, getRoot } from "mobx-state-tree";
import uuid from "uuid";

export const TodoModel = t
    .model('TodoModel', {
        id: t.identifier,
        task: t.string,
        isCompleted: t.optional(t.boolean, false),
        isFavorite: t.optional(t.boolean, false)
    })
    .actions((store) => ({
        toggleFavorite() {
            store.isFavorite = !store.isFavorite;
        },

        toggleCompleted() {
            store.isCompleted = !store.isCompleted;
        }
    }));

export const TodoListModel = t
    .model('TodoListModel', {
        list: t.optional(t.array(TodoModel), [])
    })
    .actions((store) => ({
        add(task) {
            const todo = {
                id: uuid(),
                task
            };

            store.list.unshift(todo)
        }
    }));
