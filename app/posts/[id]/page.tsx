import { IPageProps } from "@/app/types/global";
import { IPost } from "@/app/types/posts";
import PostHome from "@/components/post/post";

const PostPage = async ({ params }: IPageProps) => {
    // Static Site Generation (SSG) because by default it API fetched respones is { cache: "store" }
    const res = await fetch(`http://jsonplaceholder.typicode.com/posts/${params.id}`, {
        cache: "no-store",
    });
    const postData: IPost = await res.json();

    return <PostHome postData={postData} />;
};

export default PostPage;
