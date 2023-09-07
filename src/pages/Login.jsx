import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="container">
            <form className="bg-white w-50 mx-auto mt-5 shadow-lg p-5 border border-danger rounded" action="">
                <h3>Sing In</h3>
                <hr />
                <div className="mb-3 pt-4">
                    <label htmlFor="email">Email</label>
                    <input className="form-control" type="email" name="email" id="email" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password">Password</label>
                    <input className="form-control" type="password" name="password" id="password" />
                </div>
                <button className="btn  btn-outline-danger w-100">Login</button>
                <p className="mt-3 text-center">Don't have an account? <Link className="text-danger" to="/register">Sign Up</Link></p>
            </form>
        </div>
    );
}

export default Login;