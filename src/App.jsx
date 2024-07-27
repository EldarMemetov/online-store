// App.jsx
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navigation from "./Navigation";
import NewTest from "./newTest/NewTest";
import { fetchTasks } from "./components/http/TaskOps";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import BooksList from "./components/http/BooksList";

function App() {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.tasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <div>
      <h1>Hello</h1>
      <Navigation />
      <Routes>
        <Route path="/" element={<div>Hello Home</div>} />
        <Route path="Item" element={<NewTest />} />
        <Route path="About" element={<div>Hello About</div>} />
        <Route path="books" element={<BooksList items={items} />} />
      </Routes>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
    </div>
  );
}

export default App;
