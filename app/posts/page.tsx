import { IPost } from "../types/posts";
import PostsHome from "@/components/posts";

const PostsPage = async () => {
    // Server Side Rendering (SSR) because of { cache: "no-store" }
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", { cache: "no-store" });
    const posts: IPost[] = await res.json();

    return <PostsHome posts={posts} />;
};

export default PostsPage;
