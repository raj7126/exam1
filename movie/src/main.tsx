import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
// import App from "./App.tsx";
import TasksContextProvider from "./contexts/TasksContext.tsx";
import SearchMovie from "./pages/SearchMovie.tsx";
import ShowMovie from "./pages/ShowMovie";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TasksContextProvider>
      <BrowserRouter>
        <Routes>
          {/* <Route index element={<App />} /> */}
          <Route path="/searchmovie" element={<SearchMovie />} />
          <Route path="/showmovie/:id" element={<ShowMovie />} />
        </Routes>
      </BrowserRouter>
    </TasksContextProvider>
  </StrictMode>
);

// Assignment
// 1. save studentdata in localstorage
// 2. create a route contain upperlimit, lowerlimit
// localhost:5173/?upper=20&&lower==10
//3. create a route in which wee will provide id and show detail
// of specific student
// localhost:5173/:id
