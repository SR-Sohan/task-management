import { useEffect, useState } from "react";
import preview from "../assets/preview.png";
import { toast } from "react-toastify";

const Profile = () => {
  const [auth, setAuth] = useState({});

  const handleChange = (e) => {
    setAuth((even) => ({ ...even, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    let loginUser = JSON.parse(localStorage.getItem("isLogin"));
    let users = JSON.parse(localStorage.getItem("users"));
    const matchedUser = users.find(
      (user) => user.username === loginUser.username
    );
    if (matchedUser) {
      setAuth(matchedUser);
    } else {
      setAuth({});
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (auth.name === "") {
      toast.error("Name is required");
    } else if (auth.password === "" || auth.password.length < 5) {
      toast.error("Password must be 6 character");
    } else if (auth.bio === "") {
      toast.error("Bio is required");
    } else {
      const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

      const userIndex = existingUsers.findIndex(
        (user) => user.email === auth.email
      );

      if (userIndex !== -1) {
        existingUsers[userIndex] = auth;

        localStorage.setItem("users", JSON.stringify(existingUsers));

        toast.success("User data updated successfully");
      } else {
        toast.error("User not found");
      }
    }
  };

  return (
    <>
      <div className="container">
        <form
          onSubmit={handleSubmit}
          className="mt-5 mx-auto w-75 shadow-lg p-5 rounded"
          action=""
        >
          <h3 className="text-success">Your Profile</h3>
          <hr />
          <div className="row pt-3">
            <div className="col-md-4">
              <label htmlFor="name">Name</label>
              <input
                className="form-control"
                type="text"
                name="name"
                id="name"
                value={auth.name}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="email">Email</label>
              <input
                readOnly
                className="form-control"
                type="email"
                name="email"
                id="email"
                value={auth.email}
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="password">Password</label>
              <input
                className="form-control"
                type="password"
                name="password"
                id="password"
                value={auth.password}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6 mt-3">
              <label htmlFor="bio">Bio</label>
              <textarea
                className="form-control"
                name="bio"
                id="bio"
                cols="30"
                rows="5"
                value={auth.bio}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="col-md-6 mt-3">
              <img
                className="mb-3"
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "40%",
                  objectFit: "cover",
                }}
                src={auth.image ? auth.image : preview}
                alt=""
              />
              <input className="form-control" type="file" name="" id="" />
            </div>
            <div className="col-md-8 mt-3">
              <button type="submit" className="w-100 btn btn-outline-danger">
                Update Profile
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Profile;
