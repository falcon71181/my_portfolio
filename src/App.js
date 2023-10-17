import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home';
import Projects from './components/Projects';

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
    element: <div>g</div>,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
