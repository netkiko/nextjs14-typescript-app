import { IPhoto } from "@/app/types/photos";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    const res = await fetch(`https://jsonplaceholder.typicode.com/albums/${id}/photos`);
    const resp: IPhoto[] = await res.json();

    return Response.json(resp);
}
