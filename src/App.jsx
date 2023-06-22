import { Navigate, Outlet } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";

function App() {
  const redirectToPosts = true;

  return (
    <>
      <NavBar />
      <Outlet />
      {
        redirectToPosts && <Navigate to="/posts" />
      }
    </>
  );
}

export default App;
