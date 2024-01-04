import { IComment } from "@/app/types/comments";
import { IPageProps } from "@/app/types/global";
import CommentHome from "@/components/comment/comment";

const CommentPage = async ({ params }: IPageProps) => {
    // Incremental Static Generation (ISR) - combination of SSR and SSG, as it refreshes the data every 10 seconds
    const res = await fetch(`https://jsonplaceholder.typicode.com/comments/${params.id}`, { next: { revalidate: 10 } });
    const commentData: IComment = await res.json();

    return <CommentHome commentData={commentData} />;
};

export default CommentPage;
