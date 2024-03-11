import { useState } from "react";
import Popup from "reactjs-popup";
import { IoIosCloseCircleOutline } from "react-icons/io";
import Signup from "./signup";
import { useLogin } from "../hooks/useLogin";

const Login = () => {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(identifier, password);
  };

  return (
    <Popup
      trigger={
        <button className="border-2 rounded-xl p-4 py-1.5 border-azure-500 text-azure-500">
          Log in
        </button>
      }
      modal
      nested
    >
      {(close) => (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 backdrop-filter backdrop-blur-lg bg-opacity-25 bg-black ">
          <div className="modal h-[23rem] w-[31.00rem] rounded-2xl bg-white flex flex-col mx-10 ">
            <div className="flex flex-row align-center justify-end p-1">
              <IoIosCloseCircleOutline
                className="text-3xl cursor-pointer"
                onClick={() => close()}
              />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h1 className="font-bold text-4xl">
                Log in to <span className="text-azure">GabAi</span>
              </h1>
              <p>Empower your workplace today!</p>
              <br />
            </div>

            <form onSubmit={handleSubmit}>
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
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  className="w-[25rem] border-2 border-black rounded-xl p-2"
                />
                {error && <div className="text-red-500 error">{error}</div>}
              </div>
              
              <div className="mx-12">
                <br />
                <button
                  disabled={isLoading}
                  type="submit"
                  className="w-full bg-azure-500 text-white font-bold rounded-xl p-2"
                >
                  Log In
                </button>
                <br />

                
              </div>
            </form>

            <br />
            <div className="flex flex-row items-center justify-center">
              <p>
                Don't have an account? <Signup />
              </p>
            </div>
          </div>
        </div>
      )}
    </Popup>
  );
};

export default Login;
