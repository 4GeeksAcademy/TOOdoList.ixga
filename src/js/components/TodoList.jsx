import React, { useState } from "react";

function TodoList() {
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState("");

  const agregarTarea = () => {
    if (nuevaTarea.trim() === "") return;
    setTareas([...tareas, nuevaTarea]);
    setNuevaTarea("");
  };

  const eliminarTarea = (index) => {
    setTareas(tareas.filter((_, i) => i !== index));
  };

  return (
    <div className="container mt-4">
      <h1>Lista de cosas por hacer</h1>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
          placeholder="Nueva tarea"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              agregarTarea();
            }
          }}
        />
      </div>
      <ul className="list-group">
        {tareas.map((tarea, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            {tarea}
            <button className="btn btn-danger btn-sm" onClick={() => eliminarTarea(index)}>
              ×
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;