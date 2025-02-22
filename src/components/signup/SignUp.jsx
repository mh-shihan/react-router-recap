import { createContext } from "react";
import ReusableForm from "../reusable-form/ReusableForm";
export const GoogleSignUpContext = createContext(null);

const SignUp = () => {
  const handleSubmit = (value) => {
    console.log(value);
  };

  const handleGoogleButtonClick = () => {
    console.log("----------> Google Button Clicked -------------------->");
  };
  return (
    <div>
      <GoogleSignUpContext.Provider value={handleGoogleButtonClick}>
        <ReusableForm
          formTitle={"Signup Form"}
          handleSubmit={handleSubmit}
          submitBtnText={"Signup"}
          // component={<GoogleButton />}
        ></ReusableForm>
      </GoogleSignUpContext.Provider>
    </div>
  );
};

export default SignUp;
