import {FC, useState} from "react";
import TodoStore from "./TodoStore";
import {observer} from "mobx-react";

interface TodoListProps {
    todoStore: TodoStore;
}

const TodoList: FC<TodoListProps> = observer(({todoStore}) => {
    const [value, setValue] = useState<string>("");

    return (
        <div style={{margin: 'auto', padding: 16, width: "fit-content"}}>
            <div>
                <input value={value} onChange={(e) => setValue(e.target.value)} type={"text"}/>
                <button onClick={() => {
                    if (value) {
                        todoStore.addTodo(value);
                    }
                    setValue('');
                }}
                >
                    Submit
                </button>
            </div>

            <br/>

            <div>Completed: {todoStore.status.completed}</div>
            <div>Remaining: {todoStore.status.remaining}</div>

            <br/>

            <ul>
                {todoStore.todos.map((todo) => {
                    return (
                        <li
                            key={todo.id}
                            onClick={() => {
                                todoStore.toggleTodo(todo.id)
                            }}
                        >
                            {todo.title} [{todo.completed ? 'X' : ' '}]
                        </li>
                    );
                })}
            </ul>
        </div>
    );
});

export default TodoList;