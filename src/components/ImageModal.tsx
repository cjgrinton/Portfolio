'use client'

import { useEffect } from 'react';
import { Image } from './data.model';

interface ImageModalProps {
    image: Image | null;
    onClose: () => void;
}

export const ImageModal: React.FC<ImageModalProps> = ({ image, onClose }) => {
    // escape key functionality for Flair!
    useEffect(() => {
        const handleESC = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        // attach the event listener when the modal is open
        if (image) {
            document.addEventListener('keydown', handleESC);
        }

        return () => {
            document.removeEventListener('keydown', handleESC);
        };
    }, [image, onClose]);

    if (!image) return null;

    return (
        // backdrop that exits the image when clicked
        <div className="fixed inset-0 bg-red-base flex items-center justify-center z-50 p-4" onClick={onClose}>

            {/* modal content */}
            <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden transform scale-100 transition-transform duration-300" onClick={(e) => e.stopPropagation()}> {/* stops the click from propogating to the backdrop */}

                <div className="flex justify-between items-center p-3">
                    {/* close button and header */}
                    <h2 id="modal-title" className="font-custom text-xl font-bold text-gray-900">{image.alt}</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-red-500 text-2xl">X</button>
                </div>

                <div className="flex justify-start border-b pl-3 pb-2">
                    {/* the tools */}
                    <h3 id="tools" className="font-custom text-lg font-medium text-gray-800">{image.tools}</h3>
                </div>

                <div className="overflow-y-scroll bg-gray-100 flex-grow max-h-[70vh] custom-scrollbar">
                    {/* image display with scroll */}
                    <div className="flex flex-col">
                        {image.urls.map((url, index) => (
                            <img key={index} src={url} alt={`${image.alt} - part ${index + 1}`} className="w-full h-auto block min-h-0" />
                        ))}
                    </div>

                    {/* description text */}
                    <div className="p-8 bg-white border-t border-gray-300">
                        <div className="text-gray-800 text-2xl underline">
                            Description
                        </div>
                        <p className="text-gray-700 text-xl leading-relaxed whitespace-pre-line">{image.description}</p>
                    </div>
                </div>

            </div>
        </div>
    );
};