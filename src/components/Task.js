export default function Task({text,done}){
    return(<div>
        {done?(<input type="checkbox" defaultChecked={true}/>):(<input type="checkbox" defaultChecked={false}/>)}
        <div className="task-name">{text}</div>
        <button>Edit</button>
        <button>delete</button>
    </div>)}