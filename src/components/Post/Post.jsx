import { Link } from "react-router-dom";

const Post = ({ xpost }) => {
  const { id, title } = xpost;
  return (
    <div className="border-2  m-4 rounded-xl p-4">
      <h4>Id: {id}</h4>
      <h2 className="font-semibold m-4">Title: {title}</h2>
      <Link to={`/post/${id}`} className="bg-violet-200 px-2 rounded-md">
        Details
      </Link>
    </div>
  );
};

export default Post;
