import { IAlbum } from "@/app/types/albums";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}/albums`);
    const resp: IAlbum[] = await res.json();

    return Response.json(resp);
}
