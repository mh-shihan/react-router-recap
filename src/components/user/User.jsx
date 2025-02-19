const User = ({ user }) => {
  const { id, title, body } = user;
  return (
    <div className="border-2 border-green-600 rounded-lg p-4">
      <h1 className="text-3xl text-center font-bold">{id}</h1>
      <p className="text-2xl text-center font-bold mb-2">{title}</p>
      <p className="text-xl">{body}</p>
    </div>
  );
};

export default User;
