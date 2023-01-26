import "./styles/App.css";
import { useEffect, useState } from "react";
import TaskCreate from "./Components/TaskCreate";
import TaskList from "./Components/TaskList";
import {
  collection,
  setDoc,
  doc,
  getDocs,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import db from "./firebase";

export default function App() {
  const [tasks, setTasks] = useState([]);

 
  const createTask = async (title, taskDesc, date) => {
    let id = Math.floor(Math.random() * 999999999);

    await setDoc(doc(db, "Notes", `${id}`), {
      id: id,
      title: title,
      taskDesc: taskDesc,
      date: date,
    });

    window.location.reload(true);
  };

  useEffect(() => {
    async function fetchFromFirebase() {
      const data = await getDocs(collection(db, "Notes"));
      data.forEach((doc) => setTasks((tasks) => [...tasks, doc.data()]));
    }

    fetchFromFirebase();
  }, []);

  const deleteTaskById = async (id) => {
    await deleteDoc(doc(db, "Notes", `${id}`));

    const afterDeletingTasks = tasks.filter((task) => task.id !== id);

    setTasks(afterDeletingTasks);
  };

  const editTaskById = async (
    id,
    updatedTitle,
    updatedTaskDesc,
    updatedDate
  ) => {
    await updateDoc(doc(db, "Notes", `${id}`), {
      title: updatedTitle,
      taskDesc: updatedTaskDesc,
      date: updatedDate,
    });

    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          id,
          title: updatedTitle,
          taskDesc: updatedTaskDesc,
          date: updatedDate,
        };
      }
      return task;
    });

    setTasks(updatedTasks);
  };

  return (
    <>
      <div className="App">
        <TaskCreate onCreate={createTask} />
        <TaskList
          tasks={tasks}
          onDelete={deleteTaskById}
          onUpdate={editTaskById}
        />
      </div>
    </>
  );
}
