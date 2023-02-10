import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import routes from "./Routes/Routes/Routes";

function App() {
  return (
    <>
      <Toaster />
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}

export default App;
