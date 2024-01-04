import { IPageProps } from "@/app/types/global";
import { IUser } from "@/app/types/users";
import UserHome from "@/components/user";

const UserPage = async ({ params }: IPageProps) => {
    // Incremental Static Generation (ISR) - combination of SSR and SSG, as it refreshes the data every 10 seconds
    const res = await fetch(`http://jsonplaceholder.typicode.com/users/${params.id}`, {
        next: { revalidate: 10 },
    });
    const userData: IUser = await res.json();

    return <UserHome userData={userData} />;
};

export default UserPage;
