import Task from "./Task"

    export default function tasks({allTasks}){
    return(
        allTasks.map((task)=>(
            <Task text={task.text} done={task.done}/>
            
        ))
    )
}