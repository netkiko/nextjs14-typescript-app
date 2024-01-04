import CommentsHome from "@/components/comments/comments";
import { IComment } from "../types/comments";

const CommentsPage = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/comments", { cache: "no-store" });
    const comments: IComment[] = await res.json();

    return <CommentsHome comments={comments} />;
};

export default CommentsPage;
