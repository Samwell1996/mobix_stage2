import { types as t } from "mobx-state-tree";
import { TodoListModel } from "./TodoStore";
import { GroupListModel } from "./GroupStore";

export const RootStore = t.model('RootStore', {
    todos: t.optional(TodoListModel, {}),
    groups: t.optional(GroupListModel, {})
})
    .views((store) => ({
        getFavorites() {
            return store.todos.list.filter(item => item.isFavorite);
        }
    }));

export const rootStore = RootStore.create({});

rootStore.groups.addGroup('Favorites');
rootStore.groups.addGroup('Tasks');
rootStore.todos.add('todo something_first');
rootStore.todos.add('todo something_second');

console.log(JSON.stringify(rootStore, null, 2));
const todo0 = rootStore.todos.list[0];
const todo1 = rootStore.todos.list[1];
const group = rootStore.groups.list[0];

group.addTodo(todo0);
group.addTodo(todo1);
