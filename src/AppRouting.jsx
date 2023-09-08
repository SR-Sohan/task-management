import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PrivateRoute from "./PrivateRoute";
import DashLayout from "./pages/DashLayout";
import Profile from "./pages/Profile";


const AppRouting = () => {
    return (
        <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Layout />}>
                
            <Route index  element={<Login/>} />       
            <Route path="register" element={<Register/>} />       
          </Route>
          <Route path="/" element={<PrivateRoute><DashLayout/></PrivateRoute>}>
            <Route  index element={<Home />} />
            <Route path="/profile" element={<Profile/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
}

export default AppRouting;