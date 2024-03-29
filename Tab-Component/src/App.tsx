import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";

const router = createBrowserRouter([{ path: "/", element: <Home /> }]);

const App = () => {
	return <RouterProvider router={router} />;
};

export default App;
