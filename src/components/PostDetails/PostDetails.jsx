import { useLoaderData } from "react-router-dom";

const PostDetails = () => {
    const post = useLoaderData();
    const {id,title,body} = post;
    return (
        <div className="w-1/2 mx-auto">
            <h3 className="text-2xl font-semibold">Id: {id}</h3>
            <p className=" font-bold py-4">Title: {title}</p>
            <p className="font-semibold p-4"><small>{body}</small></p>
        </div>
    );
};

export default PostDetails;