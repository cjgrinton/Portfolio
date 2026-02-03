'use client'

import { useState } from 'react';
import { Image } from '../../components/data.model';
import { ImageModal } from '../../components/ImageModal';
import { ImageGallery } from '../../components/ImageGallery';
import Link from "next/link";
import Footer from "../../components/Footer";

export default function Projects() {
    const [selectedImage, setSelectedImage] = useState<Image | null>(null);

    const openModal = (image: Image) => {
        setSelectedImage(image);
    }

    const closeModal = () => {
        setSelectedImage(null);
    }

    return (

        <main className="min-h-screen flex flex-col items-center p-8 relative z-10">
            <div className="w-full  flex-grow flex flex-col items-center gap-2 mb-12 mt-10">

                <div className="flex flex-col items-center text-center">
                    <div className="font-custom font-semibold text-4xl text-slate-900 mb-5" >
                        Projects
                    </div>
                    <div className="font-custom font-semibold text-2xl text-slate-700 mb-2" >
                        Caleb Grinton
                    </div>

                    <nav className="font-custom flex flex-row justify-center gap-6 mb-12 mt-1 w-full border-b border-slate-900 pb-4">
                        <Link href="/" className="font-light text-md text-slate-600 hover:text-slate-900 transition hover:-translate-y-1">Home</Link>
                        <Link href="/projects" className="font-light text-md text-slate-600 hover:text-slate-900 transition hover:-translate-y-2">Projects</Link>
                        <Link href="/contact" className="font-light text-md text-slate-600 hover:text-slate-900 transition hover:-translate-y-2">Contact</Link>
                    </nav>

                    <div className="flex flex-col w-full">
                        <ImageGallery onSelectImage={openModal} />
                        <ImageModal image={selectedImage} onClose={closeModal} />
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}