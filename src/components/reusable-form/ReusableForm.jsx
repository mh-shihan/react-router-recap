const ReusableForm = ({ formTitle, submitBtnText, handleSubmit }) => {
  const handleLocalSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const value = {
      name: form.name.value,
      email: form.email.value,
      password: form.password.value,
    };
    handleSubmit(value);
  };
  return (
    <div className="flex justify-center mt-20 ">
      <form
        onSubmit={handleLocalSubmit}
        className="border-2 p-4 border-fuchsia-500 rounded-lg space-y-4 w-1/4 bg-fuchsia-300"
      >
        <h1 className="my-1 text-center font-bold text-2xl ">{formTitle}</h1>
        <input
          className="border-2  rounded-md w-full"
          type="text"
          name="name"
        />
        <br />
        <input
          className="border-2  rounded-md w-full"
          defaultValue="shihan@gmail.com"
          type="email"
          name="email"
        />
        <br />
        <input
          className="border-2  rounded-md w-full"
          type="password"
          name="password"
        />
        <br />
        <button className="w-full flex justify-center">
          <input
            className="border-2 border-black font-bold rounded-md cursor-pointer mx-auto px-6 py-1"
            type="submit"
            value={submitBtnText}
          />
        </button>
      </form>
    </div>
  );
};

export default ReusableForm;
