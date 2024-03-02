import { useForm } from "react-hook-form";
import { useState } from "react";
import { useSignup } from "../hooks/useSignup";
import Popup from "reactjs-popup";
import { IoIosCloseCircleOutline } from "react-icons/io";

const Signup = () => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const passwordValue = watch("password");
  const [step, setStep] = useState(1);
  const [passwordMatchError, setPasswordMatchError] = useState(false);
  const { signup, error, isLoading } = useSignup();

  const nextStep = async () => {
    switch (step) {
      case 1:
        const isValidStep1 = await handleSubmit(onSubmitStep1Validation)();
        if (isValidStep1) {
          setStep(step + 1);
        }
        break;
      case 2:
        const isValidStep2 = await handleSubmit(onSubmitStep2Validation)();
        if (isValidStep2) {
          setStep(step + 1);
        }
        break;
      default:
        break;
    }
  };  
  
  const prevStep = () => {
    setStep(step - 1);
  };

  const onSubmitStep1Validation = async (data) => {
    const isValid = Object.keys(errors).length === 0;
    if (!isValid) {
      return false;
    }
    setStep(2); // Proceed to next step if validation passes
    return true;
  };

  const onSubmitStep2Validation = async (data) => {
    const isValid = Object.keys(errors).length === 0;
    if (!isValid) {
      return false;
    }
    setStep(3); // Proceed to next step if validation passes
    return true;
  };

  const onSubmit = async (data) => {
    console.log("Form Data:", data); // Log the form data
    if (data.password !== data.confirmPassword) {
      setPasswordMatchError(true);
      return;
    }
    setPasswordMatchError(false);
    await signup(data.username, data.firstname, data.lastname, data.gender, data.birthdate, data.region, data.province, data.city, data.barangay, data.email, data.password);
  };

  return (
    <Popup
      trigger={<a href="#" className="text-azure">Sign up here</a>}
      modal
      nested
    >
      {(close) => (
        <form className="signup" onSubmit={handleSubmit(onSubmit)}>
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 ">
            <div className="modal h-[35rem] w-[31.25rem] rounded-2xl bg-white flex flex-col mx-10 overflow-y-auto">
              <div className="flex flex-row align-center justify-end p-1">
                <IoIosCloseCircleOutline
                  className="text-3xl cursor-pointer"
                  onClick={() => close()}
                />
              </div>

              <div className="flex flex-col items-center justify-center">
                <h1 className="font-bold text-4xl">
                  Sign Up to <span className="text-azure">GabAi</span>
                </h1>
                <p>Register now for a richer, more empowered journey!</p>
              </div>

              <div className="flex flex-col px-5 py-5">
                {step === 1 && (
                  <>
                    <b>Personal Information 1/3</b>
                    <label htmlFor="firstname">First Name</label>
                    <input
                      type="text"
                      name="firstname"
                      placeholder="Juan"
                      {...register("firstname", {
                        required: true,
                        pattern: /^[A-Za-z]+$/
                      })}
                      className="w-[full] border-2 border-black rounded-xl p-2"
                    />
                    {errors.firstname && errors.firstname.type === "required" && (
                      <span className="error">First Name is required</span>
                    )}
                    {errors.firstname && errors.firstname.type === "pattern" && (
                      <span className="error">First Name must contain only letters</span>
                    )}

                    {/* Lastname*/}
                    <label htmlFor="lastname">Last Name</label>
                    <input
                      type="text"
                      name="lastname"
                      placeholder="Dela Cruz"
                      {...register("lastname", {
                        required: true,
                        pattern: /^[A-Za-z]+$/
                      })}
                      className="w-[full] border-2 border-black rounded-xl p-2"
                    />
                    {errors.lastname && errors.lastname.type === "required" && (
                      <span className="error">Last Name is required</span>
                    )}
                    {errors.lastname && errors.lastname.type === "pattern" && (
                      <span className="error">Last Name must contain only letters</span>
                    )}

                    {/* Gender */}
                    <div className="flex flex-col">
                      <label htmlFor="gender">Gender</label>
                      <select
                        name="gender"
                        id="gender"
                        {...register("gender", { required: true })}
                        className="w-[full] border-2 border-black rounded-xl p-2"
                      >
                        <option value="">- Select Gender -</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="LGBTQ">LGBTQ</option>
                        <option value="Prefer not to say">Prefer not to say</option>
                      </select>
                      {errors.gender && <span className="error">Gender is required</span>}
                    </div>

                    {/* Birthdate*/}
                    <label htmlFor="birthdate">Birthdate</label>
                    <input
                      type="date"
                      name="birthdate"
                      placeholder="mm/dd/yyyy"
                      {...register("birthdate", {
                        required: true,
                        validate: {
                          validAge: (value) => {
                            const currentDate = new Date();
                            const selectedDate = new Date(value);
                            let age = currentDate.getFullYear() - selectedDate.getFullYear();
                            const monthDiff = currentDate.getMonth() - selectedDate.getMonth();
                            const dayDiff = currentDate.getDate() - selectedDate.getDate();
                            if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
                              age--;
                            }
                            return age >= 18;
                          }
                        }
                      })}
                      className="w-[full] border-2 border-black rounded-xl p-2"
                    />
                    {errors.birthdate && errors.birthdate.type === "required" && (
                      <span className="error">Birthdate is required</span>
                    )}
                    {errors.birthdate && errors.birthdate.type === "validAge" && (
                      <span className="error">You must be 18 years old or above</span>
                    )}

                    {/* Next button */}
                    <button type="button" onClick={nextStep}>Next</button>
                  </>
                )}

                {step === 2 && (
                  <>
                    {/* Your fields for Address here */}
                    <div className="flex flex-col">
                      <b>Address Information 2/3</b>
                      {/* Region */}
                      <label htmlFor="region">Region</label>
                      <select
                        name="region"
                        id="region"
                        {...register("region", { required: true })}
                        className="w-[full] border-2 border-black rounded-xl p-2"
                      >
                        <option value=""> -Region- </option>
                        <option value="ncr"> ncr </option>
                        <option value="region1"> region2 </option>
                      </select>
                      {errors.region && <span className="error">Region is required</span>}
                    </div>

                      {/* Province */}
                      <div className="flex flex-col">
                      <label htmlFor="province">Province</label>
                      <select
                        name="province"
                        id="province"
                        {...register("province", { required: true })}
                        className="w-[full] border-2 border-black rounded-xl p-2"
                      >
                        <option value=""> -Choose your province- </option>
                        <option value="caloocan"> caloocan </option>
                        <option value="malabon"> malabon </option>
                      </select>
                      {errors.province && <span className="error">Province is required</span>}
                    </div>

                    {/* City */}
                    <div className="flex flex-col">
                      <label htmlFor="city">City</label>
                      <select
                        name="city"
                        id="city"
                        {...register("city", { required: true })}
                        className="w-[full] border-2 border-black rounded-xl p-2"
                      >
                        <option value=""> -Choose your city- </option>
                        <option value="caloocan"> caloocan </option>
                        <option value="malabon"> malabon </option>
                      </select>
                      {errors.city && <span className="error">City is required</span>}
                    </div>

                      {/* Barangay */}
                      <div className="flex flex-col">
                      <abel htmlFor="barangay">Barangay</abel>
                      <select
                        name="barangay"
                       id="barangay"
                       {...register("barangay",{ required: true })}
                        className="w-[full] border-2 border-black rounded-xl p-2"
                      >
                        <option value=""> -Choose your Barangay- </option>
                        <option value="caloocan"> caloocan </option>
                        <option value="malabon"> malabon </option>
                      </select>
                      {errors.barangay && <span className="error">Barangay is required</span>}
                    </div>


                    <a href="#" onClick={prevStep}>Previous</a>
                    <button type="button" onClick={nextStep}>Next</button>

                  </>
                )}

                {step === 3 && (
                  <>
                    <div className="flex flex-col px-5 py-5">
                      <b>Account Information 3/3</b>
                      <label htmlFor="username">Username</label>
                      <input
                        type="text"
                        name="username"
                        placeholder="juandelacruz123"
                        {...register("username", {
                          required: true,
                          minLength: 6,
                          maxLength: 12,
                          pattern: /^(?=.*[a-z])(?=.*\d)[a-z\d]+$/i
                        })}
                        className="w-[full] border-2 border-black rounded-xl p-2"
                      />
                      {errors.username && errors.username.type === "required" && (
                        <span className="error">Username is required</span>
                      )}
                      {errors.username && errors.username.type === "minLength" && (
                        <span className="error">Username must be at least 6 characters</span>
                      )}
                      {errors.username && errors.username.type === "maxLength" && (
                        <span className="error">Username cannot exceed 12 characters</span>
                      )}
                      {errors.username && errors.username.type === "pattern" && (
                        <span className="error">Username must contain only lowercase letters and at least one number</span>
                      )}

                      {/* Email */}
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="juandelacruz@domain.com"
                        {...register("email", {
                          required: true,
                          pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ // Regular expression for email validation
                        })}
                        className="w-[full] border-2 border-black rounded-xl p-2"
                      />
                      {errors.email && errors.email.type === "required" && (
                        <span className="error">Email is required</span>
                      )}
                      {errors.email && errors.email.type === "pattern" && (
                        <span className="error">Invalid email address</span>
                      )}

                      {/* Password */}
                      <label htmlFor="password">Password</label>
                      <input
                        id="password"
                        type="password"
                        name="password"
                        placeholder="●●●●●●●●"
                        {...register("password", {
                          required: true,
                          minLength: 8,
                          maxLength: 24,
                          pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,24}$/
                        })}
                        className="w-[full] border-2 border-black rounded-xl p-2"
                      />
                      {errors.password && errors.password.type === "required" && (
                        <span className="error">Password is required</span>
                      )}
                      {errors.password && errors.password.type === "minLength" && (
                        <span className="error">Password must be at least 8 characters</span>
                      )}
                      {errors.password && errors.password.type === "maxLength" && (
                        <span className="error">Password cannot exceed 24 characters</span>
                      )}
                      {errors.password && errors.password.type === "pattern" && (
                        <span className="error">Password must contain at least one number, one capital letter, one small letter, and one special character</span>
                      )}

                      {/* Confirm Password */}
                      <label htmlFor="confirmPassword">Confirm Password</label>
                      <input
                        id="confirmPassword"
                        type="password"
                        name="confirmPassword"
                        placeholder="●●●●●●●●"
                        {...register("confirmPassword", {
                          required: true,
                          validate: {
                            passwordMatch: (value) => value === passwordValue
                          }
                        })}
                        className="w-[full] border-2 border-black rounded-xl p-2"
                      />
                      {errors.confirmPassword && errors.confirmPassword.type === "required" && (
                        <span className="error">Confirm Password is required</span>
                      )}
                      {errors.confirmPassword && errors.confirmPassword.type === "passwordMatch" && (
                        <span className="error">Passwords do not match</span>
                      )}

                      <a href="#" onClick={prevStep}>Previous</a>

                      <button type="submit" className="w-full bg-azure-500 text-white font-bold rounded-xl p-2" disabled={error || isLoading || passwordMatchError}>
                        Sign Up Now!
                      </button>
                    </div>
                  </>
                )}

                {passwordMatchError && (
                  <span className="error">Passwords do not match</span>
                )}

                {error && <div className="error">{error}</div>}
              </div>
            </div>
          </div>
        </form>
      )}
    </Popup>
  );
};

export default Signup;
