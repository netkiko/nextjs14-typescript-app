import { IComment } from "@/app/types/comments";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    const res = await fetch(`http://jsonplaceholder.typicode.com/posts/${id}/comments`);
    const resp: IComment[] = await res.json();

    return Response.json(resp);
}
