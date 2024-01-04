import { IUsers } from "@/app/types/users";

export async function GET() {
    const res = await fetch("http://jsonplaceholder.typicode.com/users");
    const resp: IUsers[] = await res.json();

    return Response.json(resp);
}
