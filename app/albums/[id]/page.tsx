import { IAlbum } from "@/app/types/albums";
import { IPageProps } from "@/app/types/global";
import AlbumHome from "@/components/album/album";

const AlbumPage = async ({ params }: IPageProps) => {
    // Incremental Static Generation (ISR) - combination of SSR and SSG, as it refreshes the data every 10 seconds
    const res = await fetch(`https://jsonplaceholder.typicode.com/albums/${params.id}`, { next: { revalidate: 10 } });
    const albumData: IAlbum = await res.json();

    return <AlbumHome albumData={albumData} />;
};

export default AlbumPage;
