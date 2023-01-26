import React from "react";
import "../styles/Yapilacaklar.css";
import { useState } from "react";

function TaskCreate({ onCreate, task, taskformUpdate, onUpdate }) {
  const [title, setTitle] = useState(task ? task.title : "");
  const [taskDesc, setTaskDesc] = useState(task ? task.taskDesc : "");

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleTaskChange = (event) => {
    setTaskDesc(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const tarih = new Date();
    let date = tarih.toDateString();

    if (taskformUpdate) {
      onUpdate(task.id, title, taskDesc, date);
    } else {
      onCreate(title, taskDesc, date);
    }
    setTitle("");
    setTaskDesc("");
  };

  return (
    <div>
      {taskformUpdate ? (
        <div>
          <h3>Bearbeiten</h3>
          <label className="GorevOlusturmaBasliklar">
            Bitte ändern Sie den Titel
          </label>
          <input
            value={title}
            maxLength={20}
            onChange={handleChange}
            className="GorevGuncellemeVeriGiris"
          />
          <label className="GorevOlusturmaBasliklar">
            Bitte ändern Sie die Details
          </label>
          <textarea
            value={taskDesc}
            maxLength={100}
            onChange={handleTaskChange}
            className="GorevGuncellemeVeriGiris"
            onKeyDown={(e) => {
              if (e.code === "ControlRight") {
                handleSubmit();
              }
            }}
            rows={4}
          />
          <button
            className="GorevOlusturmaEklemeButonu-Guncelleme"
            onClick={handleSubmit}
          >
            Bearbeiten
          </button>
        </div>
      ) : (
        <div className="GorevOlusturma">
          <h3>ToDo-List</h3>
          <label className="GorevOlusturmaBasliklar">Note Titel</label>
          <input
            value={title}
            onChange={handleChange}
            maxLength={20}
            className="GorevOlusturmaVeriGiris"
          />
          <label className="GorevOlusturmaVeriGiris">Note Detail</label>
          <textarea
            value={taskDesc}
            onChange={handleTaskChange}
            maxLength={100}
            className="GorevOlusturmaVeriGiris"
            onKeyDown={(e) => {
              if (e.code === "ControlRight") {
                handleSubmit(e);
              }
            }}
            rows={4}
          />
          <button className="GorevOlusturmaEklemeButonu" onClick={handleSubmit}>
            Hinzufügen
          </button>
        </div>
      )}
    </div>
  );
}

export default TaskCreate;
