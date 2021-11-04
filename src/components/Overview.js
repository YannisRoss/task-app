import React from "react";

const Overview = (props) => {
  const { tasks, removeTask } = props;

  return (
    <ul>
      {tasks.map((task, index) => {
        return ( 
          <div key={task.id}>        
            <p >{index+1}. {task.text}</p> 
            <button onClick={() => removeTask(task)}>Delete</button>
          </div>

        )
      })}
    </ul>
  );
};

export default Overview;