import { useLoaderData, useNavigate } from "react-router-dom";

const UserDetails = () => {
    const navigate = useNavigate();
  const myUser = useLoaderData();
  const { id, name, email } = myUser;

  const goBackHandle = () => {
    navigate(-1);
  }
  return (
    <div>
      <h2>User Id: {id}</h2>
      <h1>User Name: {name}</h1>
      <p>Email: {email}</p>
      <button onClick={goBackHandle} className="bg-violet-300 px-4 rounded-md m-4">Go Back</button>
    </div>
  );
};
export default UserDetails;
