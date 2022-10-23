export const Tasks = (props) => {
  return (
    <div style={{backgroundColor : props.isCompleted ? "green" : "red"}}>
      <h3>
      <button onClick={() => props.completedTaskCheck(props.id)}> Completed </button>
        {props.taskName }
        <button onClick={() => props.deleteTaskFromList(props.id)}> X </button>
      </h3>
    </div>
  );
};
