import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";


const AppRouting = () => {
    return (
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About/>} />       
          </Route>
        </Routes>
      </BrowserRouter>
    );
}

export default AppRouting;