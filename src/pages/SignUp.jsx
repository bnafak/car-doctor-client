import { useContext } from "react";
import { Link } from "react-router-dom";
import login from "../../public/login/login.svg";
import { AuthContext } from "../providers/AuthProviders";

const SignUp = () => {

  const { createUser } = useContext(AuthContext);

  const handleSignup = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);

    createUser(email, password)
      .then(result => {
        const user= result.user;
        console.log(user)
      })
      .catch(error => console.error(error));
  };

  return (
    <div className="hero  bg-base-200">
      <div className="hero-content flex">
        <div className="w-1/2 mx-auto mr-20">
          <img src={login} alt="" />
        </div>
        <div className="card shadow-2xl w-1/2 bg-base-100">
          <div className="card-body">
            <form onSubmit={handleSignup}>
              <h1 className="text-2xl font-bold">Sign up now!</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  value="Sign up"
                  type="submit"
                />
              </div>
            </form>
            <p className="my-4 text-center">
              If new{" "}
              <Link className="text-blue-600 " to="/signUp">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
