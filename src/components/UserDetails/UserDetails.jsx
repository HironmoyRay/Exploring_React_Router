import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
  const myUser = useLoaderData();
  const { id, name, email } = myUser;
  return (
    <div>
      <h2>User Id: {id}</h2>
      <h1>User Name: {name}</h1>
      <p>Email: {email}</p>
    </div>
  );
};
export default UserDetails;
