export default function todoReducer(state, action) {
    switch (action.type) {
        case "ADDTASK":
            return { tasks: [...state.tasks, { id: action.payload.currId, name: action.payload.newTaskName }] }

        case "DELETETASK":
            {
                const newTasks = [...state.tasks];
                const filteredTasks = newTasks.filter((task) => task.id !== action.payload.id);
                return { tasks: filteredTasks };
            }

        case "EDITTASK":
            {
                const newTasks = [...state.tasks];
                const taskIndex = newTasks.findIndex((task) => task.id === action.payload.id);
                newTasks[taskIndex] = {
                    id: action.payload.id,
                    name: action.payload.newTaskName,
                };
                return { tasks: newTasks }
            }

    }
}