import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div><Home></Home></div>,
  },
  {
    path: "/project",
    element: <div><Projects></Projects></div>,
  },
  {
    path: "/contact",
    element: <div><Contact></Contact></div>,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
