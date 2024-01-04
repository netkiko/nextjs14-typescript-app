import { ITodo } from "@/app/types/todos";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}/todos`);
    const resp: ITodo[] = await res.json();

    return Response.json(resp);
}
