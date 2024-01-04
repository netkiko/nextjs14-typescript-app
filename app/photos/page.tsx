import PhotosHome from "@/components/photos/photos";
import { IPhoto } from "../types/photos";

const PhotosPage = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/photos", { cache: "no-store" });
    const photos: IPhoto[] = await res.json();

    return <PhotosHome photos={photos} />;
};

export default PhotosPage;
