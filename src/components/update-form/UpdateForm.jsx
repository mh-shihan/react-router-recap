import ReusableForm from "../reusable-form/ReusableForm";

const UpdateForm = () => {
  const handleSubmit = (value) => {
    console.log(value);
  };
  return (
    <div>
      <ReusableForm
        formTitle={"Update Form"}
        submitBtnText={"Update"}
        handleSubmit={handleSubmit}
      ></ReusableForm>
    </div>
  );
};

export default UpdateForm;
