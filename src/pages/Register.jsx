import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="container mb-5">
        <form className="bg-white w-50 mx-auto mt-5 shadow-lg p-5 border border-danger rounded" action="">
            <h3>Sing Up</h3>
            <hr />
            <div className="mb-3 pt-4">
                <label htmlFor="name">Name</label>
                <input className="form-control" type="text" name="name" id="name" />
            </div>
            <div className="mb-3">
                <label htmlFor="email">Email</label>
                <input className="form-control" type="email" name="email" id="email" />
            </div>
            <div className="mb-3">
                <label htmlFor="password">Password</label>
                <input className="form-control" type="password" name="password" id="password" />
            </div>
            <div className="mb-3">
                <label htmlFor="cpassword">Confirm Password</label>
                <input className="form-control" type="password" name="cpassword" id="cpassword" />
            </div>
            <button className="btn  btn-outline-danger w-100">Register</button>
            <p className="mt-3 text-center">Do have an account? <Link className="text-danger" to="/login">Sign In</Link></p>
        </form>
    </div>
    );
}

export default Register;