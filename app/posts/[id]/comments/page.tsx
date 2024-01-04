import { IComment } from "@/app/types/comments";
import { IPageProps } from "@/app/types/global";
import CommentsHome from "@/components/comments/comments";

const PostCommentsPage = async ({ params }: IPageProps) => {
    // Static Site Generation (SSG) because by default it API fetched respones is { cache: "store" }
    const res = await fetch(`http://jsonplaceholder.typicode.com/posts/${params.id}/comments`, {
        cache: "no-store",
    });
    const comments: IComment[] = await res.json();

    return <CommentsHome comments={comments} />;
};

export default PostCommentsPage;
