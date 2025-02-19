import { useLoaderData, useNavigate } from "react-router-dom";

const UserDetails = () => {
  const { id, title } = useLoaderData();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <h1 className="text-5xl text-center mt-20">{id}</h1>
      <h2 className="text-3xl text-center">{title}</h2>
      <div className="flex justify-center">
        <button
          onClick={handleGoBack}
          className="text-center border-2 border-red-500 font-bold rounded-xl mt-4 mx-auto p-4"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default UserDetails;
