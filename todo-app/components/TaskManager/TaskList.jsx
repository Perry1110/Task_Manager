import { View } from "react-native";
import { styles } from "./TaskList.style";
import { TaskCard } from "./TaskCard";

export const TaskList = ({ tasks, onDelete }) => {
    return (
        <View style={styles.listContainer}>
            {/* <TaskCard task={tasks[0]}/>
            <TaskCard task={tasks[1]}/>
            <TaskCard task={tasks[2]}/> */}
            {
                tasks.map((task) => (
                    <TaskCard 
                        key={task.taskId} 
                        task={task}
                        onDelete={onDelete}/>
                ))
            }
        </View>
    )
}