import { Link } from "react-router-dom";

const User = ({ user }) => {
  const { id, title, body } = user;
  return (
    <div className="border-2 border-green-600 rounded-lg p-4">
      <h1 className="text-3xl text-center font-bold">{id}</h1>
      <p className="text-2xl text-center font-bold mb-2">{title}</p>
      <p className="text-xl">{body}</p>
      <div className="flex justify-center ">
        <Link to={`/userDetails/${id}`}>
          <button className="w-full border-2 border-red-500 font-bold rounded-xl mt-2 mx-auto p-2">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default User;
