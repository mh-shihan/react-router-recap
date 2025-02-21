const ReusableForm = () => {
  return (
    <div className="flex justify-center mt-20 ">
      <form className="border-2 p-4 border-lime-500 rounded-lg space-y-4">
        <input
          className="border-2 border-black rounded-md"
          type="text"
          name="name"
        />
        <br />
        <input
          className="border-2 border-black rounded-md"
          type="password"
          name="password"
        />
        <br />
        <input
          className="border-2 border-black rounded-md w-full cursor-pointer "
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
};

export default ReusableForm;
