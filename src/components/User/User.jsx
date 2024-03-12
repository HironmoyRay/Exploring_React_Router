import { Link } from "react-router-dom";

const User = ({user}) => {
    const {id,name} = user;
    return (
        <div className="border-2 p-4 rounded-xl m-2">
            <h2>Id:{ id} </h2>
            <p>Name: {name} </p>
            <Link to={`/user/${id}`} className="bg-violet-200 px-2 rounded-sm">Details</Link>
        </div>
    )
};

export default User;