import React, { Component } from "react";
import TaskShow from "./TaskShow";
import "../styles/Yapilacaklar.css";

export default class TaskList extends Component {
  render() {
    const { tasks, onDelete, onUpdate } = this.props;

    return (
      <div className="GorevListeleme">
        {tasks.map((task, index) => {
          return (
            <TaskShow
              task={task}
              key={index}
              onDelete={onDelete}
              onUpdate={onUpdate}
            />
          );
        })}
      </div>
    );
  }
}
