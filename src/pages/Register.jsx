import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const handleChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.name === "") {
      toast.error("Name is Required");
    } else if (data.email === "") {
      toast.error("Email is Required");
    } else if (data.password === "" || data.password.length < 5) {
      toast.error("Password is Required & Must 6 character");
    } else if (data.cpassword === "" || data.cpassword.length < 5) {
      toast.error("Confirm Password is Required & Must 6 character");
    } else if (data.password !== data.cpassword) {
      toast.error("Password and Confirm Password Not Match");
    } else {
      const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

      if (!existingUsers.some((user) => user.email === data.email)) {
        const newUser = { ...data, image: "", bio: "" };
        existingUsers.push(newUser);
        localStorage.setItem("users", JSON.stringify(existingUsers));
        setData({
          name: "",
          email: "",
          password: "",
          cpassword: "",
        });
        toast.success("Register Successful");

        setTimeout(() => {
          window.location.href = "/login";
        }, 1000);
      } else {
        toast.error("Email already registered. Please use a different email.");
      }
    }
  };

  return (
    <div className="container mb-5">
      <form
        onSubmit={handleSubmit}
        className="bg-white w-50 mx-auto mt-5 shadow-lg p-5 border border-danger rounded"
      >
        <h3>Sing Up</h3>
        <hr />
        <div className="mb-3 pt-4">
          <label htmlFor="name">Name</label>
          <input
            className="form-control"
            type="text"
            name="name"
            id="name"
            onChange={handleChange}
            value={data.name}
          />
        </div>
        <div className="mb-3">
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
        <div className="mb-3">
          <label htmlFor="cpassword">Confirm Password</label>
          <input
            className="form-control"
            type="password"
            name="cpassword"
            id="cpassword"
            onChange={handleChange}
            value={data.cpassword}
          />
        </div>
        <button type="submit" className="btn  btn-outline-danger w-100">
          Register
        </button>
        <p className="mt-3 text-center">
          Do have an account?{" "}
          <Link className="text-danger" to="/login">
            Sign In
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
