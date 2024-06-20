import Task from './Task'
import { useSelector } from "react-redux";


const TaskList = () => {
    const list = useSelector((state) => state.ToDo.list)
    return(
        <div>
            {list.map((item, index) => (
                <Task key={index} task={item.task} description={item.description} />
            ))}
        </div>
    )
}

export default TaskList;