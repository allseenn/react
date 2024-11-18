import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTasks } from "./store/tasksSlice";

const App = () => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.tasks);

  useEffect(() => {
    dispatch(fetchTasks()); 
  }, [dispatch]);

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка: {error}</p>;

  return (
    <div>
      <h1>Список задач</h1>
      <ul>
        {items.map((task) => (
          <li key={task.id}>
            {task.title} {task.completed ? "(Выполнено)" : "(Не выполнено)"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
