import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { regions, provinces, cities, barangays } from 'select-philippines-address';
import { useSignup } from "../hooks/useSignup";
import Popup from "reactjs-popup";
import { IoIosCloseCircleOutline } from "react-icons/io";
import toast, { Toaster } from 'react-hot-toast';


// Define the saveSettings function
const saveSettings = (settings) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate saving settings for 3 seconds
      // After 3 seconds, resolve the promise to indicate success
      resolve();
    }, 1000); // 3000 milliseconds = 3 seconds
  });
};

// Define the notify function
const notify = (settings) => toast.promise(
  saveSettings(settings), // Pass settings as an argument to saveSettings
   {
     loading: 'Creating an account...',
     success: <b>Account has been created successfully!</b>,
     error: <b>Creating failed.</b>,

   }
 );


const notifyErr = () => toast.error('Error messsage', {
  position: "top-center"
})

const Signup = ( {initialAddress }) => {

  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedProvince, setSelectedProvince] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedBarangay, setSelectedBarangay] = useState('');


  const [regionOptions, setRegionOptions] = useState([]);
  const [provinceOptions, setProvinceOptions] = useState([]);
  const [cityOptions, setCityOptions] = useState([]);
  const [barangayOptions, setBarangayOptions] = useState([]);

  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const passwordValue = watch("password");
  const [step, setStep] = useState(1);
  const [passwordMatchError, setPasswordMatchError] = useState(false);
  const { signup, error, isLoading } = useSignup();

    // Fetch regions on component mount
    useEffect(() => {
      regions()
          .then((regionList) => {
              console.log('Fetched regions:', regionList); // Log fetched regions
              setRegionOptions(regionList);
              if (initialAddress && initialAddress.region) {
                  setSelectedRegion(initialAddress.region.region_code);
              }
          })
          .catch(error => {
              console.error('Error fetching regions:', error);
          });
  }, [initialAddress]);

    // Fetch provinces when region changes
    useEffect(() => {
        console.log('Selected region:', selectedRegion); // Log selected region
        if (selectedRegion) {
            provinces(selectedRegion)
                .then((provinceList) => {
                    console.log('Fetched provinces:', provinceList); // Log fetched provinces
                    setProvinceOptions(provinceList);
                    setSelectedProvince(''); // Reset selected province when region changes
                })
                .catch(error => {
                    console.error('Error fetching provinces:', error);
                });
        }
    }, [selectedRegion]);

    // Fetch cities when province changes
    useEffect(() => {
        if (selectedProvince) {
            cities(selectedProvince)
                .then((cityList) => {
                    console.log('Fetched cities:', cityList); // Log fetched cities
                    setCityOptions(cityList);
                    setSelectedCity(''); // Reset selected city when province changes
                })
                .catch(error => {
                    console.error('Error fetching cities:', error);
                });
        }
    }, [selectedProvince]);

    // Fetch barangays when city changes
    useEffect(() => {
        if (selectedCity) {
            barangays(selectedCity)
                .then((barangayList) => {
                    console.log('Fetched barangays:', barangayList); // Log fetched barangays
                    setBarangayOptions(barangayList);
                    setSelectedBarangay(''); // Reset selected barangay when city changes
                })
                .catch(error => {
                    console.error('Error fetching barangays:', error);
                });
        }
    }, [selectedCity]);

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


        // Convert region code to name
        const selectedRegionName = regionOptions.find(region => region.region_code === data.region)?.region_name || '';

        // Convert province code to name
        const selectedProvinceName = provinceOptions.find(province => province.province_code === data.province)?.province_name || '';

        // Convert city code to name
        const selectedCityName = cityOptions.find(city => city.city_code === data.city)?.city_name || '';

        // Convert barangay code to name
        const selectedBarangayName = barangayOptions.find(barangay => barangay.brgy_code === data.barangay)?.brgy_name || '';

        // Call signup function with converted address names
        await signup(data.username, data.firstname, data.lastname, data.gender, data.birthdate, selectedRegionName, selectedProvinceName, selectedCityName, selectedBarangayName, data.email, data.password);
};

  

  return (
    <Popup
      trigger={<a href="#" className="text-azure">Login in here</a>}
      modal
      nested
    >
      {(close) => (
        <form className="signup" onSubmit={handleSubmit(onSubmit)}>
          
                
                
                
                {step === 1 && (
                  <>
                  <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 ">
                ` <div className="modal w-auto rounded-2xl bg-white flex flex-col mx-10">
                <div className="flex flex-row align-center justify-end p-1">
                <IoIosCloseCircleOutline
                  className="text-3xl cursor-pointer"
                  onClick={() => close()}
                />
              </div>
                <div className="flex flex-col  px-14 py-5">
            
                    
  




              <div className="flex flex-col items-center justify-center">
                <h1 className="font-bold text-4xl">
                  Sign Up to <span className="text-azure">GabAi</span>
                </h1>
                <p className="text-1xl">Register now for a richer, more empowered journey!</p>
                    <br/>
              </div>


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
                      <span className="text-red-500 error">First Name is required</span>
                    )}
                    {errors.firstname && errors.firstname.type === "pattern" && (
                      <span className="text-red-500 error">First Name must contain only letters</span>
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
                      <span className="text-red-500 error">Last Name is required</span>
                    )}
                    {errors.lastname && errors.lastname.type === "pattern" && (
                      <span className="text-red-500 error">Last Name must contain only letters</span>
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
                      {errors.gender && <span className="text-red-500 error">Gender is required</span>}
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
                      <span className="text-red-500 error">Birthdate is required</span>
                    )}
                    {errors.birthdate && errors.birthdate.type === "validAge" && (
                      <span className="text-red-500 error">You must be 18 years old or above</span>
                    )}
                    <br/>
                    {/* Next button */}
                    
                    <button type="button" className="w-24 bg-azure-500 text-white rounded-xl p-2 float-right" onClick={nextStep}>Next {">"}</button>

                  </div>
                  </div>
                  </div>
                  </>
                )}

                {step === 2 && (
                  
                  <>
                 
                    
                    {/* Your fields for Address here */}
                   
            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 ">
            <div className="modal w-auto rounded-2xl bg-white flex flex-col mx-10 ">
            <div className="flex flex-row align-center justify-end p-7">

              
            <div className="flex flex-col  px-5 py-5">
              <div className="flex flex-col items-center justify-center">
                <h1 className="font-bold text-4xl">
                  Sign Up to <span className="text-azure">GabAi</span>
                </h1>
                <p>Register now for a richer, more empowered journey!</p>
              </div>

                    
                    <div className="flex flex-col">
                    <b className="flex flex-col items-center justify-center text-xl">Address Information 2/3</b>
                      {/* Region */}
                      <label htmlFor="region">Region</label>
                      <select name="region"
                        id="region"
                        {...register("region", { required: true })}
                        className="w-[full] border-2 border-black rounded-xl p-3" 
                        value={selectedRegion} onChange={(e) => setSelectedRegion(e.target.value)}>
                          <option value="">-- Select Region --</option>
                          {regionOptions.map((region) => (
                              <option key={region.region_code} value={region.region_code}>{region.region_name}</option>
                          ))}
                      </select>
                      {errors.region && <span className="text-red-500 error">Region is required</span>}
                    </div>

                      {/* Province */}
                    <div className="flex flex-col">
                      <label htmlFor="province">Province</label>
                      <select name="province"
                        id="province"
                        {...register("province", { required: true })}
                        className="w-[full] border-2 border-black rounded-xl p-3"
                        value={selectedProvince} onChange={(e) => setSelectedProvince(e.target.value)}>
                          <option value="">-- Select Province --</option>
                          {provinceOptions.map((province) => (
                              <option key={province.province_code} value={province.province_code}>{province.province_name}</option>
                          ))}
                      </select>
                      {errors.province && <span className="text-red-500 error">Province is required</span>}
                    </div>

                    {/* City */}
                    <div className="flex flex-col">
                      <label htmlFor="city">City</label>
                      <select name="city"
                        id="city"
                        {...register("city", { required: true })}
                        className="w-[full] border-2 border-black rounded-xl p-3" 
                        value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>

                        <option value="">-- Select City --</option>
                        {cityOptions.map((city) => (
                            <option key={city.city_code} value={city.city_code}>{city.city_name}</option>
                        ))}

                      </select>
                      {errors.city && <span className="text-red-500 error">City is required</span>}
                    </div>

                      {/* Barangay */}
                      <div className="flex flex-col">
                        <label htmlFor="barangay">Barangay</label>
                        <select name="barangay"
                          id="barangay"
                          {...register("barangay", { required: true })}
                          className="w-[full] border-2 border-black rounded-xl p-3" 
                          value={selectedBarangay} onChange={(e) => setSelectedBarangay(e.target.value)}>

                            <option value="">-- Select Barangay --</option>
                            {barangayOptions.map((barangay) => (
                                <option key={barangay.brgy_code} value={barangay.brgy_code}>{barangay.brgy_name}</option>
                            ))}

                        </select>
                        {errors.barangay && <span className="text-red-500 error">Barangay is required</span>}
                      </div>
                      <br/>
                      <div className="" style={{ display: 'flex', justifyContent: 'space-between' }}>
                      
                      <a href="#" className="px-2 py-2 text-md text-center text-black" onClick={prevStep}> {"<"} Previous</a>
                        
                        <button type="button" className="w-24 bg-azure-500 text-white rounded-xl p-2 " onClick={nextStep}>Next {">"}</button>
                          </div>
                          </div>
                          </div>
                          </div>
                          </div>
                  </>
                )}

                {step === 3 && (
                  
                  <>
            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 ">
            <div className="modal w-auto rounded-2xl bg-white flex flex-col mx-10 ">
            <div className="flex flex-row align-center justify-end px-12 py-8">

            <div className="flex flex-col  px-5 py-5">

                    <div>
                      <Toaster
                          position="top-center"
                        />
                    </div>
              <div className="flex flex-col items-center justify-center">
                <h1 className="font-bold text-4xl">
                  Sign Up to <span className="text-azure">GabAi</span>
                </h1>
                <p>Register now for a richer, more empowered journey!</p>
              </div>

                  
                    <div className="flex flex-col py-3">
                      <b className="flex flex-col items-center justify-center text-xl">Account Information 3/3</b>
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
                        <span className="text-red-500 error">Username is required</span>
                      )}
                      {errors.username && errors.username.type === "minLength" && (
                        <span className="text-red-500 error">Username must be at least 6 characters</span>
                      )}
                      {errors.username && errors.username.type === "maxLength" && (
                        <span className="text-red-500 error">Username cannot exceed 12 characters</span>
                      )}
                      {errors.username && errors.username.type === "pattern" && (
                        <span className="text-red-500 error">Username must contain only lowercase letters <br/> and at least one number</span>
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
                        <span className="text-red-500 error">Email is required</span>
                      )}
                       {error && <div className="text-red-500 error">{error}</div>}
                      {errors.email && errors.email.type === "pattern" && (
                        <span className="text-red-500 error">Invalid email address</span>
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
                        <span className="text-red-500 error">Password is required</span>
                      )}
                      {errors.password && errors.password.type === "minLength" && (
                        <span className="text-red-500 error">Password must be at least 8 characters</span>
                      )}
                      {errors.password && errors.password.type === "maxLength" && (
                        <span className="text-red-500 error">Password cannot exceed 24 characters</span>
                      )}
                      {errors.password && errors.password.type === "pattern" && (
                        <span className="text-red-500 error">Password must contain at least one number, <br/>one capital letter, one small letter, and one <br/> special character</span>
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
                        <span className="text-red-500 error">Confirm Password is required</span>
                      )}
                      {errors.confirmPassword && errors.confirmPassword.type === "passwordMatch" && (
                        <span className="text-red-500 error">Passwords do not match</span>
                      )}
                      <br/>
                      <div className="" style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <a href="#" className="px-2 py-2 text-md text-center text-black" onClick={prevStep}> {"<"} Previous</a>
                      <br/>
                      <button type="submit" onClick={!error ? notify : undefined} className="w-24 bg-azure-500 text-white rounded-xl p-2 " disabled={error || isLoading || passwordMatchError}>
                        Sign Up!
                      </button>
                      </div>
                      </div>
                      </div>
                      </div>
                      </div>
                      </div>
                  </>
                )}

                {passwordMatchError && (
                  <span className="text-red-500 error">Passwords do not match</span>
                )}

               
              
           
          
        </form>
      )}
    </Popup>
  );
};

export default Signup;
