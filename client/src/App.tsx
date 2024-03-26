// import Login from "./pages/Login";
import { Routes, Route, Navigate, Outlet, useLocation } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import Users from "./pages/Users";
import Trash from "./pages/Trash";
import TaskDetails from "./pages/TaskDetails";
import Login from "./pages/Login";
import { Toaster } from "sonner";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";

function Layout () {
  const user = "";

  const location = useLocation();

  return user ? (
    <div className="w-full h-screen flex flex-col md:flex-row">
      <div className="w-1/5 h-screen bg-white sticky top-0 hidden md:block">
        {/* {<Sidebar />} */}
      </div>
      {/* {<MobileSidebar />} */}
      <div className="flex-1 overflow-y-auto">
        {/* {<Navbar />} */}
        <div className="p-4 2xl: px-10">
          <Outlet />
        </div>
      </div>
    </div>
  ) : (
    <Navigate to="/log-in" state={{from: location}} replace />
  );
}

function App() {
  return (
    <main className="w-full min-h-screen bg-sky-blue-200">
      {/* <Login /> */}
      {/* <h1 className='bg-red-600 text-white'>Simplify task management and prioritize work with Tasksyncer</h1> */}
      
      <Routes>
        {/* {Public Routes} */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterPage /> } />
        
        {/* {Private Routes} */}
        <Route element={<Layout />}>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/completed/:status" element={<Tasks />} />
          <Route path="/in-progress/:status" element={<Tasks />} />
          <Route path="/todo/:status" element={<Tasks />} />
          <Route path="/team" element={<Users />} />
          <Route path="/trashedd" element={<Trash />} />
          <Route path="/task/:id" element={<TaskDetails />} />
        </Route>       
      </Routes>   

      <Toaster richColors />
    </main>
  );
}

export default App;