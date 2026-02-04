'use client'

import { Image, galleryImages } from './data.model';

interface ImageGalleryProps {
    onSelectImage: (image: Image) => void;
}

export const ImageGallery: React.FC<ImageGalleryProps> = ({ onSelectImage }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-7xl mx-auto px-4">
            {galleryImages.map((image) => (
                <div key={image.id} className="group cursor-pointer bg-white rounded-lg shadow-xl overflow-hidden transition-all duration-300 hover:-translate-y-2  hover:shadow-2xl hover:ring-4 hover:ring-blue-500/30" onClick={() => onSelectImage(image)}>

                    <div className="relative h-64 md:h-80 lg:h-[450px] overflow-hidden">
                        <img src={image.urls[0]} alt={image.alt} className="w-full h-full object-cover object-top transition duration-500 group-hover:opacity-105" />
                    </div>

                    <div className="p-6">
                        <h3 className="capitalize text-md md:text-2xl font-medium text-gray-800 leading-tight line-clamp-2">
                            {image.alt}
                        </h3>

                        <div className="flex flex-wrap gap-2 mt-3">
                            {image.tags.map((tag, index) => (
                                <span key={index} className="px-2 py-1 text-[10px] md:text-xs font-bold uppercase tracking-wider bg-blue-50 text-blue-600 border border-blue-100 rounded-md">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};