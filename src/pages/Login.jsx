import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate()
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (data.email === "") {
      toast.error("Email is Required");
    } else if (data.password === "" || data.password.length < 5) {
      toast.error("Password is Required and must be 6 character");
    } else {
      const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

      if (
        existingUsers.some(
          (user) => user.email === data.email && user.password === data.password
        )
      ) {
        toast.success("User Login Successful");
        setData({
          email: "",
          password: "",
        });
        setTimeout(()=> {
            let user = JSON.stringify({email: data.email, status: true})
            localStorage.setItem("isLogin",user);
            navigate("/")
        },1000)
      } else {
        toast.error("User Email and Password didn't Match");
      }
    }
  };

  return (
    <div className="container">
      <form
        onSubmit={handleSubmit}
        className="bg-white w-50 mx-auto mt-5 shadow-lg p-5 border border-danger rounded"
      >
        <h3>Sing In</h3>
        <hr />
        <div className="mb-3 pt-4">
          <label htmlFor="email">Email</label>
          <input
            className="form-control"
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
            value={data.email}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password">Password</label>
          <input
            className="form-control"
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
            value={data.password}
          />
        </div>
        <button className="btn  btn-outline-danger w-100">Login</button>
        <p className="mt-3 text-center">
          Don't have an account?{" "}
          <Link className="text-danger" to="/register">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
