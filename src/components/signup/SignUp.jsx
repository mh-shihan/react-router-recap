import ReusableForm from "../reusable-form/ReusableForm";

const SignUp = () => {
  const handleSubmit = (value) => {
    console.log(value);
  };
  return (
    <div>
      <ReusableForm
        formTitle={"Signup Form"}
        submitBtnText={"Signup"}
        handleSubmit={handleSubmit}
      ></ReusableForm>
    </div>
  );
};

export default SignUp;
