import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";

const Posts = () => {
    const myPosts = useLoaderData();
    return (
        <div>
            <h3 className="text-3xl font-bold" > Total Posts: {myPosts.length}  </h3>
            <div className="md:grid grid-cols-3 lg:grid-cols-4">
                {
                    myPosts.map(ypost => <Post key={ypost.id} xpost={ypost}></Post>)
                }
            </div>
        </div>
    )
};
export default Posts;