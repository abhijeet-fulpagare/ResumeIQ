import { RouterProvider } from "react-router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


import router from "./routes/App.routes.jsx";

const App = () => {
  return (
    <div className="min-h-screen bg-zinc-900">
      <RouterProvider router={router} />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        theme="colored"
        newestOnTop
      />
    </div>
  );
};

export default App;