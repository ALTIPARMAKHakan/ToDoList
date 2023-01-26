import React from "react";
import "../styles/Yapilacaklar.css";
import { useState } from "react";
import TaskCreate from "./TaskCreate";

function TaskShow({ task, onDelete, onUpdate }) {
  const [showEdit, setShowEdit] = useState(false);

  const handleDeleteClick = () => {
    onDelete(task.id);
  };
  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };
  const handleSubmit = (id, updatedTitle, updatedTaskDesc, updatedDate) => {
    setShowEdit(false);
    onUpdate(id, updatedTitle, updatedTaskDesc, updatedDate);
  };

  return (
    <div className="GoreviEkranaBasma">
      {showEdit ? (
        <TaskCreate task={task} onUpdate={handleSubmit} taskformUpdate={true} />
      ) : (
        <div>
          <h3 className="GoreviEkranaBasmaBasliklari">Note Title</h3>
          <p>{task.title}</p>
          <h4 className="GoreviEkranaBasmaBasliklari">Note Details</h4>

          <p>{task.taskDesc}</p>

          <h5 className="GoreviEkranaBasmaBasliklari">Not Datum</h5>
          <p>{task.date}</p>
          <div>
            <button className="silmeButonu" onClick={handleDeleteClick}>
              Löschen
            </button>
            <button className="guncellemeButonu" onClick={handleEditClick}>
              Aktualisieren
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TaskShow;
