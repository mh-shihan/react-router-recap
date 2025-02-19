import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
  const { id, title } = useLoaderData();
  return (
    <div>
      <h1 className="text-5xl text-center mt-20">{id}</h1>
      <h2 className="text-3xl text-center">{title}</h2>
    </div>
  );
};

export default UserDetails;
