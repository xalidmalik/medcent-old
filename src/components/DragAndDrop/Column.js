import React from "react";
import Task from "./Task";
import { Droppable } from "react-beautiful-dnd";
import "./column.css";

class Column extends React.Component {
  render() {
    return (
      <div className="Container">
        <div className="Title">{this.props.column.title}</div>
        <Droppable droppableId={this.props.column.id}>
          {(provided, snapshot) => (
            <div
              className="TaskList"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {this.props.tasks.map((task, index) => (
                <Task key={task.id} task={task} index={index} />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    );
  }
}

export default Column;
