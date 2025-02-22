import { createContext, useContext, useState } from "react";
import ReusableForm from "../reusable-form/ReusableForm";
import { AuthContext } from "../../providers/AuthProvider";
export const GoogleSignUpContext = createContext(null);

const SignUp = () => {
  const { googleSignIn, createUser } = useContext(AuthContext);

  const [user, setUser] = useState({});
  const [newUser, setNewUser] = useState(null);

  const handleSignup = (value) => {
    const { email, password } = value;
    createUser(email, password)
      .then((userCredential) => {
        setNewUser(userCredential.user);
        console.log(userCredential.user);
      })
      .catch((error) => {
        console.log(error.message);
      });

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
  // console.log(user);
  return (
    <div>
      <GoogleSignUpContext.Provider value={handleGoogleButtonClick}>
        <ReusableForm
          formTitle={"Signup Form"}
          handleSignup={handleSignup}
          submitBtnText={"Signup"}
          // component={<GoogleButton />}
        ></ReusableForm>
      </GoogleSignUpContext.Provider>
      {user && <p className="text-center">{user?.name}</p>}
      <p className="text-center">
        {newUser && `Welcome ${newUser.email}`}
      </p>{" "}
    </div>
  );
};

export default SignUp;
