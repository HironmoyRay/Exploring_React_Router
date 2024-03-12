import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetails = () => {
    const navigate = useNavigate();
  const post = useLoaderData();
  const { id, title, body } = post;
  const goBackHandle = () => {
    navigate(-1);
  };
  return (
    <div className="w-1/2 mx-auto">
      <h3 className="text-2xl font-semibold">Id: {id}</h3>
      <p className=" font-bold py-4">Title: {title}</p>
      <p className="font-semibold p-4">
        <small>{body}</small>
      </p>
      <button
        onClick={goBackHandle}
        className="bg-violet-300 px-4 rounded-md mb-4"
      >
        Go Back
      </button>
    </div>
  );
};

export default PostDetails;
