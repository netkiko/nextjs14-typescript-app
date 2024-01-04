import { IUsers } from "../types/users";
import UsersHome from "@/components/users";

const UsersPage = async () => {
    // Server Side Rendering (SSR) because of { cache: "no-store" }
    const res = await fetch("https://jsonplaceholder.typicode.com/users", { cache: "no-store" });
    const users: IUsers[] = await res.json();

    return <UsersHome users={users} />;
};

export default UsersPage;
