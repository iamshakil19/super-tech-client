import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import useAuthCheck from "./hooks/useAuthCheck";
import routes from "./Routes/Routes/Routes";
import spinner from "./Assets/Others/spinner.gif";
function App() {
  const authChecked = useAuthCheck();
  return !authChecked ? (
    <div className="min-h-screen mx-auto container flex justify-center items-center">
      <div>
        <img src={spinner} alt="" className="w-24 md:w-32" />
      </div>
    </div>
  ) : (
    <>
      <Toaster />
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}

export default App;
