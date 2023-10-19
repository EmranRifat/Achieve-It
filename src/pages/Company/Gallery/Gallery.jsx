import { useState, useEffect } from "react";
import GalleryModal from "./GalleryModal";
import galleryBanner from "../../../assets/Gallery/gallaryBanner.png";

const Gallery = () => {
  const [galleryImages, setGalleryImages] = useState([]);

  useEffect(() => {
    fetch("/gallery.json")
      .then((res) => res.json())
      .then((data) => setGalleryImages(data));
  }, []);

  return (
    <div>
      <div className="text-center py-16 bg-gray-200">
        <h1 className="text-5xl font-bold font-serif">Gallery</h1>
      </div>
      <div className="container mx-auto px-5 md:px-0  grid md:grid-cols-4 grid-cols-1 gap-8  ">
        {galleryImages.map((image) => (
          <GalleryModal key={image.id} id={image.id} image={image.image_url} />
        ))}
      </div>
      <div className=" mt-20">
        <img className=" h-[700px] w-full  " src={galleryBanner} alt="" />
      </div>
    </div>
  );
};

export default Gallery;
