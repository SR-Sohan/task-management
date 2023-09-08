import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import defaultImage from "../assets/preview.png";
import { useEffect, useState } from "react";

const HeaderNav = () => {
  const [preview, setPreview] = useState("");

  const navigate = useNavigate()

  useEffect(() => {
    let loginUser = JSON.parse(localStorage.getItem("isLogin")) || [];
    let users = JSON.parse(localStorage.getItem('users')) || []

   let filterUser =  users.find( user => user.email === loginUser.email)

   setPreview(filterUser && filterUser.image)

  }, []);



  const handleLogout = () => {
    localStorage.removeItem("isLogin");
    toast.success("Logout Successful");
    setTimeout(() => {
      navigate("/login")
    }, 1000);
  };

  return (
    <nav className="sb-topnav navbar navbar-expand navbar-dark bg-success">
      <a className="navbar-brand ps-3" href="/">
        Tasks
      </a>

      <button
        className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0"
        id="sidebarToggle"
        href="#!"
      >
        <i className="fas fa-bars"></i>
      </button>
      <div className="ms-auto"></div>

      <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            id="navbarDropdown"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                objectFit: "cover",
              }}
              src={preview ? preview : defaultImage}
              alt=""
            />
          </a>

          <ul
            className="dropdown-menu dropdown-menu-end"
            aria-labelledby="navbarDropdown"
          >
            <li>
              <Link className="dropdown-item" to="/profile">
                Profile
              </Link>
            </li>

            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a onClick={handleLogout} className="dropdown-item" href="#">
                Logout
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNav;
