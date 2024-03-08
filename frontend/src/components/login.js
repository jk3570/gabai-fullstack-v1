import { useState } from "react";
import Popup from "reactjs-popup";
import { IoIosCloseCircleOutline, IoMdEye, IoMdEyeOff } from "react-icons/io"; // Import eye icons
import Signup from "./signup";
import { Link } from "react-router-dom";

const Login = ({ login }) => {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // State to track password visibility

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Your login logic here using the `login` state passed as prop
    if (isLoading) return; // Prevent multiple submissions
    setIsLoading(true);
    try {
      // Perform login operation here
      // For example:
      // const response = await login(identifier, password);
      // Handle response accordingly
    } catch (error) {
      setError("An error occurred during login."); // Example error message
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Popup
      trigger={
        <button className="border-2 rounded-xl p-4 py-1.5 border-azure-500 text-azure-500 hover:scale-[1.1] transition-all duration-200 ease-in-out">
          Log in
        </button>
      }
      modal
      nested
    >
      {(close) => (
        <form onSubmit={handleSubmit}>
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-opacity-25 bg-black ">
            <div className="modal h-[23rem] w-[31.00rem] rounded-2xl bg-white flex flex-col mx-10 animate__animated animate__zoomIn animate__faster">
              <div className="flex flex-row align-center justify-end p-1">
                <IoIosCloseCircleOutline
                  className="text-3xl cursor-pointer"
                  onClick={() => close()}
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h1 className="font-bold text-4xl">
                  Sign In to <span className="text-azure">GabAi</span>
                </h1>
                <p>Empower your workplace today!</p>
                <br />
              </div>

              <div className="flex flex-col items-center justify-center">
                <input
                  type="text"
                  id="identifier"
                  name="identifier"
                  placeholder="Email or Username"
                  onChange={(e) => setIdentifier(e.target.value)}
                  value={identifier}
                  className="w-[25rem] border-2 border-black rounded-xl p-2"
                />
                <span className="py-2"></span>
                <div className="relative w-[25rem]">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    className="w-full border-2 border-black rounded-xl p-2 pr-10" // Added pr-10 for eye icon
                  />
                  <div
                    className="absolute inset-y-0 right-0 flex items-center mr-2 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)} // Toggle password visibility
                  >
                    {showPassword ? <IoMdEyeOff /> : <IoMdEye />}
                  </div>
                </div>
              </div>
              <div className="mx-12">
                <br />
                <Link to="/signed-in">
                  <button
                    disabled={isLoading}
                    type="submit"
                    className="w-full bg-azure-500 text-white font-bold rounded-xl p-2"
                    onClick={() => close()}
                  >
                    Log In
                  </button>
                </Link>
                <br />
                {error && <div className="error">{error}</div>}
              </div>
              <br />
              <div className="flex flex-row items-center justify-center">
                <p>
                  Don't have an account? <Signup />
                </p>
              </div>
            </div>
          </div>
        </form>
      )}
    </Popup>
  );
};

export default Login;
