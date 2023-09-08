import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PrivateRoute from "./PrivateRoute";
import DashLayout from "./pages/DashLayout";
import Profile from "./pages/Profile";
import CreateTeam from "./pages/CreateTeam";
import Teams from "./pages/Teams";


const AppRouting = () => {
    return (
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>                
            <Route path="/login" element={<Login/>} />       
            <Route path="register" element={<Register/>} />       
          </Route>
          <Route path="/" element={<PrivateRoute><DashLayout/></PrivateRoute>}>
            <Route  index element={<Home />} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/create-team" element={<CreateTeam/>} />
            <Route path="team/:name" element={<Teams/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    );
}

export default AppRouting;