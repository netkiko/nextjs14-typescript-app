import { IAlbum } from "../types/albums";
import AlbumsHome from "@/components/albums/albums";

const AlbumsPage = async () => {
    // Server Side Rendering (SSR) because of { cache: "no-store" }
    const res = await fetch("https://jsonplaceholder.typicode.com/albums", { cache: "no-store" });
    const albums: IAlbum[] = await res.json();

    return <AlbumsHome albums={albums} />;
};

export default AlbumsPage;
