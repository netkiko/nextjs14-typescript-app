import { IPageProps } from "@/app/types/global";
import { IPhoto } from "@/app/types/photos";
import PhotoHome from "@/components/photo/photo";

const PhotoPage = async ({ params }: IPageProps) => {
    // Incremental Static Generation (ISR) - combination of SSR and SSG, as it refreshes the data every 10 seconds
    const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${params.id}`, { next: { revalidate: 10 } });
    const photoData: IPhoto = await res.json();

    return <PhotoHome photoData={photoData} />;
};

export default PhotoPage;
