import { Link, useNavigate } from "react-router-dom";
import { useAdminAuth } from "../providers/AdminAuthProvider";

const LoginPage = () => {


    const { signInAdmin, error, loading, signInWithGoogle } = useAdminAuth();
    const navigate = useNavigate()

    const handleLogin = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInAdmin(email, password)
      .then((userCredential) => {
        console.log("User logged in:", userCredential.admin);
        navigate("/account"); // or wherever you want to redirect
      })
      .catch((err) => {
        console.error("Login error:", err.message);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">Login to enjoy full features</p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form className="form-control" onSubmit={handleLogin}>
              <label className="label">Email</label>
              <input
                type="email"
                className="input"
                placeholder="Email"
                name="email"
                required
              />

              <label className="label">Password</label>
              <input
                type="password"
                className="input"
                placeholder="Password"
                name="password"
                required
              />

              <p className="mt-2">
                Not Registered? <Link to="/register">Register Now</Link>
              </p>

              <button className="btn btn-neutral mt-4" type="submit">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
