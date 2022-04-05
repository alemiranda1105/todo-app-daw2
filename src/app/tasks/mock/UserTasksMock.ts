import { UserTask } from "../interfaces/task.interface";

export const taskList = () => {
    var list: UserTask[] = [];
    for(var i = 0; i < 6; i++) {
        list.push({
            id: `${i}`,
            name: `Task ${i}`,
            description: `Description ${i}`,
            user_id: "1",
            completed: false,
            date: "10-04-2022"
        })
    }
    return list;
}