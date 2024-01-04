import { IPost } from "@/app/types/posts";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    const resp = await fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`);
    const resp1: IPost[] = await resp.json();

    return Response.json(resp1);
}
