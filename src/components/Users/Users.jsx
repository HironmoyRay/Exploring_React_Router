import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const Users = () => {
  const myUsers = useLoaderData();
  return (
    <div>
      <h2 className="font-bold text-3xl">Total Users:{myUsers.length}</h2>
      <div className="md:grid grid-cols-3 lg:grid-cols-4">
        {
            myUsers.map(user => <User key={user.id} user={user}></User>)
        }
      </div>
    </div>
  );
};

export default Users;
