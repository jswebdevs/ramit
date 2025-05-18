import { Link, useNavigate } from "react-router-dom";
import { useAdminAuth } from "../providers/AdminAuthProvider";

const RegisterPage = ({children}) => {

  const {registerAdmin, error, loading, signInWithGoogle} = useAdminAuth();
  const navigate = useNavigate()

  const handleRegister = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    registerAdmin(email, password)
      .then((userCredential) => {
        console.log("User Created:", userCredential.user);
        navigate("/login"); // or wherever you want to redirect
      })
      .catch((err) => {
        console.error("Login error:", err.message);
      });
    
  };

  const handleGoogleLogin = ()=>{
    signInWithGoogle()
      .then((result) => {
        console.log("User logged in with Google:", result.user);
        navigate("/account"); // or wherever you want to redirect
      })
      .catch((err) => {
        console.error("Google login error:", err.message);
      });
  }

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <p className="py-6">Register With US</p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form className="form-control" onSubmit={handleRegister}>
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
                Already Registered? <Link to="/login">Login instead.</Link>
              </p>

              <button className="btn btn-neutral mt-4" type="submit">
                Register Now
              </button>
              <div className="social-login flex flex-row items-center">
                <h2> or Login With:</h2>
                <div className="flex flex-row gap-2 ms-4">
                  <button
                    className="btn btn-neutral"
                    onClick={handleGoogleLogin}
                  >
                    {" "}
                    <FaGoogle></FaGoogle>
                  </button>
                  <button className="btn btn-neutral">
                    {" "}
                    <FaFacebook></FaFacebook>{" "}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
