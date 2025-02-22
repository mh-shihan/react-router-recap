import { createContext, useContext, useState } from "react";
import ReusableForm from "../reusable-form/ReusableForm";
import { AuthContext } from "../../providers/AuthProvider";
export const GoogleSignUpContext = createContext(null);

const SignUp = () => {
  const [user, setUser] = useState({});
  const { googleSignIn } = useContext(AuthContext);

  const handleSubmit = (value) => {
    console.log(value);
  };

  const handleGoogleButtonClick = () => {
    console.log("----------> Google Button Clicked -------------------->");
    googleSignIn()
      .then((result) => {
        const user = result.user;
        const userInfo = {
          name: user?.displayName,
          email: user.email,
          photoURL: user?.photoURL,
        };
        setUser(userInfo);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  console.log(user);
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
      <p className="text-center">{user?.name}</p>
    </div>
  );
};

export default SignUp;
