const ReusableForm = () => {
  return (
    <div>
      <form>
        <input type="text" name="name" />
        <br />
        <input type="password" name="password" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default ReusableForm;
